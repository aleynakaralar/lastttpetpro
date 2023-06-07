import {
  createTheme,
  ThemeProvider,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import catDog from "../assests/cat-dog.jpg";

const AboutUs = () => {
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
            <Typography variant="h1">About Us</Typography>
          </ThemeProvider>

          <Typography variant="h5" m={12}>
            This company, which we established in 2023 based on animal health,
            is a communication tool for you animal lovers. We provide a network
            where animal owners who want to breed their pets can reach each
            other in a safe environment. Animal health and protection is our
            most important principle. Thanks to Pet Pro, you, dear animal
            owners, can find suitable animal companions for your animals.
            Advertise now!
          </Typography>

          <Box component="img" alt="About Page" src={catDog}  />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
