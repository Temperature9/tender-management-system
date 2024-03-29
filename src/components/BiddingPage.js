// src/components/BiddingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BiddingPage.css';

const BiddingPage = () => {
  // Placeholder data for factory cards
  const factoryData = [
    { id: 1, name: 'Factory 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Factory 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, name: 'Factory 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, name: 'Factory 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, name: 'Factory 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 6, name: 'Factory 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 7, name: 'Factory 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 8, name: 'Factory 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 9, name: 'Factory 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div className="bidding-page">
      <section className="get-started-section">
        <div className="text-overlay text-white text-center">
          <h2 className="text-3xl">Start Bidding Now</h2>
          <p className="text-lg">Explore available factories and place your bids.</p>
        </div>
      </section>

      <div className="factory-list">
        <h2>Available Factories for Bidding</h2>
      </div>

      <div className="factory-cards">
        {factoryData.map((factory) => (
          <div key={factory.id} className="factory-card">
            <h3>{factory.name}</h3>
            <p>{factory.description}</p>
            <Link to={`/bid-details/${factory.id}`} className="btn-secondary">
              View Bidding Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiddingPage;
