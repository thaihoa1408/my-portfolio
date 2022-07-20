import React from 'react';
import '../assets/styles/Hero.scss';
export default function Hero() {
  return (
    <div className='hero-container'>
      <h1>Hi, my name is</h1>
      <h2>Pham Thai Hoa</h2>
      <h3>
        I'm a<div className='typing-erase'>Frontend Developer!</div>
      </h3>
      <p>
        As a front-end developer, I know how to make a seamless web app that
        helps users accomplish what they need to do. I have a strong combination
        of technical ability and creativity.
      </p>
    </div>
  );
}
