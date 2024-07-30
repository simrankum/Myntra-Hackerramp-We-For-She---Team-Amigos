// Trend.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Trend.css';

const products = [
  { name: 'Product 1', brand: 'GZT', price: 'Rs. xxxx', image: '/OOTD0.jpg' },
  { name: 'Product 2', brand: 'Natilene', price: 'Rs. xxxx', image: '/OOTD26.jpg' },
  { name: 'Product 3', brand: 'Style Quotient', price: 'Rs. xxxx', image: '/OOTD5.jpg' },
  { name: 'Product 4', brand: 'Roadster', price: 'Rs. xxxx', image: '/OOTD10.jpg' },
  { name: 'Product 5', brand: 'SASSAFRAS', price: 'Rs. xxxx', image: '/OOTD18.jpg' },
  { name: 'Product 6', brand: 'SASSAFRAS', price: 'Rs. xxxx', image: '/OOTD25.jpg' },
  // Add more products as needed
];

const reels = [
  { title: 'Reel 1', video: '/reel1.mp4' },
  { title: 'Reel 2', video: '/reel2.mp4' },
  { title: 'Reel 3', video: '/reel3.mp4' },
  { title: 'Reel 4', video: '/reel4.mp4' },
  // Add more reels as needed
];

const Trend = () => {
  const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;  //reset to the start
    }
  };

  const handleReelClick = (index) => {
    navigate(`/reel/${index}`);
  };

  return (
    <div className="genz-trend-page">
      <h1 className='heading-trend'>Gen Z Fashion</h1>
      <div className="filters">
        <button>Filters</button>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '300px' }}/>
            <div className="product-info">
              <h2>{product.brand}</h2>
              <p>{product.price}</p>
              <div className="product-actions">
                <button className="action-button buy">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Buy
                </button>
                <button className="action-button save">
                  <FontAwesomeIcon icon={faHeart} />
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="reel-section">
        <h2 className='heading-zeal'>Zeal</h2>
        <div className="reels">
          {reels.map((reel, index) => (
            <div
              key={index}
              className="reel-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleReelClick(index)}
            >
              <video src={reel.video} muted loop></video>
            </div>
          ))}
        </div>
        <button className="view-more">
          View More
        </button>
      </div>
    </div>
  );
};

export default Trend;
