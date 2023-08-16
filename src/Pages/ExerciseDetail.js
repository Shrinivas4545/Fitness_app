import React from 'react'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { Box } from '@mui/material'

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      {/* <ExerciseVideos /> */}
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail