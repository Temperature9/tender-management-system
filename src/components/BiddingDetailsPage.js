// src/components/BiddingDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './BiddingDetailsPage.css'; // Import your CSS file for styling

const BiddingDetailsPage = () => {
  const { id } = useParams();

  // Placeholder factory data (replace with actual data retrieval logic)
  const factory = {
    id: 1,
    name: 'Sugar Factory 1',
    location: 'City A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    biddingDetails: {
      bidAmount: '$100,000',
      completionTime: '6 months',
      additionalComments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  };

  return (
    <div className="bidding-details-page">
      <h2>Bidding Details for {factory.name}</h2>
      <div className="details-section">
        <h3>Bid Amount</h3>
        <p>{factory.biddingDetails.bidAmount}</p>
      </div>
      <div className="details-section">
        <h3>Completion Time</h3>
        <p>{factory.biddingDetails.completionTime}</p>
      </div>
      <div className="details-section">
        <h3>Additional Comments</h3>
        <p>{factory.biddingDetails.additionalComments}</p>
      </div>
    </div>
  );
};

export default BiddingDetailsPage;
