import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, useTheme, useMediaQuery  } from "@mui/material";

function CardsPanel({ data, actualDataLength}) {
    const theme = useTheme();
    let dataClone = [ ...data ];
    if (dataClone.length > actualDataLength) {
        dataClone.splice(actualDataLength);
    }
    // console.log(data.length);
    const isXsDownMatch = useMediaQuery(theme.breakpoints.down("500"));
    const isSmMatch = useMediaQuery(theme.breakpoints.between("500", "700"));
    const isMdMatch = useMediaQuery(theme.breakpoints.between("700", "900"));
    const isLgUpMatch = useMediaQuery(theme.breakpoints.up("900"));
    var cardMediaStyle = {};
    if (isLgUpMatch) {
        cardMediaStyle = { height: '25vh', width: '18vw' };
    } else if (isXsDownMatch) {
        cardMediaStyle = { height: '40vh', width: '70vw' };
    } else if (isSmMatch) {
        cardMediaStyle = { height: '35vh',width: '35vw' };
    } else if (isMdMatch) {
        cardMediaStyle = { height: '30vh',width: '25vw' };
    }
    return (
        <Box sx={{ pt: '5px' }}>
            <Grid container spacing={2} >
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={8} >
                    <Grid container spacing={2} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' ,gap:'15px 30px'}}>
                        {dataClone.map((object, index) => {
                            return (
                                <Grid item key={object._id}>
                                    <Card
                                    sx={{
                                        '&:hover .MuiCardContent-root': {
                                            color: theme.palette.primary.light,
                                            backgroundColor: '#2F1AC4',
                                            cursor: "pointer"
                                        },
                                        '&:hover .MuiTypography-caption': {
                                            color: theme.palette.primary.main,
                                            cursor: "pointer"
                                        },
                                        '&:hover .MuiTypography-subtitle1': {
                                            color: theme.palette.primary.light,
                                            cursor: "pointer"
                                        },
                                        '&:hover': {
                                            boxShadow: "1px 1px 10px #b3b2b8"
                                        }
                                    }} 
                                    >
                                        <CardActionArea sx={{ backgroundColor: '#F6F7FB'}}>
                                            <CardMedia
                                                component="img"
                                                // style={{ width: '100%' }}
                                                image={object.display_pic}
                                                title="Card Image"
                                                sx={{ backgroundColor: '#F6F7FB', objectFit: 'contain', ...cardMediaStyle }}
                                            />
                                            <CardContent style={{display: 'flex', flexDirection:'row', flexWrap: "wrap", alignItems: 'center'}}>
                                                <div>
                                                <Typography variant="subtitle1" color="#151875" >
                                                    {object.name}
                                                </Typography>
                                                </div>
                                                <div style={{ marginLeft: 'auto' }}>
                                                    <Typography style={{ textDecoration: "line-through" }} variant="button" color="textSecondary" >
                                                        ${object.price}
                                                    </Typography>
                                                    <Typography gutterBottom variant="caption" color="secondary" style={{fontSize:'1rem', marginLeft: '10%'}} >
                                                        ${object.offer_price}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={2} >
                </Grid>
            </Grid>
        </Box>
    )
}

export default CardsPanel;