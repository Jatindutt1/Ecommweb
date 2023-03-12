import React from 'react'
import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {add , sub} from "../reducers/Sslice"
import { useSelector } from 'react-redux';


export default function Addfunc() {
    const cartvalue =useSelector((store)=>store.cart)
    const dispatach = useDispatch();
    const addfunction=  ()=>{
        dispatach(add())
    }
    const subfunction=  ()=>{
        dispatach(sub())
    }
  return (
    <div>
          <Box mt={6} align="center">
        <h1>
{cartvalue}
        </h1>

        <Button onClick={()=>addfunction()} variant='contained' color='primary'>
          add
        </Button>&nbsp;&nbsp;
        <Button onClick={()=>subfunction()} variant='contained' color='primary'>
          sub
        </Button>
      </Box>
    </div>
  )
}
