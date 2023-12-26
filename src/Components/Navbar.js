import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { Button, Stack, Typography } from "@mui/material";
import "../Theme/theme.css";
import { useSelector } from "react-redux";
import Darkmode from "../Theme/Darkmode.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const themeChanged = useSelector((state) => state.allExercises.theme);
  var isDarkTheme = themeChanged === "dark-theme";
  const navigate = useNavigate()

  const handleClick_logo = () => {
    navigate("/")
  }

  useEffect(() => {
    isDarkTheme = themeChanged === "dark-theme";
  }, [themeChanged]);

  return (
    <Stack
      direction={"row"}
      pt={0}
      pb={1}
      className={isDarkTheme ? "dark-navbar" : "light-navbar"}
      sx={{
        gap: {
          xs: "20px",
          md: "130px",
        },
        width: "100%",
        top: "0px",
        position: "sticky",
        zIndex: 100,
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        style={{ width: "48px", height: "48px", marginLeft: "20px", marginTop: "10px", cursor: "pointer" }}
        src={Logo}
        alt="logo"
        onClick={handleClick_logo}
      />
      <Stack direction={"row"} spacing={3} mt={1.5}>
        <Button
          sx={{
            textTransform: "none",
          }}
          onClick={handleClick_logo}>
          <Typography variant="h6">Home</Typography>
        </Button>
        <Button
          sx={{
            textTransform: "none",
          }}
        >
          <Typography variant="h6">Exercises</Typography>
        </Button>
      </Stack>
      <Stack width={"100%"} mr={1} display={"flex"} justifyContent={"flex-end"}>
        <Darkmode />
      </Stack>
    </Stack>
  );
};

export default Navbar;
