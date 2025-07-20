import React, { Children } from 'react';
import './PicParagraph.scss';
interface PicParagraphProps {
  children: React.ReactNode;
  picPosition: 'leading' | 'trailing';
  pic: string;
}
export const PicParagraph = ({ children, picPosition, pic }: PicParagraphProps) => {
  return (
    <div className={`pic-paragraph ${picPosition === 'trailing' ? 'trailing' : ''}`}>
      <img className='pic' src={pic}></img>
      <p className='paragraph'>{children}</p>
    </div>
  );
};
