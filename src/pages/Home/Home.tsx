import React from 'react';
import kitchenPhoto from '../../assets/kitchen.jpg';
import './Home.scss';
export const Home = () => {
  return (
    <div>
      <div className='banner'>
        <h2>Charlotte's Reliable Construction Service</h2>
        <img src={kitchenPhoto} alt='kitchen' />
      </div>
    </div>
  );
};
