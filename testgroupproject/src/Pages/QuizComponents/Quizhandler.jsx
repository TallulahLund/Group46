import React from "react";
import Question from "./QuestionHandler";
import { useState } from "react";
import { useEffect } from "react";
import "./QuizHandler.css";

const QuizHandler = (props) => {
  const { questions } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const correctAnswers = questions.map((questions) => questions.correctAnswer);
  const [currentAnswer, setCurrentAnswer] = useState("");
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
      console.log("Select an Option");
    }
  };

  const submitQuiz = () => {
    //compare correct answers to user answers and return a score
    setScore(0);
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === userAnswers[i]) {
        setScore((prevscore) => prevscore + 1);
      } else {
        //console.log("wrong");
      }
    }
    setShowResults(true);
    console.log("Quiz Sumbitted");
  };

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
