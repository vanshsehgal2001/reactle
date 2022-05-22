import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Keypad from "./components/Keypad";
import initialBoard from "./board";
import { createContext, useEffect, useState } from "react";
import { generateWordSet } from "./wordSet";
import { getWord } from "./getWord";
import Result from "./components/Result";
import Alert from "./components/Alert";
import Scores from "./components/Scores";
import Graph from "./components/Graph";

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [attempts, setAttempts] = useState({
    attemptNo: 1,
    letterPos: 0,
  });
  const [wordList, setWordList] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");

  const [disabledKeys, setDisabledKeys] = useState([]);
  const [correctKeys, setCorrectKeys] = useState([]);
  const [partialKeys, setPartialKeys] = useState([]);
  const [result, setResult] = useState({
    gameOver: false,
    correctGuess: false,
  });
  const [alert, setAlert] = useState(false);
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([]);
  const [showScores, setShowScores] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordList(words.wordSet);
      const myword = getWord(words);
      setCorrectWord(myword);
    });
  }, []);

  const { attemptNo, letterPos } = attempts;

  const onLetterClick = (val) => {
    if (letterPos > 4) {
      return;
    }
    const nboard = [...board];
    nboard[attemptNo - 1][letterPos] = val;
    setBoard(nboard);
    setAttempts({ ...attempts, letterPos: letterPos + 1 });
  };

  const onDeleteClick = (val) => {
    if (letterPos === 0) {
      return;
    }
    const nboard = [...board];
    nboard[attemptNo - 1][letterPos - 1] = "";
    setBoard(nboard);
    setAttempts({ ...attempts, letterPos: letterPos - 1 });
  };

  const onEnterClick = (val) => {
    if (letterPos !== 5) {
      return;
    }
    let guessedWord = "";
    for (let i = 0; i < 5; i++) {
      guessedWord += board[attemptNo - 1][i];
    }

    if (wordList.has(guessedWord.toLowerCase())) {
      setAttempts({ ...attempts, letterPos: 0, attemptNo: attemptNo + 1 });
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, [3000]);
      return;
    }

    if (correctWord === guessedWord.toLowerCase()) {
      let score = 12 - 2 * (attemptNo - 1);
      setScore(score);
      fetch("http://localhost:8000/scores", {
        method: "POST",
        body: JSON.stringify({
          score,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setResult({ ...result, gameOver: true, correctGuess: true });
      return;
    }
    if (attempts.attemptNo > 5) {
      setScore(0);
      fetch("http://localhost:8000/scores", {
        method: "POST",
        body: JSON.stringify({
          score: 0,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setResult({ ...result, gameOver: true, correctGuess: false });
      return;
    }
  };

  return (
    <div className="App">
      {alert && <Alert />}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          attempts,
          setAttempts,
          onLetterClick,
          onDeleteClick,
          onEnterClick,
          correctWord,
          disabledKeys,
          setDisabledKeys,
          correctKeys,
          setCorrectKeys,
          partialKeys,
          setPartialKeys,
          result,
          setResult,
          score,
          scores,
          setScores,
          showScores,
          showGraph,
          setShowScores,
          setShowGraph,
        }}
      >
        <Navbar />
        <div className="game">
          {showScores ? (
            !showGraph ? (
              <Scores />
            ) : null
          ) : showGraph ? (
            <Graph />
          ) : result.gameOver ? (
            <Result />
          ) : (
            <>
              <Board />
              <Keypad />
            </>
          )}
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
