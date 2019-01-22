import React from 'react';
import { Header } from './header';
import { headerHeight } from '../helpers/constants';

export interface PageProps {
  title: string;
}

export const Page: React.SFC<PageProps> = ({ title, children }) => (
  <main>
    <Header />
    {children}
    <style jsx global>{`
      body {
        margin: ${headerHeight} 0 0 0;
        padding: 0;
        font-family: Garamond;
      }
    `}</style>
  </main>
);
