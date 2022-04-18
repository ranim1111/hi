import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Warning from "@material-ui/icons/Warning";
import RecommendIcon from "@mui/icons-material/Recommend";
import List from "@material-ui/core/List";
import Dashboard from "@material-ui/icons/Dashboard";
import Logout from "./Logout";
import { Link } from "react-router-dom";

export default function Menu2() {
  return (
    <React.Fragment>
      <List>
        <ListItem button component={Link} to={"/Dashboard"}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to={"/Warning"}>
          <ListItemIcon>
            <Warning />
          </ListItemIcon>
          <ListItemText primary="Warnings" />
        </ListItem>

        <ListItem button component={Link} to={"/Recommendation"}>
          <ListItemIcon>
            <RecommendIcon />
          </ListItemIcon>
          <ListItemText primary="Recommendations" />
        </ListItem>
      </List>
      <Logout />
    </React.Fragment>
  );
}
