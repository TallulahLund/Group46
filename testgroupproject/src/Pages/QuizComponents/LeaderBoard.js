import React from "react";
import "./LeaderBoard.css";

const LeaderBoard = (props) => {
  const { LeaderBoardList } = props;
  // let ranks = LeaderBoardList.map((LeaderBoardList, index) => {
  //   {
  //     LeaderBoardList[index].lastScore;
  //   }
  //
  // });

  const sortList = () => {};
  return (
    <div className="leaderBoardContainer">
      {LeaderBoardList.map((Leader, index) => {
        let score = Leader.lastScore;
        let email = Leader.testee.email;
        return (
          <div key={index} className="leader">
            {email} {score}
          </div>
        );
      })}
    </div>
  );
};

export default LeaderBoard;
