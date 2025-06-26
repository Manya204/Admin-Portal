import React from 'react';
import '../styles/Header.css';
import { BellFill, List } from 'react-bootstrap-icons'; 

const Header = () => {
  return (
    <nav className="topbar d-flex justify-content-between align-items-center px-4 py-2" style={{height:"56px"}}>
      <div className="topbar-title">
        <List size={24} className="text-white" /> 
      </div>

      <div className="topbar-right d-flex align-items-center gap-3">
        <BellFill size={20} className="text-white" />

        <div className="topbar-profile d-flex align-items-center gap-2">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="rounded-circle"
            style={{ width: '32px', height: '30px' }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
