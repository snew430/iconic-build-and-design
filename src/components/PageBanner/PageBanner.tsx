import React from 'react';
import './PageBanner.scss';
export const PageBanner = ({ photo, altText, children }) => {
  return (
    <div className='banner'>
      <div className='banner-text'>{children}</div>
      <img src={photo} alt={altText} />
    </div>
  );
};
