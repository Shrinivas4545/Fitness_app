import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./theme.css";
import { useDispatch } from "react-redux";
import { setTheme } from "../Redux/Exercises/actionExercises";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Darkmode = () => {
    const dispatch = useDispatch();
    const [theme, setThemee] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "light-theme") {
            setThemee("dark-theme");
            dispatch(setTheme("dark-theme"));
        } else {
            setThemee("light-theme");
            dispatch(setTheme("light-theme"));
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="containerDarkmode">
            <Button onClick={() => toggleTheme()}>
                {theme === "light-theme" ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
        </div>
    );
};

export default Darkmode;
