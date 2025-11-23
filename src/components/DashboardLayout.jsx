import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // ✅ Import logo from assets
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const { currentUser, registeredUsers, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      {/* Top Navbar */}
      <nav className="dashboard-navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" /> {/* ✅ Use imported logo */}
        </div>
        <div className="nav-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-content">
            <h3 className="sidebar-title">Menu</h3>
            
            <div className="sidebar-menu">
              <button 
                className={`menu-item ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                🏠 Home
              </button>
              
              <button 
                className={`menu-item ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                👥 Users
              </button>
            </div>

            <div className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? '◀' : '▶'}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {activeTab === 'home' && (
            <div className="tab-content">
              <h2>Welcome, {currentUser?.firstName}!</h2>
              <div className="user-card">
                <h3>Your Profile</h3>
                <p><strong>Name:</strong> {currentUser?.firstName} {currentUser?.lastName}</p>
                <p><strong>Email:</strong> {currentUser?.email}</p>
                <p><strong>Mobile:</strong> {currentUser?.mobileNumber}</p>
                <p><strong>Login Time:</strong> {currentUser?.loginTime}</p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="tab-content">
              <h2>Registered Users</h2>
              <div className="users-grid">
                {registeredUsers.map(user => (
                  <div key={user.id} className="user-card">
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Mobile:</strong> {user.mobileNumber}</p>
                    <p><strong>Registered:</strong> {user.loginTime}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;