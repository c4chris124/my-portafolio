import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello, My name is</h2>
          <h1 className="intro-name">Christian Castellanos</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
                <div className="intro-title-item">Web Developer</div>
                <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">right</div>
    </div>
  );
};

export default Intro;
