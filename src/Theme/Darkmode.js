import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./theme.css";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Redux/Exercises/actionExercises";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Darkmode = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.allExercises.theme)
    const [theme, setThemee] = useState(currentTheme);
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
