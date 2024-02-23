// src/components/RegistrationPage.js
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
} from '@mui/material';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [registrationType, setRegistrationType] = useState('');
  const [registrationDetails, setRegistrationDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
  });

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
    // Redirect to the login page after successful registration
    navigate('/');
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
                  <MenuItem value="subcontractor">Subcontractor</MenuItem>
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
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registrationDetails.email}
                onChange={(e) => handleRegistrationDetailsChange('email', e.target.value)}
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleRegister}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
