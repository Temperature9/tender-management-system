// src/components/CreateTenderPage.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; // Import the EventIcon for the deadline field

const CreateTenderPage = () => {
  const [tenderDetails, setTenderDetails] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '', // New deadline field
    // Add other fields as needed
  });

  const handleInputChange = (field, value) => {
    setTenderDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleCreateTender = () => {
    // Add logic to handle the creation of the tender
    console.log('Tender Details:', tenderDetails);
    // Reset form fields after creating the tender
    setTenderDetails({
      title: '',
      description: '',
      budget: '',
      deadline: '',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Create Tender
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={tenderDetails.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                value={tenderDetails.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Budget"
                variant="outlined"
                fullWidth
                margin="normal"
                value={tenderDetails.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Deadline"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date" // Use type="date" for date input
                value={tenderDetails.deadline}
                onChange={(e) => handleInputChange('deadline', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Add other fields as needed */}
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleCreateTender}>
                Create Tender
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default CreateTenderPage;
