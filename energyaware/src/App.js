import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Quiz from "./Pages/Quiz";
import Petitions from "./Pages/Petition";
import Tips from "./Pages/Tips";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <div className="PageLinks">
            <Link to="/">Energy Aware</Link>
            <Link to="/petitions">Petitions</Link>
            <Link to="/quiz">Interactive Quiz</Link>
            <Link to="/tips">Tips</Link>
          </div>
          <div className="ProfileLink">
            <Link to="/profile">
              <img src="logo192.png" className="Profilepic"></img>
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/petitions" element={<Petitions />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/tips" element={<Tips />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
