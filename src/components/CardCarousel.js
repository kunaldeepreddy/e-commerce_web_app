import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, useState, useTheme, useMediaQuery } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import MultiPanelCardCarousel from "./MultiPanelCardCarousel";
import OfferOfTheDay from "./OfferOfTheDay";
import PropTypes from 'prop-types';

function CardCarousel({ data, cardPanelType }) {
    const theme = useTheme();
    // console.log(theme);
    // if (cardPanelType === 'MultiPanelCardCarousel') {
    const isXsDownMatch = useMediaQuery(theme.breakpoints.down("500"));
    const isSmMatch = useMediaQuery(theme.breakpoints.between("500", "700"));
    const isMdMatch = useMediaQuery(theme.breakpoints.between("700", "1000"));
    const isLgUpMatch = useMediaQuery(theme.breakpoints.up("1000"));
    // }
    // else if (cardPanelType === 'OfferOfTheDay') {
    const isXsDownMatch1 = useMediaQuery(theme.breakpoints.down("600"));
    const isSmMatch1 = useMediaQuery(theme.breakpoints.between("600", "900"));
    const isMdMatch1 = useMediaQuery(theme.breakpoints.between("900", "1200"));
    const isLgUpMatch1 = useMediaQuery(theme.breakpoints.up("1200"));
    // }
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
    let cardsLength
    if (cardPanelType === 'MultiPanelCardCarousel') {
        cardsLength = isLgUpMatch ? 4 : isXsDownMatch ? 1 : isSmMatch ? 2 : isMdMatch ? 3 : 1;
    } else if (cardPanelType === 'OfferOfTheDay') {
        cardsLength = isLgUpMatch1 ? 4 : isXsDownMatch1 ? 1 : isSmMatch1 ? 2 : isMdMatch1 ? 3 : 1;
    }
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
                                {data.slice(i, i + sliderItems).map((cardObject, index) => {
                                    return cardPanelType === 'OfferOfTheDay' ?
                                        (<OfferOfTheDay cardMediaStyle={cardMediaStyle} cardObject={cardObject} />) :
                                        (<MultiPanelCardCarousel cardMediaStyle={cardMediaStyle} cardObject={cardObject} />)
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
                <Carousel
                    navButtonsAlwaysVisible={true}
                    fullHeightHover={true}
                    animation='slide'
                    duration='500'
                    interval='4000'
                    swipe={true}
                    autoPlay={false}
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

    CardCarousel.propTypes = {
        cardPanelType: PropTypes.string
    }

    export default CardCarousel;