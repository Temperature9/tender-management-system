// src/components/FactoryOwnerDashboard.js
import React, { useState, useEffect } from 'react';
import TenderManagement from './TenderManagement';
import BidManagement from './BidManagement';
import FactoryProfile from './FactoryProfile';
import Analytics from './Analytics';
import Notification from './Notification';
import DocumentManagement from './DocumentManagement';
import Integration from './Integration';
import VerticalMenu from './VerticalMenu';

const FactoryOwnerDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Define menu items with their corresponding components
  const menuItems = [
    { id: 1, label: 'Tender Management', element: TenderManagement },
    { id: 2, label: 'Bid Management', element: BidManagement },
    { id: 3, label: 'Factory Profile', element: FactoryProfile },
    { id: 4, label: 'Analytics', element: Analytics },
    { id: 5, label: 'Notification', element: Notification },
    { id: 6, label: 'Document Management', element: DocumentManagement },
    { id: 7, label: 'Integration', element: Integration },
  ];

  useEffect(() => {
    if (selectedMenu) {
      const selectedMenuItem = menuItems.find((item) => item.id === selectedMenu);
      setSelectedComponent(selectedMenuItem.element);
    }
  }, [selectedMenu, menuItems]);

  return (
    <div className="factory-owner-dashboard">
      <VerticalMenu items={menuItems} onSelectMenu={setSelectedMenu} />
      <div className="dashboard-content">
        {selectedComponent ? (
          // Dynamically render the selected component
          <div className="selected-content">{React.createElement(selectedComponent)}</div>
        ) : (
          <p>Select a menu item to view content.</p>
        )}
      </div>
    </div>
  );
};

export default FactoryOwnerDashboard;
