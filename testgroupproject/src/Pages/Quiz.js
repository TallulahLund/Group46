import React from "react";
import { useState, useEffect } from "react";
import "./Quiz.css";
import Questions from "./QuizComponents/Questions";
import QuizHandler from "./QuizComponents/Quizhandler";
import axios from "axios";
//Add Leaderboard feature once quiz Stats works

export default function Quiz() {
  let data = [];
  let list = [];
  let correctAnswers = [];
  let currentQuestion = 0;

  const [outTest, setOutTest] = useState(true);
  const [stats, setStats] = useState({
    lastScore: 0,
    testsTaken: 0,
    averageScore: 0,
    perfectScores: 0,
  });
  const [fetchedQuestions, setFetchedQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    axios
      .get("/questions")
      .then((response) => {
        data = response.data;
        setFetchedQuestions([...data]);
        // for (let i = 0; i < data.length; i++) {
        //   correctAnswers.push(data[i].correctAnswer);
        // }
      })
      .then(() => {
        console.log(data);
        console.log(fetchedQuestions);
        console.log(list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PostStats = () => {};

  const ShowLeaderBoard = () => {};

  const toggleView = () => {
    console.log("Hey");
    console.log(fetchedQuestions);
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
            Why not test your knowledge about different energy types by taking a
            quiz?
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
          </div>
        </div>
        <div id="statsSection">
          <button className="statButton" onClick={PostStats}>
            Save Stats
          </button>
          <button className="statButton" onClick={ShowLeaderBoard}>
            Show LeaderBoard
          </button>
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
