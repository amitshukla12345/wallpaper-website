import React from 'react';


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p className="about-description">
              Welcome to our platform! We are dedicated to providing the best services 
              and solutions to our customers. Our team consists of experienced professionals 
              who are passionate about what they do.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <h3>Our Mission</h3>
                <p>To deliver exceptional quality and innovative solutions that exceed customer expectations.</p>
              </div>
              
              <div className="feature">
                <h3>Our Vision</h3>
                <p>To be the leading provider in our industry, recognized for excellence and innovation.</p>
              </div>
              
              <div className="feature">
                <h3>Our Values</h3>
                <p>Integrity, Quality, Innovation, and Customer Satisfaction are at the core of everything we do.</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="/assets/about.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;