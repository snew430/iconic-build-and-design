import React from 'react';
import kitchenPhoto from '../../assets/kitchen.jpg';
import './Home.scss';
export const Home = () => {
  return (
    <div>
      <div className='banner'>
        <div className='banner-text'>
          <h2>Charlotte's Reliable Construction Service</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perspiciatis possimus impedit harum eos repudiandae rem, nihil ab
            eligendi eaque vel distinctio alias consequuntur quisquam, reiciendis aspernatur dolores, odio adipisci?
          </p>
        </div>

        <img src={kitchenPhoto} alt='kitchen' />
      </div>
    </div>
  );
};
