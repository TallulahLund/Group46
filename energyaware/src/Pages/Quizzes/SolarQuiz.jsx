import React from "react";
import Question from "./Question";
import questionx from "./Wind";
import questionz from "./Solar";
import { useEffect } from "react";

class SolarQuiz extends React.Component {
  constructor(props) {
    super(props);
    const { subject, solarScore } = props;
    const { setSolarScore } = this.props;
    this.state = {
      questions: questionx, // array of quiz questions
      currentQuestion: 0, // index of the current question
      answers: [], // array to store the user's answers
      showResults: false, // flag to show the results
      currentAnswer: "",
      subject,
      solarScore,
      setSolarScore,
      correctAnswers: [],
      summed: 0,
    };
    this.setState = this.setState.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
  }

  componentDidMount() {
    if (this.state.subject === "Wind") {
      this.setState((prevState) => ({
        questions: questionx,
      }));
    } else {
      this.setState((prevState) => ({
        questions: questionz,
      }));
    }
  }
  // method to handle the user's answer
  handleAnswer(answer) {
    // add the user's answer to the answers array

    this.setState(
      () => ({
        currentAnswer: answer,
      }),
      console.log(this.state.currentAnswer)
    );
  }

  // method to move to the next question
  nextQuestion() {
    this.setState(
      (prevState) => ({
        answers: [...prevState.answers, this.state.currentAnswer],
      }),
      () => {
        console.log(this.state.answers);
      }
    );

    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
    } else {
      this.submitQuiz();
    }
  }

  solution() {
    let x = 0;
    for (let i = 0; i < this.state.questions.length - 1; i++) {
      if (this.state.questions[i].correctAnswer == this.state.answers[i]) {
        x++;
      }
    }

    console.log(x);
    this.state.setSolarScore(x);
  }

  // method to submit the quiz
  submitQuiz() {
    for (let i = 0; i < this.state.questions.length; i++) {
      this.setState((prevState) => ({
        correctAnswers: [
          ...prevState.correctAnswers,
          this.state.questions[i].correctAnswer,
        ],
      }));
    }
    this.setState({ showResults: true });
  }

  render() {
    const { questions, currentQuestion, showResults } = this.state;
    if (showResults) {
      const sum = this.state.answers.reduce((acc, value, index) => {
        if (value == this.state.correctAnswers[index]) {
          return acc + 1;
        }
        return acc;
      }, 0);
      this.setState({ summed: sum });

      return (
        <>
          <div>{this.state.answers}</div>
          <div>{this.state.correctAnswers}</div>
          <div>{this.state.summed}</div>
        </>
        // render the quiz results here
      );
    } else {
      const { question, choices } = questions[currentQuestion];
      return (
        <div>
          <div>
            <Question
              question={question}
              choices={choices}
              handleAnswer={this.handleAnswer}
            />
            <button onClick={this.nextQuestion}>Next</button>
          </div>
        </div>
      );
    }
  }
}

export default SolarQuiz;
