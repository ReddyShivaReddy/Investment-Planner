import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import About from "./components/About";
import ReactLoading from "react-loading";
import Test from "./components/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { style } from "d3";

function App() {


  return (

    <>
      <h1 style={{ width: "max-content", fontSize:'70px'}}>
        Fin<span>plan</span>
      </h1>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/about" element={<About />} />
            <Route index element={<Home />} />
            <Route path="/planner" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


