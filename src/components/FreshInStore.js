import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function FreshInStore({ FreshProducts }) {
  const theme = useTheme();
  // console.log(data.length);
  const isBelow300DownMatch = useMediaQuery(theme.breakpoints.down("300"));
  const isBelow350DownMatch = useMediaQuery(theme.breakpoints.down("350"));
  const isXsDownMatch = useMediaQuery(theme.breakpoints.down("500"));
  const isSmMatch = useMediaQuery(theme.breakpoints.between("500", "730"));
  const isMdMatch = useMediaQuery(theme.breakpoints.between("730", "900"));
  const isBet900_1000DownMatch = useMediaQuery(
    theme.breakpoints.between("900", "1000")
  );
  const isBet1000_1200Match = useMediaQuery(
    theme.breakpoints.between("1000", "1200")
  );
  const isLgUpMatch = useMediaQuery(theme.breakpoints.up("1200"));

  let cardMediaStyle = { maxheight: "11rem", maxwidth: "7rem" };
  let cardStyle = { height: "13rem", width: "9rem" };
  let cardGap = { gap: "15px 30px" };
  if (isBet1000_1200Match) {
    cardMediaStyle = { maxheight: "9rem", maxwidth: "8rem" };
    cardStyle = { height: "12.5rem", width: "9rem" };
  } else if (isBet900_1000DownMatch) {
    cardMediaStyle = { maxheight: "8rem", maxwidth: "7rem" };
    cardStyle = { height: "11.5rem", width: "8rem" };
  } else if (isLgUpMatch) {
    cardMediaStyle = { maxheight: "11rem", maxwidth: "10rem" };
    cardStyle = { height: "14rem", width: "11rem" };
  } else if (isBelow300DownMatch) {
    cardMediaStyle = { maxheight: "11rem", maxwidth: "10rem" };
    cardStyle = { height: "14rem", width: "11rem" };
  } else if (isBelow350DownMatch) {
    cardMediaStyle = { maxheight: "6rem", maxwidth: "5rem" };
    cardStyle = { height: "9.5rem", width: "6rem" };
  } else if (isXsDownMatch) {
    cardMediaStyle = { maxheight: "7rem", maxwidth: "6rem" };
    cardStyle = { height: "10.5rem", width: "7rem" };
} else if (isMdMatch) {
    cardMediaStyle = { maxheight: "8rem", maxwidth: "7rem" };
    cardStyle = { height: "11.5rem", width: "8rem" };
  } else if (isSmMatch) {
    cardMediaStyle = { maxheight: "10rem", maxwidth: "10rem" };
    cardStyle = { height: "14rem", width: "11rem" };
  }
  return (
    <Grid container>
      <Grid item xs={1} sm={2} md={2} lg={2}></Grid>
      <Grid
        item
        xs={10}
        sm={8}
        md={8}
        lg={9}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          ...cardGap,
        }}
      >
        {FreshProducts.filter((filterdObject, index) => index < 4).map(
          (object) => {
            return (
              <Card
                key={object._id}
                sx={{
                  "&:hover .MuiCardContent-root": {
                    color: theme.palette.primary.light,
                    backgroundColor: theme.palette.secondary.main,
                    cursor: "pointer",
                  },
                  "&:hover .MuiTypography-caption": {
                    color: theme.palette.text.tertiary,
                    // backgroundColor: '#2F1AC4',
                    cursor: "pointer",
                  },
                  "&:hover": {
                    boxShadow: "1px 1px 10px #b3b2b8",
                  },
                  ...cardStyle,
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
                      backgroundColor: "#F6F7FB",
                      objectFit: "contain",
                      aspectRatio: "10/9",
                      ...cardMediaStyle,
                    }}
                  />
                  <CardContent
                    style={{
                      padding: "5px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      style={{ textAlign: "center" }}
                      sx={{ fontSize: "clamp(0.8rem,5vw,0.8rem)" }}
                      variant="h6"
                      color="inherit"
                    >
                      {object.name}
                    </Typography>
                    <Typography
                      style={{
                        textDecoration: "line-through",
                        textAlign: "center",
                      }}
                      sx={{ fontSize: "clamp(0.7rem,3vw,0.8rem)" }}
                      color="textSecondary"
                    >
                      ${object.price}
                    </Typography>
                    <Typography
                      style={{ textAlign: "center" }}
                      sx={{ fontSize: "clamp(0.8rem,3vw,0.9rem)" }}
                      gutterBottom
                      variant="caption"
                      color="secondary"
                    >
                      ${object.offer_price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          }
        )}
      </Grid>
      <Grid item xs={1} sm={2} md={2} lg={2}></Grid>
    </Grid>

    //   <Box sx={{ pt: "5px" }}>
    //     <Grid container>
    //       <Grid item xs={0.5} md={2} lg={2.5}></Grid>
    //       <Grid item xs={11} md={8} lg={7}>
    //         <Grid
    //           container
    //           spacing={0}
    //           style={{
    //             display: "flex",
    //             flexWrap: "wrap",
    //             justifyContent: "center",
    //             ...cardGap,
    //           }}
    //         >
    //           {dataClone.map((object, index) => {
    //             return (
    //               <Grid item key={object._id}>
    //                 <Card
    //                   sx={{
    //                     "&:hover .MuiCardContent-root": {
    //                       color: theme.palette.primary.light,
    //                       backgroundColor: theme.palette.secondary.main,
    //                       cursor: "pointer",
    //                     },
    //                     "&:hover .MuiTypography-caption": {
    //                       color: theme.palette.text.tertiary,
    //                       cursor: "pointer",
    //                     },
    //                     "&:hover .MuiTypography-subtitle1": {
    //                       color: theme.palette.primary.light,
    //                       cursor: "pointer",
    //                     },
    //                     "&:hover": {
    //                       boxShadow: "1px 1px 10px #b3b2b8",
    //                     },
    //                     ...cardStyle,
    //                   }}
    //                 >
    //                   <CardActionArea
    //                     sx={{
    //                       backgroundColor: "#F6F7FB",
    //                       "& .MuiCardContent-root": {
    //                         padding: "8px",
    //                       },
    //                     }}
    //                   >
    //                     <CardMedia
    //                       component="img"
    //                       // style={{ width: '100%' }}
    //                       image={object.display_pic}
    //                       title="Card Image"
    //                       sx={{
    //                         aspectRatio: "10/9",
    //                         backgroundColor: "#F6F7FB",
    //                         objectFit: "contain",
    //                         ...cardMediaStyle,
    //                       }}
    //                     />
    //                     <CardContent
    //                       style={{
    //                         display: "flex",
    //                         flexDirection: "column",
    //                         flexWrap: "nowrap",
    //                         alignItems: "center",
    //                       }}
    //                       sx={{
    //                         "& .MuiCardContent-root": {
    //                           padding: "8px",
    //                         },
    //                       }}
    //                     >
    //                       <div>
    //                         <Typography
    //                           variant="subtitle1"
    //                           color="#151875"
    //                           sx={{ fontSize: "clamp(0.8rem,5vw,0.8rem)" }}
    //                         >
    //                           {object.name}
    //                         </Typography>
    //                       </div>
    //                       <div>
    //                         <Typography
    //                           style={{
    //                             textAlign: "center",
    //                             textDecoration: "line-through",
    //                           }}
    //                           sx={{ fontSize: "clamp(0.7rem,2vw,0.8rem)" }}
    //                           variant="button"
    //                           color="textSecondary"
    //                         >
    //                           ${object.price}
    //                         </Typography>
    //                         <Typography
    //                           gutterBottom
    //                           variant="caption"
    //                           color="secondary"
    //                           sx={{ fontSize: "clamp(0.8rem,2vw,0.9rem)" }}
    //                           style={{ marginLeft: "10px" }}
    //                         >
    //                           ${object.offer_price}
    //                         </Typography>
    //                       </div>
    //                     </CardContent>
    //                   </CardActionArea>
    //                 </Card>
    //               </Grid>
    //             );
    //           })}
    //         </Grid>
    //       </Grid>
    //       <Grid item xs={0.5} md={2} lg={2.5}></Grid>
    //     </Grid>
    //   </Box>
  );
}

export default FreshInStore;
