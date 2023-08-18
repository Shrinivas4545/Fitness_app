import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import { Stack, Typography } from "@mui/material";
import "../Theme/theme.css";
import { useSelector } from "react-redux";
import Darkmode from "../Theme/Darkmode.js";

const Navbar = () => {
  const themeChanged = useSelector((state) => state.allExercises.theme);
  var isDarkTheme = themeChanged === "dark-theme";

  useEffect(() => {
    isDarkTheme = themeChanged === "dark-theme";
  }, [themeChanged]);

  return (
    <Stack
      direction={"row"}
      pt={0}
      pl={1}
      pb={1}
      className={isDarkTheme ? "dark-navbar" : "light-navbar"}
      sx={{
        gap: {
          xs: "40px",
          md: "130px",
        },
        width: "100%",
        top: "0px",
        position: "sticky", // Change this
        zIndex: 100, // Add this
        // backgroundColor: isDarkTheme ? "#333333" : "white",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <a href="/">
        <img
          style={{ width: "48px", height: "48px", marginLeft: "20px" }}
          src={Logo}
          alt="logo"
        />
      </a>
      <Stack direction={"row"} spacing={3} mt={2}>
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: isDarkTheme ? "white" : "black",
          }}
        >
          <Typography variant="h6">Home</Typography>
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: isDarkTheme ? "white" : "black",
          }}
        >
          <Typography variant="h6">Exercises</Typography>
        </a>
      </Stack>
      <Stack width={"100%"} mr={2} display={"flex"} justifyContent={"flex-end"}>
        <Darkmode />
      </Stack>
    </Stack>
  );
};

export default Navbar;
