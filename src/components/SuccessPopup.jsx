import React from 'react';
import './SuccessPopup.css';

const SuccessPopup = ({ isOpen, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="success-icon">✓</div>
        <h2>Successfully Registered!</h2>
        <p>Your account has been created successfully.</p>
        <button onClick={onLogin} className="popup-login-btn">
          Login Now
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;