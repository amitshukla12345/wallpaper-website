import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Adjust path as needed

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Welcome to Our Website</h1>
          <p>This is a sample banner text where you can write anything you want...</p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="banner-image">
          <img src={bannerImage} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;