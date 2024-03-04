// TenderDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const TenderDetailsPage = () => {
  const { tenderId } = useParams();

  // Fetch tender details from the backend using tenderId

  return (
    <div>
      <Typography variant="h4">Tender Details</Typography>
      <Typography variant="h6">Tender ID: {tenderId}</Typography>
      {/* Display other tender details fetched from the backend */}
    </div>
  );
};

export default TenderDetailsPage;
