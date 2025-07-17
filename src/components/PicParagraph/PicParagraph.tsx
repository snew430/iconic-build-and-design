import React, { Children } from 'react';
interface PicParagraphProps {
  children: React.ReactNode;
  picPosition: 'leading' | 'trailing';
}
export const PicParagraph = ({ children, picPosition }: PicParagraphProps) => {
  return (
    <div>
      {picPosition === 'leading' && <img></img>}
      {children}
      {picPosition === 'trailing' && <img></img>}
    </div>
  );
};
