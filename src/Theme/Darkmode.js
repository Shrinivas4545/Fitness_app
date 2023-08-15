import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './theme.css'

const Darkmode = () => {
    const [theme, setTheme] = useState("light-theme");
    const [btnName, setBtnName] = useState("Dark_Mode");
    const [btnVariant, setBtnVariant] = useState("contained");
    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
            setBtnName("Light_Mode");
            setBtnVariant("outlined");
        } else {
            setTheme("light-theme");
            setBtnName("Dark_Mode");
            setBtnVariant("contained");
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div className='containerDarkmode'>
            <Button variant={btnVariant}
                    onClick={() => toggleTheme()}
            >{btnName}</Button>
        </div>
    )
}

export default Darkmode