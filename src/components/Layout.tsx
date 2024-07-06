import React from 'react';
import Link from 'next/link';

const Layout: React.FC = ({}) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{}</main>
      <footer>© 2024 Your Name</footer>
    </div>
  );
};

export default Layout;