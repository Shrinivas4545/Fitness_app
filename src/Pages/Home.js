import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'

const Home = () => { 
    return (
            <Box m={2}>
                <HeroBanner />
                <SearchExercises />
                <Exercises />
            </Box>
    )
}

export default Home