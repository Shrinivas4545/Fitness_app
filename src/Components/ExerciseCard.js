import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setExerciseDetail } from '../Redux/Exercises/actionExercises'
import { useNavigate } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    // console.log("exercises", exercise)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setExerciseDetail(exercise));
        navigate(`/exercise/${exercise.id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4} type={Button} onClick={() => handleClick()}>
            <Stack sx={{ borderRadius: '10px', backgroundColor: "white", height: "400px", '&:hover': { transform: 'scale(1.05,1.05)' }, transition: "transform 1s", borderStyle: 'outset' }} >
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <img src={exercise.gifUrl} loading='lazy' alt='exercises' style={{ width: "95%", height: "300px", borderRadius: '5px' }} />
                </Box>
                <Stack direction={'row'} ml={"50px"} mt={2}>
                    <Box sx={{ backgroundColor: "#64ffda", padding: "5px", borderRadius: '10px', display: 'flex', justifyContent: 'center' }}>
                        <Typography textTransform={'capitalize'}>{exercise.target}</Typography>
                    </Box>
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                    <Box sx={{ width: "70%", justifyContent: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}  >
                        <Typography variant='h6' textAlign={'center'} textTransform={'capitalize'} fontWeight={'700'}>{exercise.name}</Typography>
                    </Box>
                </Box>
            </Stack>
        </Grid>
    )
}

export default ExerciseCard