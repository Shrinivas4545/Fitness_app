import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import bodyPart from '../assets/icons/body-part.png'
import target from '../assets/icons/target.png'
import equipment from '../assets/icons/equipment.png'

const Detail = () => {

  const exerciseDetail = useSelector(state => state.allExercises.exerciseDetail)
  console.log(exerciseDetail)


  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }} mt={-5}>
      <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, width: { lg: '80%' }, backgroundColor: "##fff"}}>
        <Stack sx={{ width: { sm: '55%' } }}>
          <img src={exerciseDetail.gifUrl} alt='exericse' />
        </Stack>
        <Stack display={'flex'} justifyContent={"center"} sx={{ width: { sm: '45%' } }} m={1}>
          <Stack>
            <Typography variant='h4' mb={2} textTransform={'capitalize'}>{exerciseDetail.name}</Typography>
            <Typography variant='subtitle1' mb={2}>Exercises keep you strong. {exerciseDetail.name} {` `}
              is on of the best exercises to target your {exerciseDetail.target}.
              It will help you improve your mood and gain energy.
            </Typography>
          </Stack>
          <Stack direction={'row'} mb={2}>
            <Button variant='contained' sx={{ borderRadius: '50%', backgroundColor: '#d7ccc8' }}>
              <img src={bodyPart} alt='BodyPart' />
            </Button>
            <Typography textTransform={'capitalize'} ml={3} mt={2}>{exerciseDetail.bodyPart}</Typography>
          </Stack>
          <Stack direction={'row'} mb={2}>
            <Button variant='contained' sx={{ borderRadius: '50%', backgroundColor: '#d7ccc8' }}>
              <img src={target} alt='BodyPart' />
            </Button>
            <Typography textTransform={'capitalize'} ml={3} mt={2}>{exerciseDetail.target}</Typography>
          </Stack>
          <Stack direction={'row'} mb={2}>
            <Button variant='contained' sx={{ borderRadius: '50%', backgroundColor: '#d7ccc8' }}>
              <img src={equipment} alt='BodyPart' />
            </Button>
            <Typography textTransform={'capitalize'} ml={3} mt={2}>{exerciseDetail.equipment}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Detail