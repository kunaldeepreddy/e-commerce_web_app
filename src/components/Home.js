import React, { useState } from "react";
import { CardActionArea, CardContent, CardMedia, Container, Card, ListItemIcon, ListItem, List, Grid, Box, Typography, useTheme, Backdrop, useMediaQuery, InputAdornment, Button, TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from 'react-material-ui-carousel'
// import sofaImage from '../assets/sofa promotional header.png'
// import HomeSofaImage from '../assets/Home-Stylish-Club-Sofa.png'
import CircleIcon from '@mui/icons-material/Circle';
import homeContainerImage from '../assets/home-container-image.avif';
import HomeCarousel from "./HomeCarousel.js";
import CardCarousel from "./CardCarousel.js";
import LatestProducts from "./LatestProducts.js";
import FreshInStore from "./FreshInStore.js";
import { useHomePageConfigQuery } from "../store/index.js";
import homeCarouselImage from "../assets/carousel_background.png";

const Home = () => {
  const theme = useTheme();
  const { data: homePageConfigData, isFetching, error : homePageError } = useHomePageConfigQuery();
  // console.log(dataObject);
  const isSmallScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  const homeCarouselPics = () => {
    return homePageConfigData.data.carouselProducts.carouselPics.map((item) => {
      return <HomeCarousel key={item._id} image={item.display_pic} lampImage={homePageConfigData.data.carouselProducts.lampImage} />
    });
  }
  return (
    <>
    {isFetching ? (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isFetching}
    >
      <CircularProgress color={theme.palette.primary.secondary} />
    </Backdrop>
    ) : homePageError ? (
      <React.Fragment>
        Error occurred while loading data please try again.
      </React.Fragment>
    ) : homePageConfigData && (
    <Container disableGutters maxWidth={false} >
      <Box sx={{backgroundImage: `url(${homeCarouselImage})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover',}}>
      <Carousel
        animation='slide'
        duration='500'
        interval='5000'
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
            // backgroundColor: "#F2F0FF",
            marginTop: "0px", // 5
            // textAligh: "left" // 4
          }
        }}>
          {homeCarouselPics()}
      </Carousel>
      </Box>
      <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Featured Products</Typography>
      <CardCarousel data={homePageConfigData.data.homePageProducts.featuredProducts} cardPanelType='MultiPanelCardCarousel' />
      <Box sx={{ pt: '5px' }}>
        <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Latest Products</Typography>
        <LatestProducts homePageProducts={homePageConfigData.data.homePageProducts} />
      </Box>
      <Box sx={{ pt: '5px' }}>
        <Grid container sx={{ height: '20%', width: '100vw', minHeight: '20%', backgroundColor: "#F2F0FF", paddingTop: '4px', paddingBottom: '3px' }}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} md={4}>
            <img src={homePageConfigData.data.carouselProducts.carouselPics[0].display_pic} alt="furniture Image" style={{
              // objectFit: "cover"
              maxWidth: '100%', // Set the maximum width to 100% of its container
              height: 'auto',
            }} />
          </Grid>
          {isSmallScreenMatch ? (
            <>
          <Grid item xs={2}></Grid> 
          <Grid item xs={2}></Grid>
            </>
            ) : ''}
          <Grid item xs={8} md={4} >
            <Typography variant="h4" color='#151875' sx={{ fontWeight: 700 }}>Unique Features Of leatest & Trending Products</Typography>
            <List >
              <ListItem >
                <ListItemIcon>
                  < CircleIcon sx={{ fontSize: '11px', color: theme.palette.primary.main }} />
                </ListItemIcon>
                <Typography variant="body1" color="#ACABC3">All frames constructed with hardwood solids and laminates</Typography>
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  < CircleIcon sx={{ fontSize: '11px', color: '#2B2BF5' }} />
                </ListItemIcon>
                <Typography variant="body1" color="#ACABC3">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</Typography>
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  < CircleIcon sx={{ fontSize: '11px', color: '#2BF5CC' }} />
                </ListItemIcon>
                <Typography variant="body1" color="#ACABC3">Arms, backs and seats are structurally reinforced</Typography>
              </ListItem>
            </List>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', placeItems: 'center', gap: '20px' }}>
              <div>
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{
                  margin: (theme) => theme.spacing(2, 0, 2), borderRadius: '2px', textTransform: 'none',
                  // width: '70vh',
                  minWidth: '100px',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.light,
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0px 0px 0px 1px ${theme.palette.primary.main}`,
                    borderRadius: '2px'
                  },
                  width: '100%',
                  padding: '14px 25px'
                }}>Add To Cart</Button>
              </div>
              <div>
                <Typography variant="body2" color="#151875">B&B Italian Sofa </Typography>
                <Typography variant="body2" color="#151875">$32.00</Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
      <Box sx={{ pt: '5px' }}>
        <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Fresh in Store</Typography>
        <FreshInStore FreshProducts = {homePageConfigData.data.homePageProducts.bestSellerProducts} />
        {/* <Grid container spacing={2} >
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "row", alignItems: 'center', justifyContent: "space-around", gap: '10px' }}>
            {homePageConfigData.data.homePageProducts.bestSellerProducts.filter((filterdObject, index) => index < 4).map((object) => {
              return (
                <Card key={object._id}
                  sx={{
                    '&:hover .MuiCardContent-root': {
                      color: theme.palette.primary.light,
                      backgroundColor: theme.palette.secondary.main,
                      cursor: "pointer"
                    },
                    '&:hover .MuiTypography-caption': {
                      color: theme.palette.text.tertiary,
                      // backgroundColor: '#2F1AC4',
                      cursor: "pointer"
                    },
                    '&:hover': {
                      boxShadow: "1px 1px 10px #b3b2b8"
                    },
                    // flex: 1,
                    // [theme.breakpoints.up('md')]: {
                    //   flex: 0.6,
                    // }
                  }}
                // style={{ height: '100%', width: '100%' }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      // style={{ width: '100%' }}
                      image={object.display_pic}
                      title="Card Image"
                      sx={{
                        backgroundColor: '#F6F7FB', objectFit: 'contain', height: '28vh', width: '100%'
                      }}
                    />
                    <CardContent style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="h6" color="inherit">
                        {object.name}
                      </Typography>
                      <Typography style={{ textDecoration: "line-through", textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="textSecondary">
                        ${object.price}
                      </Typography>
                      <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} gutterBottom variant="caption" color="secondary">
                        ${object.offer_price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid> */}
      </Box>
      <Box sx={{ backgroundColor: 'transparent', padding: '4rem 0 4rem 0', marginTop: '2rem' }} style={{
        backgroundImage: `url(${homeContainerImage})`, // Use the same background image
        backgroundSize: 'cover', // Adjust as needed
        backgroundAttachment: 'fixed', // Fixed background on scroll
        backgroundPosition: 'center top', // Adjust as needed
        height: 'inherit', // Adjust as needed
        minHeight: '100px', // Ensure the container takes at least the viewport height // Adjust to control how much of the image is initially hidden
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Typography style={{ textAlign: "center", fontWeight: 700 }} variant="h6" color="#151875">
          Get latest updates by subscribing to our news letter
        </Typography>
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
        }}>Subscribe</Button>
      </Box>
      <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Offers Of The Day</Typography>
      <CardCarousel data={homePageConfigData.data.homePageProducts.specialOfferProducts} cardPanelType='OfferOfTheDay' />
    </Container>
    )};
    </>
  );
}

export default Home;
