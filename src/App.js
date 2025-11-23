import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Header from './components/Header';
import Banner from './components/Banner';
import Cards from './components/Cards';
import AboutPage from './pages/AboutPage';
import ImagesPage from './pages/ImagesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <DashboardLayout>{children}</DashboardLayout> : <LoginPage />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <div>
              <Header />
              <Banner />
              <Cards />
            </div>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Protected Dashboard Route */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <div>Dashboard Content</div>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;