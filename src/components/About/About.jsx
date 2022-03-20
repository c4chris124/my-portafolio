import React from "react";
import "./About.scss";
import awardimg from '../../assets/Certifcado Henry-1.png'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src="" alt="" className="about-image" />
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
