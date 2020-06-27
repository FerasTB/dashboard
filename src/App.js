import React from "react";
import "./App.css";
import Course from "./components/Course";
import Institution from "./components/Institution";
import Student from "./components/Student";
import Active from "./components/Active";
import Lesson from "./components/Lesson";
import Module from "./components/Module";
import Section from "./components/Section"
function App() {
  return (
    <div className="container">
      <Course />
      <Institution />
      <Student />
      <Active />
      <Lesson />
      <Section />
      <Module />
    </div>
  );
}

export default App;
