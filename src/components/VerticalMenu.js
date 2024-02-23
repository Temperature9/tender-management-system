// src/components/VerticalMenu.js
import React from 'react';

const VerticalMenu = ({ items, onSelectMenu }) => {
  return (
    <div className="vertical-menu">
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onSelectMenu(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalMenu;
