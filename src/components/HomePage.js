// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Tender App</h1>
          <p>Your Gateway to Seamless Tendering</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h2>Efficient Tender Management</h2>
          <p>Create, manage, and track tenders effortlessly.</p>
        </div>

        <div className="feature-card">
          <h2>Secure and Transparent</h2>
          <p>Experience secure and transparent transactions for all your tendering activities.</p>
        </div>

        <div className="feature-card">
          <h2>Customized Dashboards</h2>
          <p>Dashboard tailored for contractors, sugar factories, and admin/support.</p>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="additional-content-section">
        
      </section>

      {/* Get Started Section */}
      
    </div>
  );
};

export default HomePage;
