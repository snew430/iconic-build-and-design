import React from 'react';
import logo from '../../assets/logo.png';
import './Footer.scss';
import { FaInstagram, FaFacebook, FaYelp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <div className='social-logos'>
        <FaInstagram />
        <FaFacebook />
        <FaYelp />
        <FaXTwitter />
      </div>
    </footer>
  );
};
