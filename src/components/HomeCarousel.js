import { Container, Grid, Box, Typography, useTheme, IconButton, InputAdornment, Button, TextField } from "@mui/material";
//  import sofaImage from '../../public/assets/image 32.png'
import lampImage from '../assets/image 32.png'

const HomeCarousel = (props) => {
  const theme = useTheme();
  return (
    <Grid container sx={{ height: '20%', width: '100vw', minHeight: '20%', backgroundColor: "#F2F0FF", paddingTop: '4px', paddingBottom: '3px' }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
        <img style={{
          maxWidth: '100%',
          // maxHeight: '50vh',
          // width: '100%',
          height: 'auto',
          paddingTop: 0
        }}
          src={lampImage} alt="lamp Image" />
        {/* </div> */}
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ paddingTop: "20%" }}>
          <Typography variant="caption" color={theme.palette.primary.main} sx={{fontSize: {
            lg: 30,
            md: 20,
            sm: 15
          }}}>Best Furniture For Your Home....</Typography>
          <Typography variant="h5" color="black" sx={{fontSize: {
            lg: 30,
            md: 20,
            sm: 15,
            xs: 15
          }, fontWeight: 700, paddingLeft: '10%' }}>New Furniture Collection Trends in 2023</Typography>
          <Typography variant="body2" color="#8A8FB9" x={{fontSize: {
            lg: 30,
            md: 20,
            sm: 15
          }}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography><br />
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
          }}>Shop Now</Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img src={props.image} alt="funrniture Image" style={{
          // objectFit: "cover"
          maxWidth: '100%',
          height: 'auto',
        }} />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
export default HomeCarousel;



