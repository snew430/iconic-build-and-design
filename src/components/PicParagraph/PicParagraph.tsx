import React, { Children } from 'react';
import './PicParagraph.scss';
interface PicParagraphProps {
  children: React.ReactNode;
  picPosition: 'leading' | 'trailing';
  pic: string;
}
export const PicParagraph = ({ children, picPosition, pic }: PicParagraphProps) => {
  return (
    <div className='pic-paragraph'>
      {picPosition === 'leading' && (
        <div className='circle'>
          <img className='pic' src={pic}></img>
        </div>
      )}
      <p className='paragraph'>{children}</p>
      {picPosition === 'trailing' && (
        <div className='circle'>
          <img className='pic' src={pic}></img>
        </div>
      )}
    </div>
  );
};
