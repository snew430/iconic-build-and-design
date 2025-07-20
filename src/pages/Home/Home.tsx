import React from 'react';
import kitchenPhoto from '../../assets/kitchen.jpg';
import './Home.scss';
import { PicParagraph, PageBanner } from '../../components';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
export const Home = () => {
  return (
    <main>
      <PageBanner photo={kitchenPhoto} altText='kitchen'>
        <h2>Charlotte's Reliable Construction Service</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perspiciatis possimus impedit harum eos repudiandae rem, nihil ab
          eligendi eaque vel distinctio alias consequuntur quisquam, reiciendis aspernatur dolores, odio adipisci?
        </p>
      </PageBanner>
      <div className='home-body'>
        <PicParagraph picPosition='leading' pic={pic1}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo impedit necessitatibus cumque reprehenderit asperiores
          corrupti quam omnis, animi unde illo, quas, maxime perferendis inventore aliquam? Nisi cumque delectus voluptatum tempora.
        </PicParagraph>
        <PicParagraph picPosition='trailing' pic={pic2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo impedit necessitatibus cumque reprehenderit asperiores
          corrupti quam omnis, animi unde illo, quas, maxime perferendis inventore aliquam? Nisi cumque delectus voluptatum tempora.
        </PicParagraph>
        <PicParagraph picPosition='leading' pic={pic3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo impedit necessitatibus cumque reprehenderit asperiores
          corrupti quam omnis, animi unde illo, quas, maxime perferendis inventore aliquam? Nisi cumque delectus voluptatum tempora.
        </PicParagraph>
      </div>
    </main>
  );
};
