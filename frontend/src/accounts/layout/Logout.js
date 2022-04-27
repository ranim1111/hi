import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Typography } from "@mui/material";
export default function Logout() {
  const navigate = useNavigate();
  async function HandleLogout() {
    Swal.fire({
      title: "Do You Want To Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("You Have Been Successfully Logged Out");
        navigate("/");
      }
    });
  }
  return (
    <React.Fragment>
      <Divider />
      <List>
        <ListItem button onClick={HandleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <Typography>Logout</Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
