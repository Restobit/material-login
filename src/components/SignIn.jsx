import React from "react";
import { LockClockOutlined } from "@mui/icons-material";
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

export default function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "0 auto",
  };

  const avatarStyle = { background: "#21bb78" };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockClockOutlined />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter Username"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="isRemember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            style={{ margin: "0.85rem 0" }}
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
          <Typography>
            <Link href="#">Forgot password?</Link>
          </Typography>
          <Typography>
            Don't have an account ? <Link href="#">Sing Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
