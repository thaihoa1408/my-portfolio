import React, { useState } from 'react';
import '../assets/styles/Experience.scss';
export default function Experience() {
  const companyList = [
    {
      id: 1,
      name: 'Rockship',
      render: (
        <div className='job-description'>
          <h3 className='title'>
            Frontend Developer (ReactJS) <span>@Rockship</span>
          </h3>
          <p className='period'>October 2021 - Present</p>
          <div className='content'>
            <ul>
              <li>
                <i class='bx bxs-right-arrow'></i> Delivering a complete
                front-end application.
              </li>
              <li>
                <i class='bx bxs-right-arrow'></i> Cooperating with the back-end
                developer in the process of building the RESTful API Skills and
                Qualifications.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Bosch',
      render: (
        <div className='job-description'>
          <h3 className='title'>
            CIT Tester <span>@Bosch</span>
          </h3>
          <p className='period'>August 2020 - February 2021</p>
          <div className='content'>
            <ul>
              <li>
                <i class='bx bxs-right-arrow'></i>Testing the interactions
                between software components.
              </li>
              <li>
                <i class='bx bxs-right-arrow'></i>Requirement Analysis, design,
                implement, execute test cases, analyses failure & bugs report.
              </li>
              <li>
                <i class='bx bxs-right-arrow'></i>Analysis / debugging of
                embedded software.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  const [selectedCompany, setSelectedCompany] = useState(companyList[0]);
  const handleClick = (item) => {
    setSelectedCompany(item);
  };
  return (
    <section className='experience-container' id='experience'>
      <h2>
        <span>02. </span> Where I’ve Worked
      </h2>
      <div className='inner'>
        <div className='tablist'>
          {companyList.map((item, index) => {
            return (
              <button
                key={item.id}
                className={item.id === selectedCompany.id ? 'active' : ''}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {selectedCompany.render}
      </div>
    </section>
  );
}
