// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisteredUsers from './components/RegisteredUsers';
import { RegistrationProvider } from './contexts/RegistrationContext';
import BiddingPage from './components/BiddingPage';
import BiddingDetailsPage from './components/BiddingDetailsPage';
import ProfilePage from './components/ProfilePage';
import LogoutPage from './components/LogoutPage';
import FactoryOwnerRegistrationPage from './components/FactoryOwnerRegistrationPage';
import FactoryOwnerDashboard from './components/FactoryOwnerDashboard';
import CreateTenderPage from './components/CreateTenderPage';
import TenderDetailsPage from './components/TenderDetailsPage';
import RegistrationPage from './components/RegistrationPage';
import TenderManagement from './components/TenderManagement';
import BidManagement from './components/BidManagement';
import FactoryProfile from './components/FactoryProfile';
import Analytics from './components/Analytics';
import Notification from './components/Notification';
import DocumentManagement from './components/DocumentManagement';
import Integration from './components/Integration';

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<LoginPage/>} />
          <Route path="/regestration" element={<RegistrationPage/>} />
          <Route path="/home-page" element={<HomePage/>} />
          <Route path="/registered-users" element={<RegisteredUsers/>} />
          <Route path="/bidding" element={<BiddingPage/>} />
          <Route path="/bidding-detail" element={<BiddingDetailsPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/logout" element={<LogoutPage/>} />
          <Route path="/create-tender" element={<CreateTenderPage/>} />
          <Route path="/tender-details" element={<TenderDetailsPage/>} />
          <Route path="/factory-owner-registration" element={<FactoryOwnerRegistrationPage/>} />
          <Route path="/fod" element={<FactoryOwnerDashboard/>} />
          <Route path="/tender-management" element={<TenderManagement/>} />
          <Route path="/bid-management" element={<BidManagement/>} />
          <Route path="/factory-profile" element={<FactoryProfile/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/document-management" element={<DocumentManagement/>} />
          <Route path="/integration" element={<Integration/>} />
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;
