import React, { useState } from 'react';
import { styled } from '@mui/system';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Divider,
  createTheme,
  ThemeProvider,
} from '@mui/material'; // Import makeStyles from '@mui/system'

const theme = createTheme();

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    // Add card styles if needed
  },
  bidsContainer: {
    margin: theme.spacing(2),
  },
  bidCard: {
    // Add bid card styles if needed
  },
}));

const TenderManagementPage = () => {
  const classes = useStyles();

  const [tenders] = useState([
    { id: 1, title: 'Construction Project', description: 'Lorem ipsum dolor sit amet.', budget: 100000 },
    // Add more tenders as needed
  ]);

  const [bids, setBids] = useState([
    { id: 1, tenderId: 1, contractorId: 1, description: 'I can complete this project efficiently.', amount: 90000 },
    { id: 2, tenderId: 1, contractorId: 2, description: 'Experienced in similar projects.', amount: 95000 },
    { id: 3, tenderId: 1, contractorId: 3, description: 'Quality work guaranteed.', amount: 92000 },
    { id: 4, tenderId: 1, contractorId: 4, description: 'Timely completion assured.', amount: 98000 },
    { id: 5, tenderId: 1, contractorId: 5, description: 'Competitive pricing with high standards.', amount: 93000 },
    // Add more bids as needed
  ]);

  const handleAcceptTender = (bidId) => {
    const allocatedAmount = 50000; // Replace with the actual allocated amount
    console.log(`Accepted Bid ${bidId} and Allocated ₹${allocatedAmount} successfully!`);
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Typography variant="h3" align='center' gutterBottom>
        Tender Management
      </Typography>
      {tenders.map((tender) => (
        <Card key={tender.id} className={classes.card}>
          <CardContent>
            
            <Divider className={classes.bidsContainer} />
            <Typography variant="h4">Contractor Bids:</Typography>
            <Grid container spacing={2} className={classes.bidsContainer}>
              {bids
                .filter((bid) => bid.tenderId === tender.id)
                .map((bid) => (
                  <Grid item xs={12} key={bid.id}>
                    <Card className={classes.bidCard}>
                      <CardContent>
                        <Typography>
                          Contractor {bid.contractorId}: {bid.description} - ₹{bid.amount}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleAcceptTender(bid.id)}
                        >
                          Accept Tender
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
      </ThemeProvider>
    </div>
  );
};

export default TenderManagementPage;
