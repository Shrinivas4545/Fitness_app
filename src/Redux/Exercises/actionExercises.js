import {
    SELECT_BODY_PART,
    SET_ALL_EXERCISES,
    SET_BODY_PARTS,
    SET_EXERCISE_DETAIL,
    SET_SEARCH_TEXT,
    SET_THEME,
    UNSELECT_BODY_PART,
  } from "./typeExercises";
  
  export const setAllExercises = (exercises) => {
    return {
      type: SET_ALL_EXERCISES,
      payload: exercises,
    };
  };
  
  export const setBodyParts = (bodyParts) => {
    return {
      type: SET_BODY_PARTS,
      payload: bodyParts,
    };
  };
  
  export const selectBodyPart = (bodyPart) => {
    return {
      type: SELECT_BODY_PART,
      payload: bodyPart,
    };
  };
  
  export const setSearchText = (searchText) => {
    return {
      type: SET_SEARCH_TEXT,
      payload: searchText,
    };
  };
  
  export const unselectBodyPart = () => {
    return {
      type: UNSELECT_BODY_PART,
    };
  };
  
  export const setExerciseDetail = (exercise) => {
    return {
      type: SET_EXERCISE_DETAIL,
      payload: exercise,
    };
  };
  
  export const setTheme = (theme) => {
    return {
      type: SET_THEME,
      payload: theme,
    };
  };
  