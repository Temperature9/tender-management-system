// src/contexts/RegistrationContext.js
import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const registerUser = (user) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <RegistrationContext.Provider value={{ registeredUsers, registerUser }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};
