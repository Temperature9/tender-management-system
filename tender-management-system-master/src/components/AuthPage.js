// src/components/AuthPage.js
import React from 'react';
import { Box, Paper, Typography, Container, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ffffff, #8e24aa)',
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: 20,
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

const AuthPage = ({ title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xs">
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <TextField label="Username" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
          {title === 'Login' ? (
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          ) : (
            <Button variant="contained" color="primary" fullWidth>
              Register
            </Button>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

// Export AuthPage as the default export
export default AuthPage;
