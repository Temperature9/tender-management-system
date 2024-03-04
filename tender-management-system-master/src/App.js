
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import BiddingPage from './components/BiddingPage';
import BiddingDetailsPage from './components/BiddingDetailsPage';
import ProfilePage from './components/ProfilePage';
import FactoryOwnerRegistrationPage from './components/FactoryOwnerRegistrationPage';
import FactoryOwnerDashboard from './components/FactoryOwnerDashboard';
import CreateTenderPage from './components/CreateTenderPage';
import TenderDetailsPage from './components/TenderDetailsPage';
import RegistrationPage from './components/RegistrationPage'; // <-- This import seems fine
import TenderManagement from './components/TenderManagement';
import BidManagement from './components/BidManagement';
import DocumentManagement from './components/DocumentManagement';
import Integration from './components/Integration';

function App() {
  return (
 
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<LoginPage/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/home-page" element={<HomePage/>} />

          <Route path="/bidding" element={<BiddingPage/>} />
          <Route path="/bidding-detail" element={<BiddingDetailsPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          
          <Route path="/create-tender" element={<CreateTenderPage/>} />
          <Route path="/tender-details" element={<TenderDetailsPage/>} />
          <Route path="/factory-owner-registration" element={<FactoryOwnerRegistrationPage/>} />
          <Route path="/fod" element={<FactoryOwnerDashboard/>} />
          <Route path="/tender-management" element={<TenderManagement/>} />
          <Route path="/bid-management" element={<BidManagement/>} />
          
          <Route path="/document-management" element={<DocumentManagement/>} />
          <Route path="/integration" element={<Integration/>} />
        </Routes>
      </Router>
 
  );
}

export default App;
