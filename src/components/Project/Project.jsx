import React from "react";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import "./Project.scss";

const Project = ({ img, link }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`project-container mdc-elevation--z24 ${darkMode && 'pc-dark'}`}>
      <div className="p-browser">
        <div className={`p-circle ${darkMode && "dc"}`}></div>
        <div className={`p-circle ${darkMode && "dc"}`}></div>
        <div className={`p-circle ${darkMode && "dc"}`}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Project;
