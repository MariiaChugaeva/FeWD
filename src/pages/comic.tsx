import React from 'react';
import HeaderComic from '../components/decl';
import Comic from '../components/Comic';
import '../css/style.css';
import { Link } from 'react-router-dom';

const ComicPage: React.FC = () => {
  const email = "m.chugaeva@innopolis.university";

  return (
    <div>
      <HeaderComic />
      <main className="comic-container">
        <Comic email={email} />
      </main>
      <div>
        <Link to="/">Go back to main page.</Link>
      </div>
    </div>
  );
};

export default ComicPage;