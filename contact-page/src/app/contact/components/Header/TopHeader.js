'use client';
import React, { useState } from 'react';
import './Header.css';

const TopHeader = () => {
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

  return (
    <div className="top-header">
      <div className="top-header-toggle">
        <span>☰</span>
        <button onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}>
          {isTopMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className={`top-header-links ${isTopMenuOpen ? 'open' : ''}`}>
        <div className="left-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">STUDENTS LIFE</a>
          <a href="#">CAREERS</a>
          <a href="#">NEWS & EVENTS</a>
          <a href="#">BLOGS</a>
          <a href="#">RESEARCH</a>
          <a href="#">SCHOLARSHIP</a>
          <a href="#">CSR</a>
          <a href="#">CONTACT US</a>
        </div>
        <div className="right-links">
          <a href="#">PAYMENTS</a>
          <a href="#">STUDENTS</a>
          <a href="#">ALUMNI</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
