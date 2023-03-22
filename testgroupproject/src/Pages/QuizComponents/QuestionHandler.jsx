import React, { useState } from "react";
import "./QuestionHandler.css";

const QuestionHandler = (props) => {
  const {
    question,
    choiceA,
    choiceB,
    choiceC,
    choiceD,
    handleAnswer,
    clickedA,
    clickedB,
    clickedC,
    clickedD,
  } = props;

  return (
    <div className="question-card">
      <p className="question">{question}</p>
      <div className="question-options">
        <button
          className={`question-option${clickedA}`}
          onClick={() => {
            handleAnswer(choiceA);
          }}
        >
          {choiceA}
        </button>
        <button
          className={`question-option${clickedB}`}
          onClick={() => {
            handleAnswer(choiceB);
          }}
        >
          {choiceB}
        </button>
        <button
          className={`question-option${clickedC}`}
          onClick={() => {
            handleAnswer(choiceC);
          }}
        >
          {choiceC}
        </button>
        <button
          className={`question-option${clickedD}`}
          onClick={() => {
            handleAnswer(choiceD);
          }}
        >
          {choiceD}
        </button>
      </div>
    </div>
  );
};

export default QuestionHandler;
