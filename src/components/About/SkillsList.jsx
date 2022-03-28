import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import './About.scss'

const SkillsList = ({icon, text}) => {
  return (
    <List sx={{margin: '5px'}}>
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
