'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './Header.css';
import logoImg from '../../../assets/logo.png';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-header">
      <div className="logo">
        <Image src={logoImg} alt="ESÜ Logo" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#">COURSES</a>
        <a href="#">FACULTIES</a>
        <a href="#">TRANSFER PROGRAMMES</a>
        <a href="#">BRANCH NETWORK</a>
        <a href="#">INTERNATIONAL PLACEMENTS</a>
      </nav>

      <div className="register-btn">
        <button>Register Online</button>
      </div>
    </div>
  );
};

export default MainHeader;
