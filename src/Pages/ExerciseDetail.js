import React from 'react'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useSelector } from 'react-redux'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ExerciseDetail = () => {
  const currentTheme = useSelector((state) => state.allExercises.theme)
  return (
    <ThemeProvider theme={(currentTheme === "dark-theme") && theme}>
      <CssBaseline />
      <Box m={2}>
        <Detail />
        {/* <ExerciseVideos /> */}
        <SimilarExercises />
      </Box>
    </ThemeProvider>
  )
}

export default ExerciseDetail