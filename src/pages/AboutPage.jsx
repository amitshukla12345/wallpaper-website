import React from 'react';
import Header from '../components/Header';
import './AboutPage.css'; // We'll create this CSS file

const AboutPage = () => {
  return (
    <div>
      <Header />
      
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-content">
            <h1>About Our Company</h1>
            <p>We are passionate about creating amazing experiences and delivering exceptional results for our clients.</p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-main">
        <div className="about-container">
          <div className="about-grid">
            
            {/* Our Story */}
            <div className="about-story">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, we started as a small team with big dreams. Today, we've grown into 
                a trusted company serving clients worldwide with our innovative solutions and 
                commitment to excellence.
              </p>
              <p>
                Our journey has been filled with challenges and triumphs, but through it all, 
                we've remained dedicated to our core values of quality, integrity, and innovation.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mission-vision">
              <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To deliver exceptional products and services that empower our clients to 
                  achieve their goals and transform their businesses through innovative solutions.
                </p>
              </div>

              <div className="vision-card">
                <div className="card-icon">🔮</div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading company in our industry, recognized for our innovation, 
                  quality, and positive impact on the communities we serve.
                </p>
              </div>
            </div>

          </div>

          {/* Team Section */}
          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              
              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder">👨‍💼</div>
                </div>
                <h3>John Doe</h3>
                <p className="member-role">Founder & CEO</p>
                <p className="member-desc">
                  Leading the company with vision and passion for innovation.
                </p>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder">👩‍💻</div>
                </div>
                <h3>Jane Smith</h3>
                <p className="member-role">Creative Director</p>
                <p className="member-desc">
                  Bringing creative ideas to life with exceptional design skills.
                </p>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder">👨‍🔧</div>
                </div>
                <h3>Mike Johnson</h3>
                <p className="member-role">Tech Lead</p>
                <p className="member-desc">
                  Ensuring our technology is cutting-edge and reliable.
                </p>
              </div>

            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <h2>Our Achievements</h2>
            <div className="stats-grid">
              
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Years Experience</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Customer Support</div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;