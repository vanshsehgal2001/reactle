import React from "react";
import initialBoard from "../board";
import Guess from "./Guess";

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <Guess letterPos={0} attemptNo={1} />
        <Guess letterPos={1} attemptNo={1} />
        <Guess letterPos={2} attemptNo={1} />
        <Guess letterPos={3} attemptNo={1} />
        <Guess letterPos={4} attemptNo={1} />
      </div>
      <div className="row">
        <Guess letterPos={0} attemptNo={2} />
        <Guess letterPos={1} attemptNo={2} />
        <Guess letterPos={2} attemptNo={2} />
        <Guess letterPos={3} attemptNo={2} />
        <Guess letterPos={4} attemptNo={2} />
      </div>
      <div className="row">
        <Guess letterPos={0} attemptNo={3} />
        <Guess letterPos={1} attemptNo={3} />
        <Guess letterPos={2} attemptNo={3} />
        <Guess letterPos={3} attemptNo={3} />
        <Guess letterPos={4} attemptNo={3} />
      </div>
      <div className="row">
        <Guess letterPos={0} attemptNo={4} />
        <Guess letterPos={1} attemptNo={4} />
        <Guess letterPos={2} attemptNo={4} />
        <Guess letterPos={3} attemptNo={4} />
        <Guess letterPos={4} attemptNo={4} />
      </div>
      <div className="row">
        <Guess letterPos={0} attemptNo={5} />
        <Guess letterPos={1} attemptNo={5} />
        <Guess letterPos={2} attemptNo={5} />
        <Guess letterPos={3} attemptNo={5} />
        <Guess letterPos={4} attemptNo={5} />
      </div>
      <div className="row">
        <Guess letterPos={0} attemptNo={6} />
        <Guess letterPos={1} attemptNo={6} />
        <Guess letterPos={2} attemptNo={6} />
        <Guess letterPos={3} attemptNo={6} />
        <Guess letterPos={4} attemptNo={6} />
      </div>
    </div>
  );
};

export default Board;
