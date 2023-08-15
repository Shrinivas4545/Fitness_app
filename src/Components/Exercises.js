import { Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {

  const allExercises = useSelector((state) => state.allExercises.allExercises);
  const [paginationCount, setPaginationCount] = useState(1);
  const selectedBodyPart = useSelector((state) => state.allExercises.selectedBodyPart);
  const searchText = useSelector((state) => state.allExercises.setSearchText);
  const [exercisesToDisplay, setExercisesToDisplay] = useState(allExercises);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const [currentExercises, setCurrentExercises] = useState([]);

  const setCurrentExercisesFn = () => {
    const indexOfLastExercise = currentPageNumber * 8;
    const indexOfFirstExercise = indexOfLastExercise - 8;
    setCurrentExercises(exercisesToDisplay.slice(indexOfFirstExercise, indexOfLastExercise));
  }

  const setExercisesToDisplayFn = () => {
    var tempArr = [];
    if (searchText === "" && selectedBodyPart === "") {
      setExercisesToDisplay(allExercises);
      setPaginationCount(Math.ceil(allExercises.length / 8));
      setCurrentPageNumber(1);
      handleChange();
      return;
    } else if (selectedBodyPart !== "") {
      if (selectedBodyPart === "all") {
        setExercisesToDisplay(allExercises);
        setPaginationCount(Math.ceil(allExercises.length / 8));
        setCurrentPageNumber(1);
        handleChange();
        return;
      }
      allExercises.map((exercise) => {
        if (exercise.bodyPart === selectedBodyPart) {
          tempArr.push(exercise);
        }
      });
    } else if (searchText !== "") {
      if (searchText === "all") {
        setExercisesToDisplay(allExercises);
        setPaginationCount(Math.ceil(allExercises.length / 8))
        setCurrentPageNumber(1);
        handleChange();
        return;
      }
      allExercises.map((exercise) => {
        if (
          exercise.bodyPart === searchText ||
          exercise.equipment === searchText ||
          exercise.target === searchText ||
          exercise.name === searchText
        ) {
          tempArr.push(exercise);
        }
      });
    }
    setExercisesToDisplay(tempArr);
    setPaginationCount(Math.ceil(tempArr.length / 8))
    setCurrentPageNumber(1);
    handleChange();
  };

  const handleChange = (event, value = 1) => {
    setCurrentPageNumber(value);
    setCurrentExercisesFn();

    window.scrollTo({ top: 1060, behavior: "smooth" })
  };

  useEffect(() => {
    setCurrentExercisesFn();
  }, [exercisesToDisplay, currentPageNumber])

  useEffect(() => {
    setExercisesToDisplayFn();
  }, [selectedBodyPart, searchText, allExercises]);

  return (
    <Grid container spacing={2} justifyContent={"center"} mt={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Showing Results...</Typography>
      </Grid>
      {currentExercises.length !== 0 &&
        currentExercises.map((exercise) => {
          return <ExerciseCard exercise={exercise} key={exercise.id} />;
        })}
      <Grid item xs={12} mt={2} mb={2} display={'flex'} justifyContent={'center'}>
        <Pagination count={paginationCount} variant="outlined" page={currentPageNumber} shape="rounded" onChange={handleChange} color="primary" size="small" />
      </Grid>
    </Grid>
  );
};

export default Exercises;
