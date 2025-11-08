import React from 'react';
import Header from '../components/Header';
import './ContactPage.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div>
      <Header />
      
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-content">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="What is this regarding?"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Our Office</h3>
                    <p>123 Street Name</p>
                    <p>City, State 12345</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone Number</h3>
                    <p>7738169413</p>
                    <p>Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email Address</h3>
                    <p>amitshukla22509@gmail.com</p>
                    <p>support@yourcompany.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div className="info-content">
                    <h3>Social Media</h3>
                    <div className="social-links">
                      {/* ✅ FIXED: Using actual links or buttons */}
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link"
                      >
                        Facebook
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link"
                      >
                        Twitter
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;