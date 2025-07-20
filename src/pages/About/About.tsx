import React from 'react';
import { PageBanner } from '../../components';
import blueprintPhoto from '../../assets/blueprint.jpg';

export const About = () => {
  return (
    <main>
      <PageBanner photo={blueprintPhoto} altText='blueprints'>
        <h2>Our Vision, Our Blueprint</h2>
      </PageBanner>
    </main>
  );
};
