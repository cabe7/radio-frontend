import React from 'react';

const Header: React.FC = () => {
  return <div className="header">
    <div className="header-icon">
      <i className="fas fa-chevron-left"></i>
    </div>
    <div className="header-title">
      STATIONS
    </div>
    <div className="header-icon">
      <i className="fas fa-power-off"></i>
    </div>
  </div>;
};

export default Header;
