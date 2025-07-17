import React from 'react';
import { NavLink } from 'react-router';
import './Navigation.scss';
import logo from '../../assets/logo.png';

export const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt='logo' />

      <NavLink to='/' end>
        Home
      </NavLink>
      <NavLink to='/about' end>
        About Us
      </NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  );
};
