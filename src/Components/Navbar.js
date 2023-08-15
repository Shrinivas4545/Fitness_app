import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Stack, Typography } from '@mui/material'


const Navbar = () => {
    return (
        <Stack direction={'row'} pt={0} pl={1} pb={1} position={'fixed'}
            sx={{
                gap: {
                    xs: "40px", md:"130px"
                },
                width: '100%',
                top: '0px',
                position: 'sticky', // Change this
                zIndex: 100, // Add this
                backgroundColor: 'white', // Add a background color
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)'
            }}>
            <a href='/'>
                <img
                    style={{ width: '48px', height: '48px', marginLeft: '20px' }}
                    src={Logo}
                    alt='logo'
                />
            </a>
            <Stack direction={'row'} spacing={3} mt={2}>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>
                    <Typography variant='h6'>Home</Typography>
                </a>
                <a href='#' style={{textDecoration: 'none', color: 'black'}}>
                    <Typography variant='h6'>Exercises</Typography>
                </a>
            </Stack>

        </Stack>
    )
}

export default Navbar