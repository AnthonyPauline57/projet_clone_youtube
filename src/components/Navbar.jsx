import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import React, { useState, useEffect } from 'react';
import './darkMode.css';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    
  return (
    
    <div>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Light / Dark Mode</button>
      </div>
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
  </div>)
  
};

export default Navbar;
