import React, { useEffect } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

const Guess = ({ letterPos, attemptNo }) => {
  const {
    board,
    correctWord,
    attempts,
    setDisabledKeys,
    setCorrectKeys,
    setPartialKeys,
  } = useContext(AppContext);

  const fullyCorrect =
    correctWord[letterPos] === board[attemptNo - 1][letterPos].toLowerCase();
  const partiallyCorrect =
    !fullyCorrect &&
    board[attemptNo - 1][letterPos].toLowerCase() !== "" &&
    correctWord.includes(board[attemptNo - 1][letterPos].toLowerCase());

  const state =
    attempts.attemptNo > attemptNo &&
    (fullyCorrect ? "correct" : partiallyCorrect ? "partial" : "error");

  useEffect(() => {
    if (
      board[attemptNo - 1][letterPos].toLowerCase() !== "" &&
      !fullyCorrect &&
      !partiallyCorrect
    ) {
      setDisabledKeys((prev) => [...prev, board[attemptNo - 1][letterPos]]);
      return;
    }
    if (board[attemptNo - 1][letterPos].toLowerCase() !== "" && fullyCorrect) {
      setCorrectKeys((prev) => [...prev, board[attemptNo - 1][letterPos]]);
      return;
    }
    if (
      board[attemptNo - 1][letterPos].toLowerCase() !== "" &&
      !fullyCorrect &&
      partiallyCorrect
    ) {
      setPartialKeys((prev) => [...prev, board[attemptNo - 1][letterPos]]);
      return;
    }
  }, [attempts.attemptNo]);

  return (
    <div
      className="letter"
      id={
        attempts.attemptNo > attemptNo
          ? fullyCorrect
            ? "correct"
            : partiallyCorrect
            ? "partial"
            : "error"
          : "vansh"
      }
    >
      {board[attemptNo - 1][letterPos]}
    </div>
  );
};

export default Guess;
