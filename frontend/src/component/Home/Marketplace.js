import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import ProductCards from '../ProductCards';

const useStyles = makeStyles()((theme) => {
    return {
        marketBox: {
            padding: "40px 0px"
        },

    };
});
const data = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]


export default function Marketplace() {
    const { classes } = useStyles();

    return (
        <Box className={classes.marketBox}>
            <Container>
                <Typography variant='h2' textAlign="center">
                    Top Products
                </Typography>
                <Box mt={4}>
                    <Grid container spacing={3}>
                        {data.map((value) => (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <ProductCards />

                            </Grid>
                        ))}

                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}
