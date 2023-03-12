import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import Slider from "react-slick";
// import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      background: "#6ab185",
      padding: "70px 0px 150px",
      clipPath: " polygon(0 0, 100% 0, 100% 96%, 0 79%)"
    },
    imgBox: {
      maxWidth: "400px", width: "100%",
      [theme.breakpoints.down("sm")]:{
        maxWidth: "250px",
      }
    }
  };
});




// styling through variable
// const BannerBox = styled(Box)(({ theme }) => ({
//   background: "#6ab185",
//   padding: "70px 0px 150px",
//   clipPath: " polygon(0 0, 100% 0, 100% 96%, 0 79%)"
// }))

export default function Banner() {
  const { classes } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    transitions:true,
  };
  return (

    <Box className={classes.mainBox}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant='h1'>
              A Huge Market Palce Where You Buy your favorite Things.
            </Typography>
            <Box my={2}>
            <Typography variant='body1'>
              A Huge Market Palce Where You Buy your Favraite Things.
            </Typography>
            </Box>
            
            <Button variant='contained'>
              Explore
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Slider {...settings}>
              <Box align="center" >
                <img src='images/bag.png' className={classes.imgBox} alt='bag' />
              </Box>
              <Box align="center">
                <img src='images/head.png'className={classes.imgBox}alt='head' />
              </Box>
              <Box align="center">
                <img src='images/chair.png' className={classes.imgBox} alt='chair' />
              </Box>
              {/* <Box>
                <img src='images/shose.png'   alt='shose'/>
              </Box> */}
            </Slider>
          </Grid>
        </Grid>

      </Container>



    </Box>

  )
}
