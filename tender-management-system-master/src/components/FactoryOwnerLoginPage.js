// FactoryOwnerLoginPage.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Link } from '@mui/material';

const FactoryOwnerLoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async () => {
    try {
      // Call backend API to perform factory owner login with formData
      const response = await fetch('/owner-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to the factory owner dashboard or perform other actions upon successful login
        console.log('Factory owner login successful');
      } else {
        // Handle login failure
        console.error('Factory owner login failed');
      }
    } catch (error) {
      console.error('Error during factory owner login:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Factory Owner Login
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={(e) => handleChange('username', e.target.value)}
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

        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>

        <Typography variant="body2" style={{ marginTop: '16px' }}>
          Don't have an account?{' '}
          <Link href="/for" color="primary">
            Register here
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default FactoryOwnerLoginPage;
