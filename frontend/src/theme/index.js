import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {

                
                    background: "linear-gradient(144deg, rgba(224,10,187,0.9976365546218487) 0%, rgba(8,65,140,1) 93%, rgba(199,11,78,1) 9940%)",
                    transition:"0.5s",
                    "&:hover": {
                        transform:"translateY(-3px)",
                    
                        background: "linear-gradient(207deg, rgba(224,10,187,0.9976365546218487) 0%, rgba(8,65,140,1) 93%, rgba(199,11,78,1) 9940%)",

                    }
                }
            }

        }
    },
    typography: {
        h1: {
            fontSize: "50px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "600",
            "@media (max-width: 767px)": {
                fontSize: "35px",
            },
        },
        h2: {
            fontSize: "40px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "600",
            "@media (max-width: 767px)": {
                fontSize: "30px",
            },
        },
        h5: {
            fontSize: "20px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "500",
            "@media (max-width: 767px)": {
                fontSize: "17px",
            },
        },
        body1: {
            fontFamily: "'Roboto', sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            "@media (max-width: 767px)": {
                fontSize: "14px",
            },

        },
        body2: {
            fontFamily: "'Roboto', sans-serif",
            fontSize: "14px",
            fontWeight: "400", "@media (max-width: 767px)": {
                fontSize: "12px",
            },

        }
    },
});




export default theme;