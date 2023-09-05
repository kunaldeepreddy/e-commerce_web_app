import React, { useState } from "react";
import { Container, Grid, Box, Typography, useTheme, IconButton, InputAdornment, Button, TextField } from "@mui/material";
import dataObject from '../utils/data.json';
import sofaImage from '../assets/sofa promotional header.png'
import lampImage from '../assets/image 32.png'
const Home = () => {
  const theme = useTheme();
  return (
    <Container disableGutters >
      <Grid container sx={{ height: '20%', width: '100vw',minHeight:'20%', backgroundColor: "#F2F0FF", paddingTop: '4px', paddingBottom: '3px' }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
          <img style={{
            maxWidth: '100%',
            maxHeight: '50vh',
            width: 'auto',
            height: '30vh',
            paddingTop: 0
          }}
            src={lampImage} alt="lamp Image" />
          {/* </div> */}
        </Grid>
        <Grid item xs={4}>
          <Box sx={{paddingTop:"20%"}}>
            <Typography variant="caption" color={theme.palette.primary.main}>Best Furniture For Your Castle....</Typography>
            <Typography variant="h5" color="black" sx={{ fontWeight: 700, paddingLeft: '10%' }}>New Furniture Collection Trends in 2023</Typography>
            <Typography variant="caption" color="#8A8FB9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</Typography><br />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{
              margin: (theme) => theme.spacing(2, 0, 2), borderRadius: '2px', textTransform: 'none',
              width: '70vh',
              minWidth: '100px',
              '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light,
                borderColor: theme.palette.primary.main,
                boxShadow: `0px 0px 0px 1px ${theme.palette.primary.main}`
              },
              width: '20%',
            }}>Shop Now</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img src={sofaImage} alt="lamp Image" style={{
            minWidth: '70%',
            minHeight: '70%',
            width: '90%',
            height: '90%'
          }} />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      {/* <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna in urna ultrices faucibus. Curabitur </h1>
        <p>ut bibendum ex. Sed facilisis justo in turpis efficitur, sit amet euismod metus interdum. Nulla facilisi.</p>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna in urna ultrices faucibus. Curabitur </h1>
        <p>ut bibendum ex. Sed facilisis justo in turpis efficitur, sit amet euismod metus interdum. Nulla facilisi.</p>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna in urna ultrices faucibus. Curabitur </h1>
        <p>ut bibendum ex. Sed facilisis justo in turpis efficitur, sit amet euismod metus interdum. Nulla facilisi.</p>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna in urna ultrices faucibus. Curabitur </h1>
        <p>ut bibendum ex. Sed facilisis justo in turpis efficitur, sit amet euismod metus interdum. Nulla facilisi.</p>
      </div> */}
    </Container>
  );
}

export default Home;
