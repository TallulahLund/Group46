import React from "react";
import { useState } from "react";
import "./Quiz.css";
import Questions from "./QuizComponents/Questions";
import QuizHandler from "./QuizComponents/Quizhandler";

export default function Quiz() {
  const [outTest, setOutTest] = useState(true);
  const [stats, setStats] = useState({
    lastScore: 0,
    testsTaken: 0,
    averageScore: 0,
    perfectScores: 0,
  });

  const toggleView = () => {
    if (outTest == true) {
      setOutTest(false);
    } else {
      setOutTest(true);
    }
  };

  if (outTest) {
    return (
      <section className="mainContent">
        <div>
          <p>
            Why not test your knowledge about different energy types but taking
            a quiz?
          </p>
          <br />
          <div className="quizButtonCont">
            <button id="takeQuizButton" onClick={toggleView}>
              Take Quiz
            </button>
          </div>
        </div>
        <br />
        <div className="quizStats">
          <h4>Quiz Stats:</h4>
          <div className="stats">
            <p>Your Last Score was: {stats.lastScore}</p>
            <p>You have taken a total of {stats.testsTaken} quizzes.</p>
            <p>Average score: {stats.averageScore}%</p>
            <p>Total number of 100%: {stats.perfectScores}</p>
            <p>Best area: </p>
            <p>Worst area: </p>
            <p>any other stats that can be found</p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="mainContent">
        <QuizHandler questions={Questions} stats={stats} setStats={setStats} />
        <button id="takeQuizButton" onClick={toggleView}>
          Go Back
        </button>
      </div>
    );
  }
}
