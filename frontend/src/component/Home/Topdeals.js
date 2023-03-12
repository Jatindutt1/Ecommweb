import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Slider from "react-slick";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        topdealBox: {
            padding: "10px 0px"
        },
        "& .imgBox":{
            maxWidth:"100%",
            width:"auto"
        }

    };
});

export default function Topdeals() {
    const { classes } = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        transitions: true,
    };
    return (
        <Box className={classes.topdealBox}>
            <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                    <Box>
                        <Slider {...settings}>
                            <Box align="center" >
                                <img src='images/bag.png' className={classes.imgBox} alt='bag' />
                            </Box>
                            <Box align="center">
                                <img src='images/head.png' className={classes.imgBox} alt='head' />
                            </Box>
                            <Box align="center">
                                <img src='images/chair.png' className={classes.imgBox} alt='chair' />
                            </Box>
                            {/* <Box>
                <img src='images/shose.png'   alt='shose'/>
              </Box> */}
                        </Slider>

                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}  >
                            <Box>
                                <img src="images/banner3.jpg" className='imgBox' width="100%"  alt='head'/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <img src="images/banner1.jpg" width="100%" alt='head' />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <img src="images/banner2.png" width="100%" alt='head' />
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            </Container>
        </Box>
    )
}
