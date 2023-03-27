import React from "react";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./Quiz.css";
import Questions from "./QuizComponents/Questions";
import QuizHandler from "./QuizComponents/Quizhandler";
import axios from "axios";
import LeaderBoard from "./QuizComponents/LeaderBoard";
//Add Leaderboard feature once quiz Stats works

export default function Quiz() {
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const [userdata, setUserdata] = useState("");
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
  const [LeaderBoardList, setLeaderboardList] = useState([]);
  const stringScore = stats.lastScore.toString();

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    console.log(LeaderBoardList);
  }, [LeaderBoardList]);

  // useEffect(() => {
  //   checkLoggedIn();
  // }, []);

  const getQuestions = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/questions",
    })
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SaveStats = () => {
    console.log(stringScore);
    if (!checkLoggedIn()) {
      alert("You need to log in");
    } else {
      if (userdata != "") {
        PostStats();
      } else {
        alert("Please Check That You Are Logged In");
      }
    }
  };

  const PostStats = () => {
    console.log(userdata.id);
    const jwt = sessionStorage.getItem("jwt");
    axios({
      method: "post",
      url: "http://localhost:8080/stat",
      data: {
        lastScore: stringScore,
        // author: userdata,
        userId: {
          id: userdata.id,
          name: userdata.name,
          email: userdata.email,
          password: userdata.password,
          buyer_seller: userdata.buyer_seller,
        },
      },
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("Stat Saved.");

          ////////
          //getAllData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ShowLeaderBoard = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/stat",
    })
      .then((response) => {
        data = response.data;
        setLeaderboardList([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(LeaderBoardList);
  };

  const toggleView = () => {
    console.log(fetchedQuestions);
    if (fetchedQuestions != []) {
      if (outTest == true) {
        setOutTest(false);
      } else {
        setOutTest(true);
      }
    }
  };

  const checkLoggedIn = () => {
    if (loggedInUser !== "" && userdata === "") {
      const jwt = sessionStorage.getItem("jwt");
      console.log(jwt);
      axios({
        method: "get",
        url: "http://localhost:8080/user/findByEmail",
        params: { email: loggedInUser },
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log("response.data = ", response.data);
            console.log(response.data.userType);
            setUserdata(response.data);
          }
        })
        .catch((err) => {
          console.log(err.response);
          setUserdata("Data failure");
          return false;
        });

      ///////////////

      // const jwt = sessionStorage.getItem('jwt');
      console.log(jwt);

      return true;
    }
    return true;
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
          <button className="statButton" onClick={SaveStats}>
            Save Stats
          </button>
          <button className="statButton" onClick={ShowLeaderBoard}>
            Show LeaderBoard
          </button>
        </div>
        <LeaderBoard LeaderBoardList={LeaderBoardList} />
      </section>
    );
  } else {
    return (
      <div className="mainContent">
        <QuizHandler
          questions={fetchedQuestions}
          stats={stats}
          setStats={setStats}
        />
        <button id="takeQuizButton" onClick={toggleView}>
          Go Back
        </button>
      </div>
    );
  }
}
