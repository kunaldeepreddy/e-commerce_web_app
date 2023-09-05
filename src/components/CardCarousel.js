import { Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Paper, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

function CardCarousel({ data }) {
    const theme = useTheme();
    const sliderItems = data.length > 4 ? 4 : data.length;
    const items = [];
    for (let i = 0; i < data.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.push(
                <>
                    <Grid container spacing={2} key={i.toString()} sx={{ placeItems: 'center', justifyItems: 'sapce-between' }}>
                        <Grid item xs={2} >
                        </Grid>
                        {data.slice(i, i + sliderItems).map((item, index) => {
                            return (
                                <Grid item xs={2} >
                                    <Card sx={{
                                                '&:hover .MuiCardContent-root': {
                                                    color: theme.palette.primary.light,
                                                    backgroundColor: '#2F1AC4',
                                                    cursor: "pointer"
                                                },
                                                '&:hover .MuiTypography-caption': {
                                                    color: theme.palette.primary.main,
                                                    // backgroundColor: '#2F1AC4',
                                                    cursor: "pointer"
                                                },
                                                '&:hover': {
                                                boxShadow: "1px 1px 10px #b3b2b8" 
                                                }
                                            }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                style={{ height: '30vh' }}
                                                image={item.display_pic}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent >
                                                <Typography style={{ textAlign: "center", fontSize: 'clamp(1.2rem, 10vw, 0.9rem)' }} variant="h6" color="inherit" component="h6">
                                                    {item.name}
                                                </Typography>
                                                <Typography style={{ textDecoration: "line-through", textAlign: "center", fontSize: 'clamp(0.6rem, 10vw, 0.7rem)' }} color="textSecondary" component="p">
                                                    ${item.price}
                                                </Typography>
                                                <Typography style={{ textAlign: "center", fontSize: 'clamp(1.1rem, 10vw, 0.8rem)' }} gutterBottom variant="caption" color="secondary" component="h6">
                                                    ${item.offer_price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}
                        <Grid item xs={2} >
                        </Grid>
                    </Grid>
                    </>
            );
        }
    }
    return (
        <Box sx={{ pt: '5px'}}>
            <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Featured Products</Typography>
            <Carousel 
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            animation='slide'
            duration='500'
            swipe={true}
            indicatorIconButtonProps={{
              style: {// 1
                // width: '10px',
                margin: '5px',
                height: '10px',
                clipPath:'inset(40% 0% 33% 10% round 10%)',
                color: "#FEBAD7",
                // borderRadius: '50%'
              },
              sx: {
                '&:hover .MuiTouchRipple-root': {
                  color: theme.palette.primary.main,
                  clipPath:'inset(40% 0% 33% 10% round 10%)',
                  cursor: "pointer"
                }
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: theme.palette.primary.main,
                clipPath:'inset(40% 0% 33% 1% round 10%)',
              }
            }}
            navButtonsProps={{
              style: {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.light,
                  opacity: '75%'
                  // borderRadius: 0
              }
            }}
            indicatorContainerProps={{
              style: {
                backgroundColor: "inherit",
                marginTop: "0px", // 5
                // textAligh: "left" // 4
              }
            }}>
                {items}
            </Carousel>
        </Box>
    )
}

export default CardCarousel;