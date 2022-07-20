import React from 'react';
import '../assets/styles/About.scss';
import avatar from '../assets/images/avatar.jpg';
export default function About() {
  return (
    <section className='about-container' id='about'>
      <h2>
        <span>01. </span> About me
      </h2>
      <div className='row gy-4'>
        <div className='col-md-6'>
          <div className='about-test'>
            <p>
              Hello! I'm Hoa, and I graduated from Ho Chi Minh City University
              of Technology in 2021 with a degree in Electronics
              Telecommunications Engineering. My interest in web development
              started back in 2021 when I worked on my graduation thesis. During
              its implementation, I've got a lot of knowledge and necessary
              skills to be a frontend developer.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className='skills-list'>
            <li>
              <i class='bx bxs-right-arrow'></i> HTML
            </li>
            <li>
              <i class='bx bxs-right-arrow'></i> React.js
            </li>
            <li>
              <i class='bx bxs-right-arrow'></i> CSS
            </li>
            <li>
              <i class='bx bxs-right-arrow'></i> Bootstrap
            </li>
            <li>
              <i class='bx bxs-right-arrow'></i> Javascript
            </li>
            <li>
              <i class='bx bxs-right-arrow'></i> Ant Design
            </li>
          </ul>
        </div>
        <div className='col-md-6'>
          <div className='about-img'>
            <div>
              <img src={avatar} alt='' />
              <div className='about-img-border'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
