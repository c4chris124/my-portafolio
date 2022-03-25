import React from "react";
import { IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import imageP from '../../assets/exported1.png'
import "./Intro.scss";
import { useSelector } from "react-redux";

const Intro = () => {
  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div className="intro-container">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello, My name is</h2>
          <h1 className="intro-name">Christian Castellanos</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Fucker</div>
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
            sx={{
              width: '50px',
              height: '50px',
              color: darkMode ? 'white' : 'black',
              animation: 'arrow 1s ease-in-out infinite alternate',
              cursor: 'auto',
            }}
          />
        </IconButton>
      </div>
      <div className="intro-right">
        <span className="intro-bg-wrap">
        <div className="intro-bg"></div>
        </span>
        {/* <img src={imageP} alt="" className="intro-image" /> */}
      </div>
    </div>
  );
};

export default Intro;
