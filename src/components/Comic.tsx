import React, { useEffect, useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { Comic } from '../types/comic';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

interface ComicComponentProps {
  email: string;
}

const ComicCore: React.FC<ComicComponentProps> = ({ email }) => {
  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((data: number) => {
        const comicId = data;
        return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
      })
      .then(response => response.json())
      .then((comic: Comic) => {
        setComic(comic);
      });
  },);

  if (!comic) {
    return <div>...</div>;
  }

  const date = new Date(comic.year, comic.month - 1, comic.day);
  const formattedDate = formatDistanceToNowStrict(date, { addSuffix: true });

  return (
    <div id="comic" className="comic">
      <h2 id="comic-title">{comic.safe_title}</h2>
      <img id="image" src={comic.img} alt={comic.alt} />
      <p id="date">{formattedDate}</p>
    </div>
  );
};

export default ComicCore;