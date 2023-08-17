import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BodyParts from "./BodyParts";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchText,
  unselectBodyPart
} from "../Redux/Exercises/actionExercises";
import SearchIcon from "@mui/icons-material/Search";

const SearchExercises = () => {
  var [value, setValue] = useState();
  const dispatch = useDispatch();
  const allExercises = useSelector((state) => state.allExercises.allExercises);

  const searchArray = [];

  useEffect(() => {
    allExercises.map((exercise) => {
      !searchArray.includes(exercise.bodyPart) &&
        searchArray.push(exercise.bodyPart);
      !searchArray.includes(exercise.equipment) &&
        searchArray.push(exercise.equipment);
      !searchArray.includes(exercise.name) && searchArray.push(exercise.name);
      !searchArray.includes(exercise.target) &&
        searchArray.push(exercise.target);
    });
  }, [searchArray]);

  const valueChange1 = (newValue) => {
    // setValue = newValue;
    dispatch(setSearchText(newValue));
    dispatch(unselectBodyPart());
    if (window.innerWidth < 600) {
      window.scrollTo({ top: 710, behavior: "smooth" });
    } else if (window.innerWidth >= 600 && window.innerWidth < 764) {
      window.scrollTo({top: 950, behavior: 'smooth'})
    }
    else {
      window.scrollTo({ top: 1120, behavior: "smooth" });
    }
  };

  // const btnSearchHandle = () => { };

  return (
    <Stack mt={{xs: '50px', sm: '250px'}} direction={"column"}>
      <Typography fontSize={{sx: '25px', sm:'30px'}} fontWeight={"600"} textAlign={"center"}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Stack
        direction={"row"}
        spacing={2}
        mt={2}
        justifyContent={"center"}
        mb={3}
      >
        <Stack width={"70%"}>
          <Autocomplete
            options={searchArray}
            value={value}
            renderInput={(params) => (
              <TextField
                placeholder="Search Exercise"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <SearchIcon color="primary" fontSize="medium" sx={{ marginLeft: '8px' }} />
                  ),
                }}
              />
            )}
            onChange={(event, newValue) => valueChange1(newValue)}
            freeSolo
          />
        </Stack>
        {/* <Button
          variant="contained"
          color="error"
          onClick={() => btnSearchHandle()}
          sx={{
            textTransform: "none",
            width: { sx: "100px", sm: "175px", md: "300px" }
          }}
        >
          <Typography variant="h6" fontWeight={"600"}>
            Search
          </Typography>
        </Button> */}
      </Stack>
      <BodyParts />
    </Stack>
  );
};

export default SearchExercises;
