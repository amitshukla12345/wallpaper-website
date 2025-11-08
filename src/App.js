import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import Banner from './components/Banner';
import Cards from './components/Cards';
import AboutPage from './pages/AboutPage';
import ImagesPage from './pages/ImagesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <div>
              <Header />
              <Banner />
              <Cards />
            </div>
          } />
          
          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* All Pages Accessible Without Login */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;