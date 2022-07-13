import React from 'react';
import '../assets/styles/ProjectCard.scss';
export default function ProjectCard(props) {
  const { data } = props;
  return (
    <div className='card w-100 project-card'>
      <div className='card-img-container'>
        <img src={data.image} className='card-img-top' alt='' />
        <button className='visit'>View More</button>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{data.name}</h5>
        <p className='card-text'>{data.description}</p>
        <div className='d-flex'>
          <a href={data.github_link} className='ms-auto'>
            <i className='bx bxl-github'></i>
          </a>
          <a href={data.deploy_link}>
            <i className='bx bx-link-external'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
