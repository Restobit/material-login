import React from "react";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function SignUp() {
  const paperStyle = {
    padding: "20px 20px",
    height: "50vh",
    width: 300,
    margin: "0 auto",
  };

  const avatarStyle = { background: "#1bbd7e" };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h2>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to create an account!
            </Typography>
          </Grid>
          <form>
            <TextField
              label="Username"
              placeholder="Enter username"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              label="Email"
              placeholder="Enter email"
              variant="standard"
              type="email"
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              variant="standard"
              type="password"
              fullWidth
              required
            />
            <FormControlLabel
              style={{ display: "initial" }}
              control={<Checkbox name="isAcceptPrivacy" color="primary" />}
              label="I accept the terms and conditions."
            />
            <Button
              type="submit"
              variant="contained"
              style={{ margin: "0.85rem 0" }}
              color="primary"
            >
              Sign Up
            </Button>
          </form>

          <Typography>
            Do you have an account ? <Link href="#">Sing In</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
