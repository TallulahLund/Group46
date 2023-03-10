import React from "react";
import Question from "./QuestionHandler";
import { useState } from "react";
import { useEffect } from "react";
import "./QuizHandler.css";

const QuizHandler = (props) => {
  const { questions, stats, setStats } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const correctAnswers = questions.map((questions) => questions.correctAnswer);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setCurrentAnswer(answer);
  };

  const submitAnswer = () => {
    if (currentAnswer != null) {
      setUserAnswers((prevAnswers) => [...prevAnswers, currentAnswer]);
      setCurrentAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevcurrentQuestion) => prevcurrentQuestion + 1);
      } else {
        //submitQuiz();
      }
    } else {
      alert("Select an Option");
    }
  };

  const submitQuiz = () => {
    //compare correct answers to user answers and return a score
    setScore(0);
    let ss = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === userAnswers[i]) {
        ss++;
      } else {
        //console.log("wrong");
      }
      setScore(ss);
    }
    setShowResults(true);
    console.log("Quiz Sumbitted");
  };

  const calculateStats = () => {
    let ss = score;
    // let newAverage =
    //   ((stats.averageScore * stats.testsTaken + score / 4) /
    //     (stats.testsTaken + 1)) *
    //   100;
    // let takentests = stats.testsTaken + 1;
    // setStats({
    //   lastScore: ss,
    //   testsTaken: takentests,
    //   averageScore: newAverage,
    //   perfectScores: 0,
    // });
    // console.log(stats);
    // console.log(newAverage);
    setStats({ ...stats, lastScore: score });
    console.log(score);
  };

  useEffect(() => {
    if (userAnswers.length === correctAnswers.length) {
      console.log(userAnswers);
      submitQuiz();
      calculateStats();
    }
  }, [userAnswers]);

  if (showResults) {
    return (
      <div className="results-page">
        <div>You Scored: {score}</div>
      </div>
    );
  } else {
    const { question, choices } = questions[currentQuestion];
    return (
      <div className="question-display">
        <Question
          question={question}
          choices={choices}
          handleAnswer={handleAnswer}
        />
        <button className="takeQuizButton" onClick={submitAnswer}>
          Next
        </button>
      </div>
    );
  }
};

export default QuizHandler;
