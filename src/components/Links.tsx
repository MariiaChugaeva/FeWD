import React from 'react';
import githubicon from '../media/icons8-github.svg';
import vkicon from '../media/icons8-vk.svg';
import teleicon from '../media/icons8-логотип-telegram.svg';
import maleicon from '../media/icons8-почта.svg';
import { Link } from 'react-router-dom';

const Links: React.FC = () => (
  <section id="contact" className="contact">
    <div className='ComicButton'>
        <nav className="navbar">
            <h2><Link to="/Comic">Comic</Link></h2>
        </nav>
    </div>
    <div className="details">
    <ul className="links">
      <li className="li">
        <a href= "https://vk.com/id519015179"><img src={vkicon} alt="" /></a>
      </li>
      <li className="li">
        <a href="https://github.com/MariiaChugaeva"><img src={githubicon} alt="" /></a>
      </li>
      <li className="li">
        <a href="https://t.me/mariiachugaeva"><img src={teleicon} alt="" /></a>
      </li>
      <li className="li">
        <a href="mailto:m.chugaeva@innopolis.university"><img src={maleicon} alt="" /></a>
      </li>
    </ul>
    </div>
  </section>
);

export default Links;