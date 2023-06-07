import * as React from "react";
import  { useContext } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import logo from "../assests/logo.jpeg";
import { AuthContext } from '../context/AuthContext';
import { logout } from '../auth/firebase';

export default function Navbar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/aboutus/");
  };
  const handleAnimalMate = () => {
    navigate("/animalMate");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const {currentUser} = useContext(AuthContext)
  return (
    <Grid container spacing={2}>
      <AppBar position="static" color="warning">
        <Grid item m={5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box component="img" sx={{ height: 100 }} alt="Logo" src={logo} />
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h6"
                component="div"
                onClick={handleHome}
                px={8}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleAbout}
                px={8}
              >
                About Us
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleAnimalMate}
                px={8}
              >
                Animal Mate
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleContact}
                px={8}
              >
                Contact
              </Typography>
              {/* <Typography
                variant="h6"
                component="div"
                onClick={handleLogin}
                px={2}
              >
                Login
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleSignup}
                px={2}
              >
                Sign Up
              </Typography> */}
              {currentUser ? (
      <>
      <Typography className='mb-0 text-capitalize'>
      {currentUser.displayName}
      </Typography>
      <Button variant="contained" color="warning" className="ms-12 btn btn-outline-light"  onClick = {()=> logout()}>Logout</Button>
      </>) : (
        <>
        <Button variant="contained" color="warning" className="ms-12 btn btn-outline-light" onClick={() => navigate("/login")}>Login</Button>
        <Button variant="contained" color="warning" className="ms-12 btn btn-outline-light" onClick={() => navigate("/signup")} >Register</Button>
        </>)}
            </Box>
          </Box>
        </Grid>
      </AppBar>
    </Grid>
  );
}
