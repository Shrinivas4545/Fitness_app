import {
    SELECT_BODY_PART,
    SET_ALL_EXERCISES,
    SET_BODY_PARTS,
    SET_EXERCISE_DETAIL,
    SET_SEARCH_TEXT,
    SET_THEME,
    UNSELECT_BODY_PART,
  } from "./typeExercises";
  
  const initialState = {
    allExercises: [],
    bodyParts: [],
    selectedBodyPart: "",
    setSearchText: "",
    exerciseDetail: {},
    theme: "",
  };
  
  const exercisesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ALL_EXERCISES:
        return {
          ...state,
          allExercises: action.payload,
        };
  
      case SET_BODY_PARTS:
        return {
          ...state,
          bodyParts: action.payload,
        };
  
      case SELECT_BODY_PART:
        return {
          ...state,
          selectedBodyPart: action.payload,
        };
  
      case SET_SEARCH_TEXT:
        return {
          ...state,
          setSearchText: action.payload,
        };
  
      case UNSELECT_BODY_PART:
        return {
          ...state,
          selectedBodyPart: "",
        };
  
      case SET_EXERCISE_DETAIL:
        return {
          ...state,
          exerciseDetail: action.payload,
        };
  
      case SET_THEME:
        return {
          ...state,
          theme: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default exercisesReducer;
  