
import { Box, Typography, TextField, Button, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { createUser } from '../auth/firebase';
import React, { useState } from 'react';

const Signup = () => {

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName,lastName )
    createUser(email, password,navigate)
    

  }
  return (
    <Box
      margin={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" margin={5}>
        Register
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={5}
        onSubmit={handleSubmit}
      >
       
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Surname"
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextField
          required
          id="outlined-disabled"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          required
          id="outlined-disabled"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="warning" type="submit">
          Sign Up
        </Button>
      
      </Box>
    </Box>
  );
};

export default Signup;
