import { combineReducers } from 'redux'
import exercisesReducer from './Exercises/reducerExcercises'

const rootReducer = combineReducers({
    allExercises: exercisesReducer
})

export default rootReducer