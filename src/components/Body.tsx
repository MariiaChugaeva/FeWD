import React from 'react';
import Layout from '../components/Layout';
const Body: React.FC = () => (
<section id="about" className="home">
    <div className="home-content">
        <div className="achievements">
            <div className="item item1">
                <h2>Programming languages I know</h2>
                <ul>  
                <li>C;</li>
                <li>C++;</li>
                <li>Python;</li>
                <li>Java.</li>
                </ul>
            </div>
            <div className="item item2">
                <h2>Courses I successfully passed</h2>
                <ul>  
                    <li>Fundamentals of Computer Architecture;</li>
                    <li>Analytical Geometry and Linear Algebra;</li>
                    <li>Mathematical Analysis;</li>
                    <li>Logic and Discrete Mathematics;</li>
                    <li>Introduction To Programming;</li>
                    <li>English for academic purposes;</li>
                    <li>Software Systems Analysis and Design;</li>
                    <li>Data Structures and Algorithms;</li>
                    <li>Theoretical Computer Science.</li>
                </ul>
            </div>
            <div className="item item3">
                <h2>My areas of interest in IT</h2>
                <ul>  
                    <li>Artificial intelligence;</li>
                    <li>Robotics;</li>
                    <li>Game development;</li>
                    <li>Olympiad programming.</li>
                </ul>
            </div>
            <div className="item item4">
                <h2>My hobbies</h2>
                <ul>  
                    <li>Drawing;</li>
                    <li>Reading;</li>
                    <li>Playing video games;</li>
                    <li>Playing the kalimba.</li>
                </ul>
            </div>
        </div>
    </div>
</section>
);
export default Body;