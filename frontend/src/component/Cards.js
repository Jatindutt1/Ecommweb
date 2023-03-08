import { Box, Button, Container, TextField } from '@mui/material'
import React from 'react'

export default function Cards() {
    return (
        <Box >
            <Container>
            <Box>
                <h5>name</h5>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </Box>
            <Box>
                <h5>name</h5>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </Box>
            <Box>
                <h5>name</h5>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </Box>
            <Box>
                <h5>name</h5>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </Box>
            <Box>
                <h5>name</h5>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </Box>
            <Button>
                Submit
            </Button>
            </Container>
        </Box>
    )
}
