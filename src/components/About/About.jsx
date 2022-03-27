import React from "react";
import "./About.scss";
import awardimg from '../../assets/Certifcado Henry-1.png'
import {useSelector} from 'react-redux'

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div className="about-container">
      <div className="about-left">
        <div className={`about-card bg ${darkMode && 'bg-dark'}`}></div>
        <div className="about-card">
          <img src="https://firebasestorage.googleapis.com/v0/b/traveladvisor-343201.appspot.com/o/11f5c80b-1251-49c9-ad4f-ab89b193cf17.jpg?alt=media&token=e3bc581a-610f-4520-84b5-c64c7d819e51" alt="" className="about-image" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">
          About Me
        </h1>
        <p className="about-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptatibus inventore sit sed dolore accusantium facilis illum, ea
          voluptatum nisi!
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptatibus inventore sit sed dolore accusantium facilis illum, ea
          voluptatum nisi!
        </p>
        <div className="about-award">
          <img src={awardimg} alt=""  className="about-award-img"/>
          <div className="about-award-texts">
            <h4 className="about-award-title">Soy Henry Coding Boot-camp</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sapiente inventore fugiat fuga, ab quisquam minus quia numquam! Deserunt, dignissimos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
