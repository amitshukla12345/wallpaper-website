import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import logo from '../assets/logo.png';
import SuccessPopup from '../components/SuccessPopup';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (isLogin) {
      const loginSuccess = login(email, password);
      if (loginSuccess) {
        alert('Login Successful!');
      } else {
        setError('Invalid email or password');
      }
    } else {
      if (!firstName || !lastName || !mobileNumber) {
        setError('Please fill all fields');
        return;
      }

      register(email, password);
      setShowPopup(true);
      // Clear form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setMobileNumber('');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          {/* Avatar overlapping card */}
          <div className="avatar-wrap">
            <img src={logo} alt="logo" className="login-avatar" />
          </div>

          <div className="card">
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <h2 className="login-title">
              {isLogin ? 'LOGIN' : 'REGISTER'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="card-body">
                {/* Register Fields */}
                {!isLogin && (
                  <>
                    {/* First Name + Last Name Side by Side */}
                    <div className="name-grid">
                      <div className="form-group">
                        <div className="form-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <input 
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <div className="form-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <input 
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>

                    
                  </>
                )}

                {/* Email Field */}
                <div className="form-group">
                  <div className="form-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <div className="form-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input form-input-password"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="eye-toggle-btn"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>

                {/* Mobile Number Field */}
                    <div className="form-group">
                      <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <input 
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="form-input"
                      />
                    </div>

                {/* Remember Me & Forgot Password (Login only) */}
               
              </div>

              {/* Card Footer - Only show buttons in Login mode */}
              {isLogin && (
                <div className="card-footer">
                  {/* Left Side - Home Button */}
                  <button type="button" className="home-btn">Home</button>

                  {/* Center - Login Button */}
                  <button type="submit" className="login-submit-btn">
                    LOGIN
                  </button>

                  {/* Right Side - Register Button */}
                  <button
                    type="button"
                    className="register-switch-btn"
                    onClick={() => {
                      setIsLogin(false);
                      setError('');
                      setSuccess('');
                      setEmail('');
                      setPassword('');
                      setFirstName('');
                      setLastName('');
                      setMobileNumber('');
                      setShowPassword(false);
                    }}
                  >
                    Register
                  </button>
                </div>
              )}

              {/* Register Page - Only REGISTER NOW button */}
              {!isLogin && (
                <div className="card-footer-register">
                  <button type="submit" className="register-now-btn">
                    REGISTER NOW
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <SuccessPopup 
        isOpen={showPopup}
        onLogin={() => {
          setShowPopup(false);
          setIsLogin(true);
        }}
      />
    </div>
  );
};

export default LoginPage;