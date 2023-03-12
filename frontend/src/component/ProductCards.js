import { Avatar, Divider, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { BsFillCartFill } from 'react-icons/bs';

const useStyles = makeStyles()((theme) => {
    return {
        productcradBox: {
            background: "#f7eeee",
            borderRadius: "10px",
           
            border: "1px solid grey",
            transition:"0.5s",
            "&:hover":{
             transform:"translateY(-5px)",
             boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
             "& .MuiAvatar-root":{
                transform:"scale(1.1)"
             }
            },      
             "& .productBox": {
            borderRadius: "10px 10px 0px 0px",

                background: "linear-gradient(144deg, rgba(224,10,187,0.9976365546218487) 0%, rgba(8,65,140,1) 93%, rgba(199,11,78,1) 9940%)",
                padding: "100px 0px",
                clipPath: " polygon(0 0, 100% 0, 100% 96%, 0 79%)"

            },
            "& .avatarBox":{
                "display": "flex",
                "justifyContent": "center",
                "marginTop": "-170px",
                "borderRadius": "5px",
                overflow:"hidden",
                
                "width": "200px",
                    "height": "200px",
                "& .MuiAvatar-root":{
                    "width": "200px",
                    transition:"0.5s",
                    "height": "200px",
                    "borderRadius": "5px"
                }
            },
            "& .textBox":{
                padding:"25px 10px 10px "
            },
            "& .displaypriceBox":{
                "display": "flex",
                "justifyContent": "space-between",
                alignItems:"center",
            }
        },

    };
});

export default function ProductCards() {
    const { classes } = useStyles();

    return (
        <Box className={classes.productcradBox}>
            <Box className="productBox">

            </Box>
            <Box align="center">
            <Box className="avatarBox">
                <Avatar
                   src="images/fashion.jpg"/>
                 
                
            </Box>
            </Box>
            
            <Box className="textBox">
                <Typography variant='h5' >
                    T-shirt Men
                </Typography>
                <Box my={1}>
                    <Divider style={{background:"grey"}}/>
                </Box>
                <Box className="displaypriceBox">
                    <Box>
                        <Typography variant='body2'>
                            Price:
                        </Typography>
                        <Typography variant='body2'>
                            1400
                        </Typography>
                    </Box>
                    <IconButton>
                        <BsFillCartFill style={{color:"#0b418d"}}/>
                    </IconButton>

                </Box>
            </Box>


        </Box>
    )
}
