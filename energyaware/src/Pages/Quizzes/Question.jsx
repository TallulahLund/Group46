import React from "react";

const Question = (props) => {
  const { question, choices, handleAnswer } = props;
  return (
    <div>
      <p>{question}</p>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Question;
