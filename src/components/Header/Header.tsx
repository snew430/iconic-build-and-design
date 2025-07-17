import React from 'react';
import './Header.scss';
import { FaPhone } from 'react-icons/fa6';


export const Header = () => {
  return (
    <header>
      <a href='tel:+9802884660'>
        <FaPhone />
        980-288-4660
      </a>
    </header>
  );
};
