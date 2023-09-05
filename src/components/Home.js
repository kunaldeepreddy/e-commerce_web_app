import React, { useState } from "react";
import { Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Box, Typography, useTheme, useMediaQuery, IconButton, InputAdornment, Button, TextField } from "@mui/material";
import dataObject from '../utils/data.json';
import Carousel from 'react-material-ui-carousel'
// import sofaImage from '../assets/sofa promotional header.png'
// import HomeSofaImage from '../assets/Home-Stylish-Club-Sofa.png'
// import sofaChairImage from '../assets/Group 153.png'
import HomeCarousel from "./HomeCarousel.js";
import CardCarousel from "./CardCarousel.js";
const Home = () => {
  const theme = useTheme();
  console.log(dataObject);
  const homeCauroselPics = () => {
    return dataObject.data.carouselPics.map((item) => {
      return <HomeCarousel key={item._id} image={item.image} />
    });
  }

  return (
    <Container disableGutters >
      <Carousel
        animation='slide'
        duration='500'
        swipe={true}
        indicatorIconButtonProps={{
          style: {// 1
            width: '10px',
            margin: '7px',
            height: '10px',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            // borderRadius: '50%'
          },
          sx: {
            '&:hover .MuiTouchRipple-root': {
              color: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.light,
              borderColor: theme.palette.primary.main,
              boxShadow: `0px 0px 0px 4px ${theme.palette.primary.main}`,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              cursor: "pointer"
            }
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.light,
            border: `6px solid ${theme.palette.primary.main}`,
            boxShadow: `0px 0px 0px 0px ${theme.palette.primary.main}`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }
        }}
        navButtonsProps={{
          style: {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.light,
              // borderRadius: 0
          }
        }}
        indicatorContainerProps={{
          style: {
            backgroundColor: "#F2F0FF",
            marginTop: "0px", // 5
            // textAligh: "left" // 4
          }
        }}>
        {homeCauroselPics()}
      </Carousel>
      <CardCarousel data={dataObject.data.LatestProducts.FeaturedProducts} />
      <Box sx={{ pt: '5px'}}>
      <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Latest Products</Typography>
      </Box>
    </Container>
  );
}

export default Home;
