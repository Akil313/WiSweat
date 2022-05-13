import React, { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './Contexts/ThemeContext'
import { SweatProvider } from './Contexts/SweatContext'
import TeamProfile from "./TeamProfile/TeamProfile";

export const SweatContext = createContext();

function App() {
  const [theme, setTheme] =  useState("dark");

  return (
    <div className="App">

      <SweatProvider>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/team/:id" element={<TeamProfile />}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </SweatProvider>

    </div>
  );
}

export default App;
