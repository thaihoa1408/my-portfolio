import React from 'react';
import '../assets/styles/Work.scss';
import ProjectCard from './ProjectCard';
import project1_1 from '../assets/images/project1_1.png';
import project2_1 from '../assets/images/project2_1.png';
import project3_1 from '../assets/images/project3_1.png';
import project4_1 from '../assets/images/project4_1.png';
export default function Work() {
  const projectList = [
    {
      id: 1,
      name: 'Landing Page',
      description:
        'In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign.',
      image: project1_1,
      github_link: 'https://github.com/thaihoa1408/landing-page',
      deploy_link: 'https://thaihoa1408.github.io/landing-page',
    },
    {
      id: 2,
      name: 'Book Store Clone',
      description:
        'For those looking forward to starting their own online book store, the book store templates available online are a godsend. With these templates, you can make your website look exactly the way you want.',
      image: project2_1,
      github_link: 'https://github.com/thaihoa1408/bookstore',
      deploy_link: 'https://thaihoa1408.github.io/bookstore/',
    },
    {
      id: 3,
      name: 'Restaurant Management System',
      description:
        'A comprehensive restaurant management system will allow for payment processing, financial management, sales tracking, performance monitoring, personnel management, and more.',
      image: project3_1,
      github_link: '',
      deploy_link: 'http://tigerpuff-dev-brand.rockship.co/',
    },
    {
      id: 4,
      name: 'Table Ordering',
      description:
        ' The table ordering system allows you to improve staff efficiency and maximize table turnover. And since customers have more control, the average order value and your revenue are bound to increase.',
      image: project4_1,
      github_link: '',
      deploy_link:
        'http://tigerpuff-dev-order.rockship.co/customer/table-ordering/630',
    },
  ];
  return (
    <section className='work-container' id='work'>
      <h2>
        <span>03. </span> Some Things I’ve Built
      </h2>
      <div className='row gy-3'>
        {projectList.map((item, index) => {
          return (
            <div className='col-lg-4 col-md-6' key={index}>
              <ProjectCard data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
