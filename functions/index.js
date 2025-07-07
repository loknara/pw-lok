const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// Schwab API configuration
const SCHWAB_BASE_URL = 'https://api.schwabapi.com';

/**
 * Scheduled function that runs daily at 5 PM ET (after market close)
 * to fetch stock portfolio data from Schwab API and update Firestore
 */
exports.updateStockPortfolio = functions.pubsub
  .schedule('0 21 * * 1-5') // 9 PM UTC = 5 PM ET, Monday-Friday
  .timeZone('America/New_York')
  .onRun(async (context) => {
    try {
      console.log('Starting stock portfolio update...');
      
      // Get fresh access token
      const accessToken = await getAccessToken();
      
      // Fetch account information
      const accountsResponse = await axios.get(`${SCHWAB_BASE_URL}/trader/v1/accounts`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      });
      
      const accounts = accountsResponse.data;
      
      // Process each account (usually just one for personal accounts)
      for (const account of accounts) {
        const accountHash = account.hashValue;
        
        // Fetch positions for this account
        const positionsResponse = await axios.get(
          `${SCHWAB_BASE_URL}/trader/v1/accounts/${accountHash}/positions`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Accept': 'application/json'
            }
          }
        );
        
        const positions = positionsResponse.data.securitiesAccount.positions;
        
        // Process each position
        for (const position of positions) {
          if (position.instrument.assetType === 'EQUITY') {
            await processEquityPosition(position);
          }
        }
      }
      
      console.log('Stock portfolio update completed successfully');
      return null;
    } catch (error) {
      console.error('Error updating stock portfolio:', error);
      throw error;
    }
  });

/**
 * Get access token from Schwab API using refresh token
 */
async function getAccessToken() {
  try {
    const response = await axios.post(`${SCHWAB_BASE_URL}/v1/oauth/token`, {
      grant_type: 'refresh_token',
      refresh_token: functions.config().schwab.refresh_token,
      client_id: functions.config().schwab.client_id,
      client_secret: functions.config().schwab.client_secret
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

/**
 * Process equity position and update Firestore
 */
async function processEquityPosition(position) {
  try {
    const symbol = position.instrument.symbol;
    const companyName = position.instrument.description || symbol;
    const shares = position.longQuantity || 0;
    const averagePrice = position.averagePrice || 0;
    const marketValue = position.marketValue || 0;
    const currentPrice = marketValue / shares;
    
    // Calculate gains/losses
    const totalCost = shares * averagePrice;
    const totalGainLoss = marketValue - totalCost;
    const totalGainLossPercent = ((totalGainLoss / totalCost) * 100);
    
    // Get current market data for day change
    const marketDataResponse = await axios.get(
      `${SCHWAB_BASE_URL}/marketdata/v1/quotes/${symbol}`,
      {
        headers: {
          'Authorization': `Bearer ${await getAccessToken()}`,
          'Accept': 'application/json'
        }
      }
    );
    
    const quote = marketDataResponse.data[symbol];
    const dayChange = quote.netPercentChangeInDouble || 0;
    const dayChangeAmount = quote.netChange || 0;
    
    // Prepare stock data for Firestore
    const stockData = {
      symbol: symbol,
      companyName: companyName,
      shares: shares,
      averagePrice: averagePrice,
      currentPrice: currentPrice,
      marketValue: marketValue,
      totalGainLoss: totalGainLoss,
      totalGainLossPercent: totalGainLossPercent,
      dayChange: dayChange,
      dayChangeAmount: dayChangeAmount,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    };
    
    // Update Firestore document
    await db.collection('portfolio').doc(symbol).set(stockData, { merge: true });
    
    console.log(`Updated ${symbol}: ${shares} shares at $${currentPrice.toFixed(2)}`);
  } catch (error) {
    console.error(`Error processing position for ${position.instrument.symbol}:`, error);
    throw error;
  }
}

/**
 * Manual trigger function for testing (HTTP endpoint)
 */
exports.updateStockPortfolioManual = functions.https.onRequest(async (req, res) => {
  try {
    await exports.updateStockPortfolio.onRun();
    res.json({ success: true, message: 'Stock portfolio updated successfully' });
  } catch (error) {
    console.error('Manual update failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}); 