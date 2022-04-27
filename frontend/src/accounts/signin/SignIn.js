import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import axios from "axios"; //pour l'envoie des requetes
import Google from "../googlesignin/Google";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmitSignin(e) {
    e.preventDefault();
    try {
      const response = await axios({
        //requete
        method: "POST",
        url: "http://localhost:5000/user/signin",
        data: {
          //donnees de la requete
          email: email,
          password: password,
        },
      });
      navigate("/Dashboard");
      Swal.fire(
        "You Have Successfully Logged in !",
        ` ${response.data} `,
        "success"
      );
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: ` ${error.response.data} `,
      });
    }
    setPassword("");
    setEmail("");
  }

  return (
    <div>
      <Container className="containersignin" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
        <Typography className="typography1" variant="h3">
          Welcome Back...
        </Typography>
        <br />
        <Box component="form" sx={{ mt: 0 }} onSubmit={handleSubmitSignin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="password"
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item sm={5}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, mb: 2 }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item sm={5}>
              <Button
                type="reset"
                variant="outlined"
                fullWidth
                sx={{ mt: 2, mb: 2 }}
              >
                Cancel
              </Button>
              <br />
              <br />
              <Typography className="typography2" variant="p">
                OR
              </Typography>
              <div>
                <Grid item sm={30} className="btngoogle">
                  <Google />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;
