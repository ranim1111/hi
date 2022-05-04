/*import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Grid, Box, Container, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function UpdateUser() {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState("");
   const handleUpdateUser = (_id) => {
    axios
      .post(`http://localhost:5000/user/updateuser/${_id}`)
      .then((res) => {
        //console.log(res.data);
        setUsersCollection([res.data]);
        console.log("cbon");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        color="info"
        //onClick={handleEditClick}
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Edit User Profile</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ mt: 2 }} //onSubmit={handleUpdateUser}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  //value={data.firstName}
                  //onChange={(e) => setFistName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  //value={data.lastName}
                  //onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  //value={data.email}
                  //onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone Number"
                  name="phonenumber"
                  //value={data.phoneNumber}
                  //onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  //value={data.password}
                  //onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item sm={5}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, mb: 2 }}
                >
                  Save
                </Button>
              </Grid>
              <Grid item sm={5}>
                <Button
                  type="reset"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2, mb: 2 }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
*/
