import {
  createTheme,
  ThemeProvider,
  Box,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";


const Contact = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Delicious Handrawn", "cursive"].join(","),
    },
  });

  return (
    <Grid>
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <Box border="5px solid pink" p={5}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2">
            Contact us for any problems or suggestions!</Typography>
          </ThemeProvider>

          <Typography variant="h5" m={12}>
          <Divider>Email</Divider>
            pet_pro@petpro.com
          <Divider>Phone</Divider>
            0500 555 55 55
            <Divider>Adress</Divider>
            Istanbul / Uskudar  
          </Typography>

       
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
