// eslint-disable-next-line no-unused-vars
import React from "react";
import Projects from "./components/Projects/Projects";
import LandPage from "./components/LandingPage/LandPage";
import Header from "./components/LandingPage/Header";
import Skills from "./components/Skills/Skills"
import "./index.css";

function App() {

  return (
    <div className="bg-animado-blue bg-blue">
      <div>
        <Header />
        <LandPage />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default App
