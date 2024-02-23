// src/components/RegisteredUsers.js
import React from 'react';
import { useRegistration } from '../contexts/RegistrationContext';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const RegisteredUsers = () => {
  const { registeredUsers } = useRegistration();

  return (
    <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Registered Users
      </Typography>
      {registeredUsers.length > 0 ? (
        <List>
          {registeredUsers.map((user, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${user.name} (${user.type})`}
                secondary={`Email: ${user.email}, Phone: ${user.phoneNumber}, Aadhar: ${user.aadharNumber}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2">No registered users yet.</Typography>
      )}
    </Paper>
  );
};

export default RegisteredUsers;
