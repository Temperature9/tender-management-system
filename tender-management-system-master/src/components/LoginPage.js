// src/components/LoginPage.js
import React, { useState } from 'react';
import './123.jpg';import Snackbar from '@mui/material/Snackbar';  // Import Snackbar
import Alert from '@mui/material/Alert'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
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
} from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [username, setUsername] = useState(''); const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  }); const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [loginMethod, setLoginMethod] = useState('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [registrationType, setRegistrationType] = useState('');
  const [registrationDetails, setRegistrationDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
  });
  const handleSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginDetails.username,
        password: loginDetails.password,
      }),
    });

    if (response.ok) {
      // Redirect to the home-page if login is successful
      navigate('/home-page');
    } else {
      const data = await response.json();
      console.error('Login failed:', data.error);

      // Show error message in Snackbar
      handleSnackbar(data.error || 'Login failed. Please try again.', 'error');
    }
  } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  const handleToggleForm = () => {
    // Your function implementation
  };

  const handleRegistrationTypeChange = (event) => {
    setRegistrationType(event.target.value);
  };

  const handleRegistrationDetailsChange = (field, value) => {
    setRegistrationDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleRegister = () => {
    // Simulate saving registration details to a database
    console.log('Registration Details:', registrationDetails);
    // Reset registration form after registration
    setRegistrationType('');
    setRegistrationDetails({
      name: '',
      email: '',
      phoneNumber: '',
      aadharNumber: '',
    });
  };
  const handleRegisterNow = () => {
    // Redirect to the registration page
    navigate('/register');
  };
  const styles = {
    container: {
      marginTop: 8,backgroundImage: 'url("./123.jpg")', // Adjust the image path accordingly
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    heading: {
      fontFamily: 'Lobster, cursive',
      background: 'linear-gradient(45deg, #8E24AA, #311B92)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      marginBottom: 20,
    },
    button: {
      background: '#BA68C8', // Adjust this color as needed
      color: '#FFFFFF',
      '&:hover': {
        background: '#8E24AA', // Adjust this hover color as needed
      },
    },
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
      <Typography
          component="h1"
          variant="h2"
          style={{ fontFamily: 'Lobster, cursive',marginBottom: 10,
          background: 'linear-gradient(45deg, #8E24AA, #311B92)',
          WebkitBackgroundClip: 'text',
          color: 'transparent', }}
        >
          Sugar Ease
        </Typography>

        <Typography component="h1" variant="h5">
          {registrationType ? 'Register' : 'Login'}
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%',
            marginTop: 8,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="login-method-label">Login Method</InputLabel>
                <Select
                  labelId="login-method-label"
                  id="login-method"
                  value={loginMethod}
                  label="Login Method"
                  onChange={(e) => setLoginMethod(e.target.value)}
                >
                  <MenuItem value="email">Login with Email</MenuItem>
                  <MenuItem value="phone">Login with Phone</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={loginMethod === 'email' ? 'Email' : 'Phone Number'}
                variant="outlined"
                fullWidth
                margin="normal"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </Grid>
            {loginMethod === 'email' && (
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            )}
            <Grid item xs={12}>
            <Button
            variant="contained"
            fullWidth
            sx={styles.button}
            onClick={handleLogin}
          >
            {loginMethod === 'phone' ? 'Login' : 'Submit'}
          </Button>
            </Grid>
          </Grid>
          {registrationType && (
            <Grid container spacing={2}>
              {/* Registration form elements */}
              {/* ... */}
            </Grid>
          )}
          <Grid item xs={12}>
          
            {registrationType === '' && (
              <Button
                variant="text"
                fullWidth
                
                onClick={handleRegisterNow}
              >
                Register Now
              </Button>
            )}
          </Grid>
        </Box>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
