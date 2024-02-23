// src/components/LoginPage.js
import React, { useState } from 'react';
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

  const handleLogin = () => {
    // Simulate successful login for demonstration purposes
    // In a real-world scenario, you would validate the credentials securely
    // Redirect to the home page upon successful login
    navigate('/home-page');
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
    navigate('/regestration');
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
          {registrationType ? 'Register' : 'Login'}
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
              <Button variant="contained" fullWidth onClick={handleLogin}>
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
    </Container>
  );
};

export default LoginPage;
