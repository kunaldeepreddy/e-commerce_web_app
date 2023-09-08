import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

function CardCarousel({ data }) {
    const theme = useTheme();
    // console.log(theme);
    const isXsDownMatch = useMediaQuery(theme.breakpoints.down("500"));
    const isSmMatch = useMediaQuery(theme.breakpoints.between("500", "700"));
    const isMdMatch = useMediaQuery(theme.breakpoints.between("700", "1000"));
    const isLgUpMatch = useMediaQuery(theme.breakpoints.up("1000"));
    var cardMediaStyle = {};
    if (isLgUpMatch) {
        cardMediaStyle = { height: '30vh' };
    } else if (isXsDownMatch) {
        cardMediaStyle = { height: '30vh' };
    } else if (isSmMatch) {
        cardMediaStyle = { height: '25vh' };
    } else if (isMdMatch) {
        cardMediaStyle = { height: '20vh' };
    }
    let cardsLength = isLgUpMatch ? 4 : isXsDownMatch ? 1 : isSmMatch ? 2 : isMdMatch ? 3 : 1;
    const sliderItems = data.length > cardsLength ? cardsLength : data.length;
    const items = [];
    for (let i = 0; i < data.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.push(
                <>
                    <Grid container spacing={2} key={i.toString()} sx={{ placeItems: 'center' }}>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8} sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", gap: '15px' }}>
                            {data.slice(i, i + sliderItems).map((object, index) => {
                                return (
                                    <Card key={object._id}
                                        sx={{
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
                                            },
                                            flex: 1,
                                            [theme.breakpoints.up('md')]: {
                                                flex: 0.6,
                                            }
                                        }}
                                        style={{ height: '100%', width: '100%' }}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                style={{ width: '100%' }}
                                                image={object.display_pic}
                                                title="Card Image"
                                                sx={{
                                                    backgroundColor: '#F6F7FB', objectFit: 'contain', ...cardMediaStyle
                                                }}
                                            />
                                            <CardContent style={{ padding:'5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    </Grid>
                </>
            );
        }
    }
    return (
        <Box sx={{ pt: '5px' }}>
            <Typography color="#1A0B5B" variant="h5" sx={{ fontWeight: 800, textAlign: 'center', padding: '1em 0 1em 0' }}>Featured Products</Typography>
            <Carousel
                navButtonsAlwaysVisible={true}
                fullHeightHover={true}
                animation='slide'
                duration='500'
                interval='4000'
                swipe={true}
                indicatorIconButtonProps={{
                    style: {// 1
                        // width: '10px',
                        margin: '5px',
                        height: '10px',
                        clipPath: 'inset(40% 0% 33% 10% round 10%)',
                        color: "#FEBAD7",
                        // borderRadius: '50%'
                    },
                    sx: {
                        '&:hover .MuiTouchRipple-root': {
                            color: theme.palette.primary.main,
                            clipPath: 'inset(40% 0% 33% 10% round 10%)',
                            cursor: "pointer"
                        },
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: theme.palette.primary.main,
                        clipPath: 'inset(40% 0% 33% 1% round 10%)',
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
                        marginTop: "10px", // 5
                        // textAligh: "left" // 4
                    }
                }}
            >
                {items}
            </Carousel>
        </Box>
    )
}

export default CardCarousel;