import React, { useState, useEffect } from "react";
import Question from "./QuestionHandler";
import "./QuizHandler.css";

const QuizHandler = (props) => {
  const { questions, stats, setStats } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const correctAnswers = questions.map((questions) => questions.correctAnswer);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const { choiceA, choiceB, choiceC, choiceD } = questions[currentQuestion];

  const [clickedA, setClickedA] = useState("");
  const [clickedB, setClickedB] = useState("");
  const [clickedC, setClickedC] = useState("");
  const [clickedD, setClickedD] = useState("");

  const handleAnswer = (answer) => {
    setCurrentAnswer(answer);
    setClickedA("");
    setClickedB("");
    setClickedC("");
    setClickedD("");
    if (answer == choiceA) {
      setClickedA(" clicked");
    }
    if (answer == choiceB) {
      setClickedB(" clicked");
    }
    if (answer == choiceC) {
      setClickedC(" clicked");
    }
    if (answer == choiceD) {
      setClickedD(" clicked");
    }
  };

  const submitAnswer = () => {
    if (currentAnswer != null) {
      setUserAnswers((prevAnswers) => [...prevAnswers, currentAnswer]);
      setCurrentAnswer(null);
      setClickedA("");
      setClickedB("");
      setClickedC("");
      setClickedD("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevcurrentQuestion) => prevcurrentQuestion + 1);
      } else {
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

    let newPerfect = 0;
    let newNumerator = 0;
    let takentests = stats.testsTaken + 1;
    let scorePercentage = (ss / 10) * 100;
    newNumerator += stats.testsTaken * stats.averageScore + scorePercentage;
    let newAverage = newNumerator / takentests;
    if (ss === 4) {
      newPerfect = stats.perfectScores + 1;
    } else {
      newPerfect = stats.perfectScores;
    }

    setStats({
      lastScore: ss,
      testsTaken: takentests,
      averageScore: newAverage,
      perfectScores: newPerfect,
    });

    setShowResults(true);
    console.log("Quiz Sumbitted");
    console.log(newNumerator);
  };

  const calculateStats = () => {
    // let ss = score;
    // let newAverage =
    //   ((stats.averageScore * stats.testsTaken + score / 4) * 100) /
    //   (stats.testsTaken + 1);
    // setStats({
    //   lastScore: ss,
    //   testsTaken: takentests,
    //   averageScore: newAverage,
    //   perfectScores: 0,
    // });
    // console.log("taken tests:" + takentests);
    // console.log("Average score:" + newAverage);
    // console.log("Last Score:" + score);
  };

  useEffect(() => {
    calculateStats();
  }, [showResults]);

  useEffect(() => {
    if (userAnswers.length === correctAnswers.length) {
      console.log(userAnswers);
      submitQuiz();
    }
  }, [userAnswers]);

  if (showResults) {
    return (
      <div className="results-page">
        <div>You Scored: {score}</div>
      </div>
    );
  } else {
    const { question, choiceA, choiceB, choiceC, choiceD } =
      questions[currentQuestion];
    return (
      <div className="question-display">
        <Question
          question={question}
          choiceA={choiceA}
          choiceB={choiceB}
          choiceC={choiceC}
          choiceD={choiceD}
          handleAnswer={handleAnswer}
          clickedA={clickedA}
          clickedB={clickedB}
          clickedC={clickedC}
          clickedD={clickedD}
        />
        <button className="takeQuizButton" onClick={submitAnswer}>
          Next
        </button>
      </div>
    );
  }
};

export default QuizHandler;
