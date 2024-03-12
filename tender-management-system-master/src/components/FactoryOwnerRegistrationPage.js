// FactoryOwnerRegistrationPage.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
const FactoryOwnerRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // Add other required fields
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/owner-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Factory owner registration successful');
        // Redirect to the login page or handle success as needed
      } else {
        console.error('Factory owner registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Factory Owner Registration
      </Typography>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
        {/* Add other required fields */}

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default FactoryOwnerRegistrationPage;
