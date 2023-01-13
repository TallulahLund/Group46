import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import QuizOptions from "./Pages/Quizzes";
import Petitions from "./Pages/Petition";
import Tips from "./Pages/Tips";
import Information from "./Pages/Information";
import Quiz from "./Quizzes/Quiz";
import windQuestions from "./Quizzes/Wind";
import solarQuestions from "./Quizzes/Solar";

const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <div className="PageLinks">
          <Link to="/">Energy Aware</Link>
          <Link to="/petitions">Petition</Link>
          <Link to="/quiz">Interactive Quiz</Link>
          <Link to="/tips">Tips</Link>
          <Link to="/information">Information</Link>
        </div>
        <div className="ProfileLink">
          <Link to="/profile">
            <img src="logo192.png" className="Profilepic"></img>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/petitions" element={<Petitions />}></Route>
        <Route path="/tips" element={<Tips />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/information" element={<Information />}></Route>
        <Route path="/quiz">
          <Route index element={<QuizOptions />} />
          <Route
            path="/quiz/solar"
            element={<Quiz questions={solarQuestions} />}
          />
          <Route
            path="/quiz/wind"
            element={<Quiz questions={windQuestions} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
