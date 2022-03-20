import React from "react";
import "./Toggle.scss";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  DarkModeTrue,
  DarkModeFalse,
} from "../../ducks/actions/actionCreators";
import { makeStyles } from "@mui/styles";

const Toggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const useStyles = makeStyles({
    root: {
      color: darkMode && "white",
    },
  });

  const classes = useStyles();

  return (
    <div
      className="toggle"
      style={{
        backgroundColor: darkMode ? "#292929" : "#FFFFFF",
      }}
    >
      <IconButton
        onClick={(e) => {
          dispatch(DarkModeTrue());
        }}
      >
        <Brightness4 className={classes.root} />
      </IconButton>
      <IconButton
        onClick={(e) => {
          dispatch(DarkModeFalse());
        }}
      >
        <Brightness7 className={classes.root} />
      </IconButton>
    </div>
  );
};

export default Toggle;
