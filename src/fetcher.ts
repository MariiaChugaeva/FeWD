import { formatDistanceToNowStrict } from 'date-fns';
import { inter } from './map';

document.addEventListener("DOMContentLoaded", () => {
  const email = "m.chugaeva@innopolis.university";
  const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${email}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then((data: number) => {
      const comicId = data;
      return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    })
    .then(response => response.json())
    .then((comic: inter) => {
      const comicTitle = document.getElementById("IDtitle");
      const comicImg = document.getElementById("IDimage");
      const comicDate = document.getElementById("IDdata");

      if (comicTitle) comicTitle.textContent = comic.safe_title;
      if (comicImg) {
        comicImg.setAttribute('src', comic.img);
        comicImg.setAttribute('alt', comic.alt);
      }
      if (comicDate) {
        const date = new Date(comic.year, comic.month - 1, comic.day);
        comicDate.textContent = formatDistanceToNowStrict(date, { addSuffix: true });
      }
    });
});