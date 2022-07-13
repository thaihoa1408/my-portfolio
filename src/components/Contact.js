import React from 'react';
import '../assets/styles/Contact.scss';
export default function Contact() {
  return (
    <section className='contact-container' id='contact'>
      <h2>
        <span>04. </span> Contact me
      </h2>
      <div style={{ fontFamily: 'var(--font-mono)' }}>
        <div className='mb-4'>
          <div
            className='d-flex align-items-center'
            style={{ color: 'var(--green)' }}
          >
            <i className='bx bx-envelope'></i>
            <div className='ms-2'>Email</div>
          </div>
          <a
            style={{ color: 'var(--light-slate)' }}
            href='mailto:phamthaihoa28@gmail.com'
          >
            phamthaihoa28@gmail.com
          </a>
        </div>
        <div className='mb-4'>
          <div
            className='d-flex align-items-center'
            style={{ color: 'var(--green)' }}
          >
            <i class='bx bxs-phone-call'></i>
            <div className='ms-2'>Phone</div>
          </div>
          <a style={{ color: 'var(--light-slate)' }} href='tel:+84385943071'>
            +84385943071
          </a>
        </div>
        <div>
          <div
            className='d-flex align-items-center'
            style={{ color: 'var(--green)' }}
          >
            <i class='bx bxl-skype'></i>
            <div className='ms-2'>Skype</div>
          </div>
          <a
            style={{ color: 'var(--light-slate)' }}
            href='skype:live:.cid.b40a2ea8cbeb4b90?chat'
          >
            Hoa Pham
          </a>
        </div>
      </div>
    </section>
  );
}
