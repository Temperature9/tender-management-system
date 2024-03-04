// src/components/VerticalMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const VerticalMenu = ({ items, onSelectMenu }) => {
  return (
    <div className="vertical-menu">
      {items.map((item) => (
        <button key={item.id} onClick={() => onSelectMenu(item.id)}>
          <Link to={item.path}>{item.label}</Link>
        </button>
      ))}
    </div>
  );
};

export default VerticalMenu;
