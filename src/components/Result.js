import React, { useContext } from "react";
import { AppContext } from "../App";

const Result = () => {
  const { result, setResult, correctWord, attempts, score } =
    useContext(AppContext);
  const { gameOver, correctGuess } = result;
  return (
    <div
      className="game"
      style={{
        backgroundColor: "lightgray",
        color: "black",
        width: "500px",
        height: "350px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>Results</h1>
      <br />
      <h4>Score : {score}</h4>
      <h2 style={{ marginBottom: "10px" }}>
        Correct Word:{" "}
        <span
          style={{
            backgroundColor: "indianred",
            color: "black",
            borderRadius: "10px",
            padding: "5px",
            fontSize: "22px",
            marginLeft: "5px",
          }}
        >
          {correctWord}
        </span>{" "}
      </h2>
      {correctGuess ? (
        <>
          <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>
            "You won the game!!"
          </h3>
          <h3 style={{ marginTop: "10px" }}>
            You guessed in {attempts.attemptNo - 1}{" "}
            {attempts.attemptNo - 1 > 1 ? "attempts" : "attempt"}
          </h3>
        </>
      ) : (
        <>
          <h3>"You were not able to guess the word.You lost!!"</h3>
        </>
      )}
      <button
        style={{
          margin: "20px 0px",
          backgroundColor: "rgba(0,0,0,0.8)",
          border: "none",
          padding: "10px",
          color: "white",
          fontWeight: "bold",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        New Reactle
      </button>
    </div>
  );
};

export default Result;
