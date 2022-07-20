import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import '../assets/styles/ProjectCard.scss';
export default function ProjectCard(props) {
  const { data } = props;
  const [show, setShow] = useState(false);
  return (
    <div className='card w-100 project-card'>
      <div className='card-img-container'>
        <img src={data.image} className='card-img-top' alt='' />
        <button className='visit' onClick={() => setShow(true)}>
          View More
        </button>
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop='static'
        keyboard={false}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        size='lg'
      >
        <Modal.Body>
          <Carousel variant='dark'>
            {data.list_image?.map((item, index) => {
              return (
                <Carousel.Item>
                  {data.id === 4 ? (
                    <div
                      className='bg-white d-flex justify-content-center'
                      style={{ height: '500px' }}
                    >
                      <img src={item} className='h-100' />
                    </div>
                  ) : (
                    <div className='bg-white'>
                      <img src={item} className='h-100 w-100' />
                    </div>
                  )}
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className='d-flex justify-content-end'>
            <button className='mt-3 btn' onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
