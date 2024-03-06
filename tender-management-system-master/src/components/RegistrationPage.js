import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert, // Import the Alert component
} from '@mui/material';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [registrationType, setRegistrationType] = useState('');
  const [registrationDetails, setRegistrationDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
    password: '',
    username: '',
  });

  const [error, setError] = useState({
    email: false,
    phoneNumber: false,
    aadharNumber: false,
    password: false,
    username: false, // Add username to error state
  });

  // State for Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleRegistrationTypeChange = (event) => {
    setRegistrationType(event.target.value);
  };

  const handleRegistrationDetailsChange = (field, value) => {
    let isValid = true;

    if (field === 'email') {
      isValid = /\S+@\S+\.\S+/.test(value);
    } else if (field === 'phoneNumber' || field === 'aadharNumber') {
      isValid = /^\d{10,12}$/.test(value);
    } else if (field === 'password') {
      isValid = value.length >= 6;
    } else if (field === 'username') {
      isValid = value.trim() !== '';
    }

    setError((prevError) => ({
      ...prevError,
      [field]: !isValid,
    }));

    setRegistrationDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...registrationDetails,
          type: registrationType,
          name: registrationDetails.name,
        }),
      });
  
      if (response.ok) {
        console.log('Registration successful');
        navigate('/');
      } else {
        const data = await response.json();
        console.error('Registration failed:', data.error);
  
        // Show error message in Snackbar
        if (data.errors) {
          // Handle multiple errors
          Object.keys(data.errors).forEach((field) => {
            handleSnackbar(data.errors[field], 'error');
          });
        } else {
          // Fallback to a generic error message
          handleSnackbar(data.error || 'Registration failed. Please try again.', 'error');
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
  
      // Show a generic error message in Snackbar
      handleSnackbar('An error occurred during registration', 'error');
    }
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%',
            marginTop: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="registration-type-label">Registration Type</InputLabel>
                <Select
                  labelId="registration-type-label"
                  id="registration-type"
                  value={registrationType}
                  label="Registration Type"
                  onChange={handleRegistrationTypeChange}
                >
                  <MenuItem value="contractor">Contractor</MenuItem>
                  <MenuItem value="subcontractor">Worker</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registrationDetails.name}
                onChange={(e) => handleRegistrationDetailsChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
  <TextField
    label="Username"
    variant="outlined"
    fullWidth
    margin="normal"
    value={registrationDetails.username}
    onChange={(e) => handleRegistrationDetailsChange('username', e.target.value)}
    error={error.username}
    helperText={error.username ? 'Enter a valid username' : ''}
  />
</Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registrationDetails.email}
                onChange={(e) => handleRegistrationDetailsChange('email', e.target.value)}
                error={error.email}
                helperText={error.email ? 'Enter a valid email address' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registrationDetails.phoneNumber}
                onChange={(e) => handleRegistrationDetailsChange('phoneNumber', e.target.value)}
                error={error.phoneNumber}
                helperText={error.phoneNumber ? 'Enter a valid 10-digit phone number' : ''}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Aadhar Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registrationDetails.aadharNumber}
                onChange={(e) => handleRegistrationDetailsChange('aadharNumber', e.target.value)}
                error={error.aadharNumber}
                helperText={error.aadharNumber ? 'Enter a valid 12-digit Aadhar number' : ''}
                inputProps={{ maxLength: 12 }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Password Field */}
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registrationDetails.password}
                onChange={(e) => handleRegistrationDetailsChange('password', e.target.value)}
                error={error.password}
                helperText={error.password ? 'Password must be at least 6 characters' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              
              <input type="file" accept="image/*" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleRegister}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    {/* Snackbar component for displaying error messages */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegistrationPage;
