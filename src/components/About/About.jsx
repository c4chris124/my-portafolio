import React from "react";
import "./About.scss";
import { useSelector } from "react-redux";
import {List, ListItem, ListItemIcon} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="about-container">
      <div className="about-left">
        <div className={`about-card bg ${darkMode && "bg-dark"}`}></div>
        <div className="about-card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/traveladvisor-343201.appspot.com/o/11f5c80b-1251-49c9-ad4f-ab89b193cf17.jpg?alt=media&token=e3bc581a-610f-4520-84b5-c64c7d819e51"
            alt=""
            className="about-image"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I am a developer seeking for professional growth. I'm really excited
          to be at the deployment phase of my new career as a web developer, I
          was working in the call center industry, Why I changed industry?, I
          have always loved technology, software development, I used the call
          center industry to take the next step in my life, What I meant about
          this, is I did not have all the resources I needed to learn web
          development.
        </p>
        <div className="about-award">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/traveladvisor-343201.appspot.com/o/Certifcado%20Henry-1.png?alt=media&token=ff3bcfb0-bc2b-4357-969c-0e0f72c3fb08"
            alt=""
            className="about-award-img"
          />
          <div className="about-award-texts">
            <h4 className="about-award-title">Soy Henry Coding Boot-camp</h4>
            <p>
              Full Time Training in Web Development Technologies, Such as
              JavaScript, React JS, Redux, Node JS, Express JS, Sequilize,
              PostgreSQL, TypeScript, React Native, SCRUM methodology +800Hrs,
              Dynamic Programming, Pair programming, code review, and skills
              boost
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
