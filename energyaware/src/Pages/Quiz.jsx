import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import SolarQuiz from "./Quizzes/SolarQuiz";

const Quiz = () => {
  return (
    <div className="topics">
      <div>
        <Link to="/quiz/solar">
          <img src="logo192.png"></img>
          <h2>Solar</h2>
        </Link>
      </div>
      <div>
        <Link to="/quiz/solar">
          <img src="logo192.png"></img>
          <h2>Solar</h2>
        </Link>
      </div>
      <div>
        <Link to="/quiz/solar">
          <img src="logo192.png"></img>
          <h2>Solar</h2>
        </Link>
      </div>
      <Routes>
        <Route path="/quiz/solar" element={<SolarQuiz />}></Route>
      </Routes>
    </div>
  );
};

export default Quiz;
