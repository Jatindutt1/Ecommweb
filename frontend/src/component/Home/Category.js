import { Avatar, Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui';

const data = [
    {
        img: "images/fashion.jpg",
        text: "fashion"
    },
    {
        img: "images/fashion.jpg",
        text: "fashion"
    },
    {
        img: "images/fashion.jpg",
        text: "fashion"
    },
    {
        img: "images/fashion.jpg",
        text: "fashion"
    },
    {
        img: "images/fashion.jpg",
        text: "fashion"
    },
    {
        img: "images/fashion.jpg",
        text: "fashion"
    },
]
const useStyles = makeStyles()((theme) => {
    return {
        categoryBox: {
            padding: "10px 0px ",
           
        },
        boredrBox: {
            border: "2px solid rgba(224,10,187,0.9976365546218487)",
            borderRadius: "50%",

        },
        mainCatrgory: {
            background: "linear-gradient(144deg, rgb(224 10 187 / 54%) 0%, rgb(8 65 140 / 89%) 93%, rgb(199 11 78 / 52%) 9940%)",
            borderRadius: "50%",
            cursor: "pointer",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            margin: "3px",
            padding: "25px",
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
                padding: "12px",

            },
            "& p": {
                transition: "0.5s",

            },

            "&:hover": {

                "& .MuiAvatar-root": {
                    transform: "translateY(-3px)"
                    ,
                },
                "& p": {
                    transform: "scale(1.2)"
                }

            },
            "& .MuiAvatar-root": {
                width: "85px",
                height: "80px",
                transition: "0.5s",

                [theme.breakpoints.down("sm")]: {
                    width: "40px !important",
                    height: "40px !important",
                }
            }
        }
    };
});

export default function Category() {
    const { classes } = useStyles();
    return (
        <Box className={classes.categoryBox}>
            <Container>
                <Typography variant='h2' textAlign="center"  >
                    Categorys
                </Typography>
                <Box my={3}>
                    <Grid container spacing={3}>
                        {data.map((value) => (
                            <Grid item xs={4} sm={3} md={2}>
                                <Box className={classes.boredrBox}>
                                    <Box className={classes.mainCatrgory}>
                                        <Avatar
                                            src={value.img}
                                        />
                                        <Typography variant='body2' style={{ color: "#fff" }}>
                                            {value.text}
                                        </Typography>

                                    </Box>
                                </Box>

                            </Grid>
                        ))}

                    </Grid>
                </Box>


            </Container>
        </Box>
    )
}
