import React from 'react';
import '../assets/styles/Sidebar.scss';
export default function LeftSide() {
  return (
    <div className='side-container' style={{ left: 40, right: 'auto' }}>
      <div className='side-wrapper'>
        <a href='https://www.facebook.com/profile.php?id=100005415316686'>
          <i class='bx bxl-facebook-circle '></i>
        </a>
        <a href='https://www.instagram.com/thaihoa1408/'>
          <i class='bx bxl-instagram'></i>
        </a>
        <a href='https://github.com/thaihoa1408'>
          <i class='bx bxl-github'></i>
        </a>
      </div>
    </div>
  );
}
