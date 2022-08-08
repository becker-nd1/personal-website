import React from "react";
import Footer from "./common/Footer";
import "./App.css";
import Home from "./home/Home";
import { Tutorials } from "./tutorials/Tutorials";
import { About } from "./about/About";
import MyNavBar from "./common/MyNavbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Card data to be stored elsewhere eventually.

function App() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
