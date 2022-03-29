import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import './About.scss'

const SkillsList = ({icon, text}) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
            <Avatar src={icon} variant="rounded"/>
        </ListItemAvatar>
        <ListItemText primary={text} />
      </ListItem>
    </List>
  );
};

export default SkillsList;
