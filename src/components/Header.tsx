import React from 'react';
import JabaGif from '../media/jaba.gif';
const Header: React.FC = () => (
    <section id="about" className="home">
      <div className="home-content">
        <h1>About me</h1>
        <div className="discription">
            <div className="home-gif">
                <img src={JabaGif} alt="Jaba" className="foto" />
            </div>
            <p>I&#39;m a first-year bachelor&#39;s student at Innopolis University. I love programming and enjoy social events. Currently, I participate in "front-end web development" and "reading skills for IT specialists" elective courses.</p>
        </div>
      </div>
    </section>
  );
export default Header;