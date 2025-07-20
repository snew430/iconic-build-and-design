import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { PageBanner, Input } from '../../components';
import keyboardPhoto from '../../assets/keyboard.jpg';
import './Contact.scss';
export const Contact = () => {
  return (
    <main>
      <PageBanner photo={keyboardPhoto} altText='keyboard'>
        <h2>Contact Us</h2>
      </PageBanner>
      <div className='columns'>
        <div className='contact-details'>
          <h2>Contact Details</h2>
          <ul>
            <li>
              <MdMail />
              <p>iconicbuildanddesign@gmail.com</p>
            </li>
            <li>
              <FaPhone />
              <p>iconicbuildanddesign@gmail.com</p>
            </li>
          </ul>
        </div>
        <form className='contact-form' action=''>
          <div className='form-row'>
            <Input name='firstName' labelText='First Name' placeholder='John' />
          </div>
          <label htmlFor='email'>Your email address</label>
          <input id='email' name='email' required aria-required='true' placeholder='Email' />
        </form>
      </div>
    </main>
  );
};
