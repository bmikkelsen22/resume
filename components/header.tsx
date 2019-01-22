import React from 'react';
import Link from 'next/link';
import { headerHeight } from '../helpers/constants';

export const Header: React.SFC = () => (
  <header>
    <div>
      <h1>Brooks Mikkelsen</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </div>
    <style jsx>{`
      header {
        height: ${headerHeight};
        position: fixed;
        top: 0;
      }
    `}</style>
  </header>
);
