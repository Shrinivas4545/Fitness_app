import { Box, Grid, Typography, Button, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = () => {
  const allExercises = useSelector((state) => state.allExercises.allExercises);
  const currentExecise = useSelector(
    (state) => state.allExercises.exerciseDetail
  );
  const [similarExercises, setSimilarExercises] = useState([]);
  const [paginationCount, setPaginationCount] = useState(1);
  const [currentPageExercises, setCurrentPageExercises] = useState([]);

  const generateSimilarExercises = () => {
    let tempArr = [];
    allExercises.map((exercise) => {
      exercise.bodyPart === currentExecise.bodyPart &&
        exercise.name !== currentExecise.name &&
        tempArr.push(exercise);
    });

    setSimilarExercises(tempArr);
    setPaginationCount(Math.ceil(tempArr.length / 8));
  };

  useEffect(() => {
    handleChange();
  }, [similarExercises]);

  useEffect(() => {
    generateSimilarExercises();
    // console.log(similarExercises);
    // handleChange();
  }, [currentExecise, allExercises]);

  const handleChange = (event, value = 1) => {
    const endIndexNumber = value * 8;
    const startIndexNumber = endIndexNumber - 8;

    setCurrentPageExercises(
      similarExercises.slice(startIndexNumber, endIndexNumber)
    );

    if (window.innerWidth < 600) {
      window.scrollTo({ top: 710, behavior: "smooth" });
    } else if (window.innerWidth >= 600) {
      window.scrollTo({ top: 610, behavior: 'smooth' })
    }

  };

  return (
    <Box mt={2}>
      <hr />
      <Typography variant="h6" ml={1}>
        Similar Exercises
      </Typography>
      <Grid container spacing={2} justifyContent={"center"} mt={-1}>
        {currentPageExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            type={Button}
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        mt={2}
        mb={2}
        display={"flex"}
        justifyContent={"center"}
      >
        <Pagination
          count={paginationCount}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Grid>
    </Box>
  );
};

export default SimilarExercises;
