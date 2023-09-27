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

function CardsPanel({ data, actualDataLength }) {
  const theme = useTheme();
  let dataClone = [...data];
  if (dataClone.length > actualDataLength) {
    dataClone.splice(actualDataLength);
  }
  // console.log(data.length);
  const isBelow300DownMatch = useMediaQuery(theme.breakpoints.down("300"));
  const isBelow350DownMatch = useMediaQuery(theme.breakpoints.down("350"));
  const isXsDownMatch = useMediaQuery(theme.breakpoints.down("500"));
  const isSmMatch = useMediaQuery(theme.breakpoints.between("500", "700"));
  const isMdMatch = useMediaQuery(theme.breakpoints.between("700", "900"));
  const isLgUpMatch = useMediaQuery(theme.breakpoints.up("900"));
  let cardMediaStyle = { maxheight: "11rem", maxwidth: "7rem" };
  let cardStyle = { height: "13rem", width: "9rem" };
  let cardGap = { gap: "15px 30px" };
  if (isLgUpMatch) {
    cardMediaStyle = { maxheight: "11rem", maxwidth: "10rem" };
    cardStyle = { height: "14rem", width: "11rem" };
    cardGap = { gap: "20px 30px" };
  } else if (isBelow300DownMatch) {
    cardMediaStyle = { maxheight: "10rem", maxwidth: "9rem" };
    cardStyle = { height: "13rem", width: "10rem" };
  } else if (isBelow350DownMatch) {
    cardMediaStyle = { maxheight: "6rem", maxwidth: "5rem" };
    cardStyle = { height: "9rem", width: "6rem" };
  } else if (isXsDownMatch) {
    cardMediaStyle = { maxheight: "7rem", maxwidth: "6rem" };
    cardStyle = { height: "10rem", width: "7rem" };
  } else if (isSmMatch) {
    cardMediaStyle = { maxheight: "8rem", maxwidth: "7rem" };
    cardStyle = { height: "11rem", width: "8rem" };
  } else if (isMdMatch) {
    cardMediaStyle = { maxheight: "10rem", maxwidth: "9rem" };
    cardStyle = { height: "13rem", width: "10rem" };
  }
  return (
    <Box sx={{ pt: "5px" }}>
      <Grid container>
        <Grid item xs={0.5} md={2} lg={2.5}></Grid>
        <Grid item xs={11} md={8} lg={7}>
          <Grid
            container
            spacing={0}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              ...cardGap,
            }}
          >
            {dataClone.map((object, index) => {
              return (
                <Grid item key={object._id}>
                  <Card
                    sx={{
                      "&:hover .MuiCardContent-root": {
                        color: theme.palette.primary.light,
                        backgroundColor: theme.palette.secondary.main,
                        cursor: "pointer",
                      },
                      "&:hover .MuiTypography-caption": {
                        color: theme.palette.text.tertiary,
                        cursor: "pointer",
                      },
                      "&:hover .MuiTypography-subtitle1": {
                        color: theme.palette.primary.light,
                        cursor: "pointer",
                      },
                      "&:hover": {
                        boxShadow: "1px 1px 10px #b3b2b8",
                      },
                      ...cardStyle,
                    }}
                  >
                    <CardActionArea
                      sx={{
                        backgroundColor: "#F6F7FB",
                        "& .MuiCardContent-root": {
                          padding: "8px",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        // style={{ width: '100%' }}
                        image={object.display_pic}
                        title="Card Image"
                        sx={{
                          aspectRatio: "10/9",
                          backgroundColor: "#F6F7FB",
                          objectFit: "contain",
                          ...cardMediaStyle,
                        }}
                      />
                      <CardContent
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexWrap: "nowrap",
                          alignItems: "center",
                        }}
                        sx={{
                          "& .MuiCardContent-root": {
                            padding: "8px",
                          },
                        }}
                      >
                        <div>
                          <Typography
                            variant="subtitle1"
                            color="#151875"
                            sx={{ fontSize: "clamp(0.8rem,5vw,0.8rem)" }}
                          >
                            {object.name}
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            style={{
                              textAlign: "center",
                              textDecoration: "line-through",
                            }}
                            sx={{ fontSize: "clamp(0.7rem,2vw,0.8rem)" }}
                            variant="button"
                            color="textSecondary"
                          >
                            ${object.price}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="caption"
                            color="secondary"
                            sx={{ fontSize: "clamp(0.8rem,2vw,0.9rem)" }}
                            style={{ marginLeft: "10px" }}
                          >
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
        <Grid item xs={0.5} md={2} lg={2.5}></Grid>
      </Grid>
    </Box>
  );
}

export default CardsPanel;
