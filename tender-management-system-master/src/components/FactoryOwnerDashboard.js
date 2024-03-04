// src/components/FactoryOwnerDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateTenderPage from './CreateTenderPage';
import TenderManagement from './TenderManagement';
import FactoryProfile from './FactoryProfile';
import VerticalMenu from './VerticalMenu';
import './FactoryOwnerDashboard.css';

const FactoryOwnerDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuItems = [
    { id: 1, label: 'Create Contract', path: '/create-tender', component: CreateTenderPage },
    { id: 2, label: 'Manage Contract', path: '/tender-management', component: TenderManagement },
    { id: 3, label: 'Factory Profile', path: '/factory-profile', component: FactoryProfile },
  ];

  return (
    <div className="factory-owner-dashboard">
   
      <div className="dashboard-content">
        <div className="welcome-message">
          <h2>Welcome to Your Factory Dashboard!</h2>
          <p>Explore the options below to manage your contracts and profile.</p>
        </div>
        <div className="options-container">
  {menuItems.map((item, index) => (
    <Link to={item.path} className={`dashboard-link card-${index + 1}`} key={item.id}>
      <div className="dashboard-card">
        <h3>{item.label}</h3>
        <p>Click to {item.label.toLowerCase()}</p>
      </div>
    </Link>
  ))}
</div>

      </div>
    </div>
  );
};

export default FactoryOwnerDashboard;
