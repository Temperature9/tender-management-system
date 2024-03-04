// src/components/CreateTenderPage.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const CreateTenderPage = () => {
  const [budget, setBudget] = useState('');
  const [tenderDetails, setTenderDetails] = useState({
    title: '',
    description: '',
    deadline: '',
  });

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleInputChange = (field, value) => {
    setTenderDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleCreateTender = () => {
    console.log('Tender Details:', { ...tenderDetails, budget });
    setTenderDetails({
      title: '',
      description: '',
      deadline: '',
    });
    setBudget('');
    // Add logic for submitting or saving the data
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Create Contract
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
                label="Budget (Rs)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={budget}
                onChange={handleBudgetChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Deadline"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
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
