import React from 'react';
import './Paragraph.scss';

export const Paragraph = ({ header, children }) => {
  return (
    <div>
      <h3>{header}</h3>
      <p>{children}</p>
    </div>
  );
};
