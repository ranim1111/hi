import React, { useState } from "react";
import { ListItem, ListItemIcon, List } from "@material-ui/core";
import Warning from "@material-ui/icons/Warning";
import RecommendIcon from "@mui/icons-material/Recommend";
import Dashboard from "@material-ui/icons/Dashboard";
import Logout from "./Logout";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import GridViewIcon from "@mui/icons-material/GridView";

export default function Menu2() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <List>
        <ListItem
          button // component={Link} to={"/Dashboard"}
          onClick={handleClick}
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <Typography> Home Dashboard</Typography>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{ pl: 6 }}
              style={{ marginLeft: 13 }}
              component={Link}
              to={"/Dashboard"}
            >
              <ListItemIcon>
                <GridViewIcon />
              </ListItemIcon>
              <Typography> Dashboard</Typography>
            </ListItem>
            <ListItem button sx={{ pl: 6 }} style={{ marginLeft: 13 }}>
              <ListItemIcon>
                <UploadFileIcon />
              </ListItemIcon>
              <Typography> Uploaded Files</Typography>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button component={Link} to={"/Warning"}>
          <ListItemIcon>
            <Warning />
          </ListItemIcon>
          <Typography> Warning</Typography>
        </ListItem>

        <ListItem button component={Link} to={"/Recommendation"}>
          <ListItemIcon>
            <RecommendIcon />
          </ListItemIcon>
          <Typography>Recommendation</Typography>
        </ListItem>
        <ListItem button component={Link} to={"/Users"}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Typography> Users</Typography>
        </ListItem>
      </List>
      <Logout />
    </React.Fragment>
  );
}
