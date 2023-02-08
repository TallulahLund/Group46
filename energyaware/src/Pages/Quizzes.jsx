import React from "react";
import { Link } from "react-router-dom";
import "./Quizzes.css";

const QuizOptions = () => {
  return (
    <div className="Quizzes">
      <div className="Topics">
        <div className="Option">
          <Link to="/quiz/solar">
            <img src="logo192.png"></img>
            <h2>Solar</h2>
          </Link>
        </div>
        <div>
          <Link to="/quiz/wind">
            <img src="logo192.png"></img>
            <h2>Wind</h2>
          </Link>
        </div>
        <div>
          <Link to="/quiz/solar">
            <img src="logo192.png"></img>
            <h2>Nuclear</h2>
          </Link>
        </div>
        <div>
          <Link to="/quiz/solar">
            <img src="logo192.png"></img>
            <h2>Hydro</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizOptions;
