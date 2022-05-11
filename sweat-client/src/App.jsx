import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './Contexts/ThemeContext'

function App() {
  const [theme, setTheme] =  useState("dark");

  return (
    <div className="App">

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
