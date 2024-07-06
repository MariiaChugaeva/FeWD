import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Links from '../components/Links';
import '../css/style.css';
import ComicPage from './comic';

const Main: React.FC = () => (
  <div>
    <Header />
    <main>
      <Body />
      <Links />
    </main>
  </div>
);

export default Main;