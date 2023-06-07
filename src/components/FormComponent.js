import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  Button,
  Stack,
  Box,
  MenuItem,
  Select
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';



const FormComponent = ({info, setInfo, handleSubmit, isAdd}) => {
 const handleChange = (e) => {
  e.preventDefault();

  // const name = e.target.name
  // const value = e.target.value 
  // console.log(name, value)

  const {name, value} = e.target
  setInfo({...info, [name] : value })



 } 

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: '300' }}
    >
      
      <h2 className="contact-header">Add Advert</h2>

      <Box style={{ backgroundColor: 'white', padding: '20px' }}>
        <form onSubmit = {handleSubmit} >
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              value={info.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <TextField
              variant="outlined"
              name="information"
              placeholder="About your animal"
              value={info.information}
              onChange={handleChange}>
              </TextField>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: '20px' }}>Type</InputLabel>
              <Select
                label="Type"
                name="type"
                variant="outlined"
                value={info.type}
                onChange={handleChange}
              >
                <MenuItem value="Dog">Dog</MenuItem>
                <MenuItem value="Cat">Cat</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button  sx={{width:50, px:10, m:50}} display="flex"
            variant="contained" type="submit" value="Submit" color="warning" >
             {isAdd}
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;
