import React from 'react';
import '../assets/styles/Work.scss';
import ProjectCard from './ProjectCard';
import project1_1 from '../assets/images/project1_1.png';
import project1_2 from '../assets/images/project1_2.png';
import project1_3 from '../assets/images/project1_3.png';
import project1_4 from '../assets/images/project1_4.png';
import project1_5 from '../assets/images/project1_5.png';
import project1_6 from '../assets/images/project1_6.png';
import project1_7 from '../assets/images/project1_7.png';
import project2_1 from '../assets/images/project2_1.png';
import project2_2 from '../assets/images/project2_2.png';
import project2_3 from '../assets/images/project2_3.png';
import project2_4 from '../assets/images/project2_4.png';
import project2_5 from '../assets/images/project2_5.png';
import project3_1 from '../assets/images/project3_1.png';
import project3_2 from '../assets/images/project3_2.png';
import project3_3 from '../assets/images/project3_3.png';
import project3_4 from '../assets/images/project3_4.png';
import project3_5 from '../assets/images/project3_5.png';
import project3_6 from '../assets/images/project3_6.png';
import project3_7 from '../assets/images/project3_7.png';
import project3_8 from '../assets/images/project3_8.png';
import project4_1 from '../assets/images/project4_1.png';
import project4_2 from '../assets/images/project4_2.png';
import project4_3 from '../assets/images/project4_3.png';
import project4_4 from '../assets/images/project4_4.png';
import project4_5 from '../assets/images/project4_5.png';
import project4_6 from '../assets/images/project4_6.png';
export default function Work() {
  const projectList = [
    {
      id: 3,
      name: 'Restaurant Management System',
      description:
        'A comprehensive restaurant management system will allow for payment processing, financial management, sales tracking, performance monitoring, personnel management, and more.',
      image: project3_1,
      github_link: '',
      deploy_link: 'http://tigerpuff-dev-brand.rockship.co/',
      list_image: [
        project3_1,
        project3_2,
        project3_3,
        project3_4,
        project3_5,
        project3_6,
        project3_7,
        project3_8,
      ],
    },
    {
      id: 4,
      name: 'Table Ordering',
      description:
        ' The table ordering system allows you to improve staff efficiency and maximize table turnover. And since customers have more control, the average order value and your revenue are bound to increase.',
      image: project4_2,
      github_link: '',
      deploy_link:
        'http://tigerpuff-dev-order.rockship.co/customer/table-ordering/725',
      list_image: [
        project4_1,
        project4_2,
        project4_3,
        project4_4,
        project4_5,
        project4_6,
      ],
    },
    {
      id: 1,
      name: 'Landing Page',
      description:
        'In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign.',
      image: project1_1,
      github_link: 'https://github.com/thaihoa1408/landing-page',
      deploy_link: 'https://thaihoa1408.github.io/landing-page',
      list_image: [
        project1_2,
        project1_1,
        project1_3,
        project1_4,
        project1_5,
        project1_6,
        project1_7,
      ],
    },
    {
      id: 2,
      name: 'Book Store Clone',
      description:
        'For those looking forward to starting their own online book store, the book store templates available online are a godsend. With these templates, you can make your website look exactly the way you want.',
      image: project2_1,
      github_link: 'https://github.com/thaihoa1408/bookstore',
      deploy_link: 'https://thaihoa1408.github.io/bookstore/',
      list_image: [project2_1, project2_2, project2_3, project2_4, project2_5],
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
