import React from "react";
import { Container, Grid, Link, Typography, useTheme, IconButton, InputAdornment, Button, TextField, Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import footerImage from '../assets/image 1174.png'
import './Footer.css';
const Footer = () => {
    const theme = useTheme();
    // console.log(theme);
    return (
      <>
      <Box sx={{display: 'flex', placeContent:"center", margin:'3rem 0 3rem 0'}}>
      <img src={footerImage} alt="footer Image" style={{
          // objectFit: "contain",
          maxWidth: '50%',
          height: 'auto'
        }} />
      </Box>
        <Container disableGutters maxWidth={false}  style={{fontSize:'14px'}} sx={{bgcolor: "#EEEFFB", color: theme.palette.text.secondary, paddingTop: "2rem" }}>
            <Grid container spacing={1} >
                <Grid item sm={1.75}></Grid>
                <Grid item xs={12} sm={3}sx={{ display: 'flex', flexDirection:'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Typography color={theme.palette.text.primary} variant="h5">Homely Haven</Typography>
                    <TextField
                      hiddenLabel
                      placeholder="Enter Email Address"
                      sx={{
                        fieldset: { borderColor: '#b6b6bf', borderRadius: '5px' }, justifyContent: 'center', paddingTop: '3px',
                        '& .MuiInputBase-input': {
                          backgroundColor: "white",
                          fontSize: '0.8rem',
                          padding: '8px 8px',
                        }
                      }}
                      InputProps={{
                        style: {
                          paddingRight: '0'
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button sx={{
                              backgroundColor: theme.palette.primary.main,
                              width: "100%",
                              lineHeight: 1.5,
                              color: 'white',
                              borderRadius: '5px',
                                '&:hover': {
                                  color: theme.palette.primary.main
                                },
                            textTransform: 'none',
                            }}>Sign Up
                            </Button>
                          </InputAdornment>
                        )
                      }}
                    />
                    <Typography className="linkClass" color="inherit" variant="inherit">Contact Info</Typography>
                    <Typography className="linkClass" color="inherit" variant="inherit">17 Princess Road, London, Greater London NW1 8JR, UK</Typography><br/>
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Typography className="linkClass" color={theme.palette.text.primary} variant="subtitle1">Catagories</Typography>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Laptops & Computers</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Cameras & Photography</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Smart Phones & Tablets</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Video Games & Consoles</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Waterproof Headphones</Link><br/>
                </Grid>
                <Grid  item xs={12} sm={2} >
                    <Typography className="linkClass" color={theme.palette.text.primary} variant="subtitle1">Customer Care</Typography>
                    <Link className="linkClass" href="#" color="inherit" underline="none">My Account</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Discount</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Returns</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Orders History</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Tracking</Link><br/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className="linkClass" color={theme.palette.text.primary} variant="subtitle1">Pages</Typography>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Blog</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Browse the Shop</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Category</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Pre-Built Pages</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">Visual Composer Elements</Link><br/>
                    <Link className="linkClass" href="#" color="inherit" underline="none">WooCommerce Pages</Link><br/>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>
            <Grid container sx={{ placeItems: 'center', marginTop: "2rem", bgcolor: "#E7E4F8", pt: 0.5, pb: 0.5 }}>
                <Grid item xs={7} sm={9}>
                    <Typography variant="body2" color="textSecondary"sx={{pl: '20%'}} >
                        © {new Date().getFullYear()} ©Webecy - All Rights Reserved.
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton >
                        <FacebookIcon className="iconStyle" />
                    </IconButton>
                    <IconButton >
                        <InstagramIcon className="iconStyle" />
                    </IconButton>
                    <IconButton >
                        <TwitterIcon className="iconStyle" />
                    </IconButton>
                </Grid>
                <Grid item xs={1.25} sm={3}>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Footer;