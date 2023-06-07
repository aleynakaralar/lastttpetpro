import React, { useState } from 'react';
import { forgotPassword, signIn, signUpProvider } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, TextField, Button, 
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email,password, navigate)
    console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate)
  }

  return (
   <Box margin={8} display="flex"
   flexDirection="column"
   justifyContent="center"
   alignItems="center">
    <Typography variant="h3" margin={5} >
      LOGIN
    </Typography>
    <Box 
        component= "form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={5}
        onSubmit={handleLogin}
        >
       
       <TextField
          required
          id="outlined-required"
          label="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
     
       <Button variant="contained" color="warning" type='submit'>Login</Button> 
       {/* <Button variant="contained" color="warning" onClick={handleProviderLogin} >Continue with Google</Button> */}
       <Typography type="link" onClick={()=> forgotPassword(email)}>Forget Password?</Typography>
    </Box>

   </Box>
  )
}

export default Login