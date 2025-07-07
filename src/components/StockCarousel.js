import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import './StockCarousel.css';

const StockCarousel = () => {
  const [stocks, setStocks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to real-time updates from Firestore
    const q = query(collection(db, 'portfolio'), orderBy('symbol'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const stocksData = [];
      querySnapshot.forEach((doc) => {
        stocksData.push({ id: doc.id, ...doc.data() });
      });
      setStocks(stocksData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Auto-rotate carousel every 3 seconds
    if (stocks.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === stocks.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [stocks.length]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatPercentage = (percentage) => {
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="stock-carousel">
        <div className="loading">Loading portfolio...</div>
      </div>
    );
  }

  if (stocks.length === 0) {
    return (
      <div className="stock-carousel">
        <div className="no-stocks">No stocks in portfolio</div>
      </div>
    );
  }

  const currentStock = stocks[currentIndex];

  return (
    <div className="stock-carousel">
      <div className="carousel-container">
        <div className="stock-card">
          <div className="stock-header">
            <h3 className="stock-symbol">{currentStock.symbol}</h3>
            <span className="stock-name">{currentStock.companyName}</span>
          </div>
          
          <div className="stock-price">
            <span className="current-price">
              {formatCurrency(currentStock.currentPrice)}
            </span>
            <span className={`price-change ${currentStock.dayChange >= 0 ? 'positive' : 'negative'}`}>
              {formatCurrency(currentStock.dayChangeAmount)} ({formatPercentage(currentStock.dayChange)})
            </span>
          </div>
          
          <div className="stock-details">
            <div className="detail-item">
              <span className="label">Shares:</span>
              <span className="value">{currentStock.shares}</span>
            </div>
            <div className="detail-item">
              <span className="label">Market Value:</span>
              <span className="value">{formatCurrency(currentStock.marketValue)}</span>
            </div>
            <div className="detail-item">
              <span className="label">Total P&L:</span>
              <span className={`value ${currentStock.totalGainLoss >= 0 ? 'positive' : 'negative'}`}>
                {formatCurrency(currentStock.totalGainLoss)} ({formatPercentage(currentStock.totalGainLossPercent)})
              </span>
            </div>
          </div>
        </div>
        
        <div className="carousel-indicators">
          {stocks.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="last-updated">
        Last updated: {currentStock.lastUpdated ? 
          new Date(currentStock.lastUpdated.seconds * 1000).toLocaleString() : 
          'Unknown'
        }
      </div>
    </div>
  );
};

export default StockCarousel; 