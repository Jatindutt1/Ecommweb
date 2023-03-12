import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { Avatar } from '@mui/material';


export default function ButtonAppBar() {
  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

          

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ecomm
            </Typography>

            <Button color="inherit" onClick={() => navigate("/home")} >Home</Button>
            <Button color="inherit" onClick={() => navigate("/home")} >Market</Button>
            <Box>
              <Avatar/>
            </Box>
            </Box>
          </Container>


        </Toolbar>
      </AppBar>
    </Box>
  );
}
