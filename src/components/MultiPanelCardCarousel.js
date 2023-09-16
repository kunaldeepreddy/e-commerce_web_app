import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
const MultiPanelCardCarousel = ({cardObject, cardMediaStyle}) => {
  const theme = useTheme();
    return (
      <>
        <Card key={cardObject._id}
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
            flex: 1,
            [theme.breakpoints.up('md')]: {
              flex: 0.6,
            }
          }}
          style={{ height: '100%', width: '100%', maxWidth: '200px' }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              style={{ width: '100%' }}
              image={cardObject.display_pic}
              title="Card Image"
              sx={{
                backgroundColor: '#F6F7FB', objectFit: 'contain', ...cardMediaStyle
              }}
            />
            <CardContent style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="h6" color="inherit">
                {cardObject.name}
              </Typography>
              <Typography style={{ textDecoration: "line-through", textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="textSecondary">
                ${cardObject.price}
              </Typography>
              <Typography style={{ textAlign: "center" }} sx={{ typography: { sm: 'body1', xs: 'body2' } }} gutterBottom variant="caption" color="secondary">
                ${cardObject.offer_price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
export default MultiPanelCardCarousel;