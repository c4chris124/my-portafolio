import React from "react";
import "./About.scss";
import { useSelector } from "react-redux";
import SkillsList from "./SkillsList";

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="about-container">
      <div className="about-left">
        <div className={`about-card bg ${darkMode && "bg-dark"}`}></div>
        <div className="about-card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/traveladvisor-343201.appspot.com/o/IMG_PixelCam_Plus_20210418_094137.jpg?alt=media&token=0de10f48-c743-4b5b-8aba-d409f8a5fff2"
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
          was working in the call center industry.
        </p>
        <p className="about-sub2">
        Why I changed industry?, I
          have always loved technology, software development, I used the call
          center industry to take the next step in my life, What I meant about
          this, is I did not have all the resources I needed to learn web
          development.
        </p>
        <div className="about-container-skills">
          <span className="skills-title">My Skills</span>
          <nav className="about-skills">
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" text="JavaScript" />
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/typescript.svg" text="TypeScript" />
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/react-2.svg" text="React JS"/>
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/next-js.svg" text="Next JS" />
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/redux.svg" text="Redux" />
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" text="Node Js" />
            <SkillsList icon="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" text="Express JS" />
            <SkillsList icon="https://cdn.worldvectorlogo.com/logos/postgresql.svg" text="PostgreSQL" />
          </nav>
        </div>
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
