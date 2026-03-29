import React from 'react';
import StockCarousel from '../components/StockCarousel';
import '../styles/Portfolio.scss';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <section className="portfolio__hero">
          <h1 className="portfolio__title">Portfolio</h1>
          <p className="portfolio__tagline">
            My stock holdings and investment strategy.
          </p>
        </section>

        <section className="portfolio__section">
          <h2 className="portfolio__label">Holdings</h2>
          <StockCarousel />
        </section>

        <section className="portfolio__section">
          <h2 className="portfolio__label">Philosophy</h2>
          <div className="portfolio__grid">
            <div className="portfolio__card">
              <h3>Investment Philosophy</h3>
              <p>
                I focus on long-term growth investing in technology companies and emerging markets.
                My portfolio is diversified across various sectors with a focus on innovation and disruption.
              </p>
            </div>
            <div className="portfolio__card">
              <h3>Strategy</h3>
              <p>
                I believe in fundamental analysis combined with technical indicators.
                Regular portfolio rebalancing and staying informed about market trends are key to my approach.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
