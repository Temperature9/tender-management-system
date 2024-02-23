// CreateTenderPage.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
const CreateTenderPage = () => {
  
  const [tenderData, setTenderData] = useState({
    title: '',
    description: '',
    deadline: '',
    // Add other required fields
  });

  const handleChange = (field, value) => {
    setTenderData({ ...tenderData, [field]: value });
  };

  const handleSubmit = async () => {
    // Implement backend API call to create a new tender
    try {
      // Call backend API to create a new tender with tenderData
      // If successful, redirect to the tender details page
      <Link to="/home">Back to Home</Link>
    } catch (error) {
      console.error('Tender creation failed:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Create New Tender
      </Typography>
      <form>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={tenderData.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={tenderData.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
        <TextField
          label="Deadline"
          type="datetime-local"
          variant="outlined"
          fullWidth
          margin="normal"
          value={tenderData.deadline}
          onChange={(e) => handleChange('deadline', e.target.value)}
        />
        {/* Add other required fields */}

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Create Tender
        </Button>
      </form>
    </Container>
  );
};

export default CreateTenderPage;
