import React from 'react';
interface QuoteProps {
  children: React.ReactNode;
  source: string;
}
export const Quote = ({ children, source }: QuoteProps) => {
  return (
    <div>
      <q>{children}</q>
      <p>{source}</p>
    </div>
  );
};
