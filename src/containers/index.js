import { React, useState } from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Paper
        elevation={10}
        style={{
          width: 340,
          margin: "20px auto auto",
        }}
      >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          onChange={handleChange}
          aria-label="full width tabs example"
        >
          <Tab label="Sign In" />
          <Tab label="Sign up" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </>
  );
};

export default SignInOutContainer;
