import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
const OfferOfTheDay = ({ cardObject, cardMediaStyle }) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        '&:hover .MuiPaper-root': {
          boxShadow: '-5px 5px  #9877E7', // Add a box shadow on hover
        }
      }}>
        <Card key={cardObject._id}
          sx={{
            // '&:hover .MuiBox-root': {
            //   color: theme.palette.primary.light,
            //   backgroundColor: '#2F1AC4',
            //   cursor: "pointer"
            // },
            // '&:hover .MuiTypography-caption': {
            //   color: theme.palette.primary.main,
            //   // backgroundColor: '#2F1AC4',
            //   cursor: "pointer"
            // },
            // flex: 1,
            // [theme.breakpoints.up('md')]: {
            //   flex: 0.6,
            // },
          }}
          style={{
            height: '100%', width: '100%',
            // paddingBottom: '100%%',
            maxHeight: '200px',
            maxWidth: '200px',
            borderRadius: '50%', // Creates a circular background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s', // Add a transition for smooth hover effect
          }}
        >
          <CardActionArea style={{
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#F6F7FB',
            objectFit: 'contain'
          }}>
            <CardMedia
              component="img"
              style={{
                width: '100%', height: '100%',
                textAlign: 'center',
              }}
              image={cardObject.display_pic}
              title="Card Image"
              sx={{
                backgroundColor: '#F6F7FB', objectFit: 'contain'
              }}
            />
            {/* <CardContent style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="h6" color="inherit">
                {cardObject.name}
              </Typography>
              <Typography style={{ textDecoration: "line-through", textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="textSecondary">
                ${cardObject.price}
              </Typography>
              <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} gutterBottom variant="caption" color="secondary">
                ${cardObject.offer_price}
              </Typography>
            </CardContent> */}
          </CardActionArea>
        </Card>
        <br />
        <Box style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="h6" color="#151875">
            {cardObject.name}
          </Typography>
          <Typography style={{ textDecoration: "line-through", textAlign: "center" }} variant="caption" color="textSecondary">
            ${cardObject.price}
          </Typography>
          <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="caption" color="secondary">
            ${cardObject.offer_price}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default OfferOfTheDay;