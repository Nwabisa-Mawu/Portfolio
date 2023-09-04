// eslint-disable-next-line no-unused-vars
import React from "react";
import Projects from "./components/Projects";
import LandPage from "./components/LandingPage/LandPage";
import Header from "./components/Header";
import "./index.css";

function App() {

  return (
    <div className="bg-animado-blue bg-blue">
      <div>
        <Header />
        <LandPage />
        <Projects />
      </div>
    </div>
  )
}

export default App
