import {
  createTheme,
  ThemeProvider,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import mainpage from "../assests/mainpage.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: ["Delicious Handrawn", "cursive"].join(","),
    },
  });

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h1" component="div" mb={5}>
            Your friendly <br /> neighborhood <br /> Pet Pro
          </Typography>
        </ThemeProvider>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Box m={2}></Box>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box component="img" alt="Main Page" src={mainpage} m={5} />
      </Grid>
    </Grid>
  );
};

export default Home;
