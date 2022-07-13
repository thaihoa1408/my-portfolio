import React from 'react';
import '../assets/styles/Navbar.scss';
export default function Navbar() {
  return (
    <nav
      className='navbar fixed-top  navbar-expand-md navbar-dark'
      style={{ background: 'rgba(10, 25, 47, 0.85)' }}
    >
      <div className='container-fluid px-4 py-3 d-flex justify-content-between'>
        <a className='navbar-brand' href='#'>
          <div className='logo'></div>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto d-flex align-items-center'>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                <span>01. </span>About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#experience'>
                <span>02. </span>Experience
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#work'>
                <span>03. </span>Work
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                <span>04. </span>Contact
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>
                <button>Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
