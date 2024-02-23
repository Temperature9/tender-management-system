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
    { id: 1, label: 'Create Tender', path: '/create-tender', component: CreateTenderPage },
    { id: 2, label: 'Manage Tender', path: '/tender-management', component: TenderManagement },
    { id: 3, label: 'Factory Profile', path: '/factory-profile', component: FactoryProfile },
  ];

  return (
    <div className="factory-owner-dashboard">
      <VerticalMenu items={menuItems} onSelectMenu={setSelectedMenu} />
      <div className="dashboard-content">
        {selectedMenu !== null && menuItems[selectedMenu - 1] && (
          <div className="selected-content">
            <Link to={menuItems[selectedMenu - 1].path}>
              {React.createElement(menuItems[selectedMenu - 1].component)}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactoryOwnerDashboard;
