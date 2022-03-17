import React from "react";
import { IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import imageP from '../../assets/exported1.png'
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
          <p className="intro-description">
            Self-taught and very discipline person, passionate about learning,
            technology and innovation
          </p>
        </div>
        <IconButton
          sx={{
            position: 'absolute',
            bottom: '20px',
          }}
        >
          <ExpandMore
            htmlColor="black"
            sx={{
              width: '50px',
              height: '50px'
            }}
          />
        </IconButton>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src="" alt="" className="intro-image" />
      </div>
    </div>
  );
};

export default Intro;
