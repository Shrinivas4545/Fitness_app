import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";
// import Darkmode from "./Theme/Darkmode";
import './Theme/theme.css'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAllExercises, setBodyParts } from "./Redux/Exercises/actionExercises";

function App() {
  const dispatch = useDispatch();

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const fetchAllExercises = async () => {
    const bodyParts = ["all"];
    try {
      debugger
      //fetch serializedData from localStorage
      //check if data is in localStorage
      if (JSON.parse(localStorage.getItem('allExercises')) === null) {
        //if not axios call
        const response = await axios.request(options);
        //set to localStorage
        localStorage.setItem("allExercises", JSON.stringify(response.data))
      }

      if (JSON.parse(localStorage.getItem('allExercises')).length !== 0) {
        JSON.parse(localStorage.getItem('allExercises')).map((exercise) => {
          if (!bodyParts.includes(exercise.bodyPart)) {
            bodyParts.push(exercise.bodyPart)
          }
        })
      }
      //set to store allExercises, bodyPart 
      dispatch(setBodyParts(bodyParts));
      dispatch(setAllExercises(JSON.parse(localStorage.getItem('allExercises'))))
    } catch (error) {
      console.error(error);
    }

    console.log(bodyParts)
  };

  useEffect(() => {

    fetchAllExercises();

  }, [])

  return (
    <div>
      {/* <Darkmode /> */}
      <Navbar />
      <div style={{ marginTop: '60px' }}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/exercise/:exerciseId" exact element={<ExerciseDetail />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;