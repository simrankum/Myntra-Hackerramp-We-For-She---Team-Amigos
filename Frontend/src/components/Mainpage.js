// src/components/PromoPage.js
import React from 'react';
import './Mainpage.css';

const PromoPage = () => {
  return (
    <div className="promo-page">
      <div className="promo-banner">
        <div className="promo-banner-content">
          <h1>Western Wear</h1>
          <p>Min. 30% Off</p>
          <a href="/explore" className="explore-link">+ Explore</a>
        </div>
        <div className="promo-banner-image">
          <img src="/bg.png" alt="Family Image" />
        </div>
      </div>
      <div className="promo-footer">
        <p>Discover our latest collection and enjoy exclusive offers!</p>
        <a href="/shop" className="shop-link">Shop Now</a>
      </div>
    </div>
  );
};

export default PromoPage;
