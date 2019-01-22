import React from 'react';

interface ContainerProps {
  padding?: boolean;
}

export const Container: React.SFC<ContainerProps> = ({ children, padding }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 0 50px gray;
        padding: ${padding ? '20px' : 0};
      }
    `}</style>
  </div>
);
