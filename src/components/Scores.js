import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Scores = () => {
  const { scores, setScores } = useContext(AppContext);
  useEffect(() => {
    fetch("http://localhost:8000/scores")
      .then((response) => response.json())
      .then((data) => {
        setScores(data);
      });
  }, []);
  return (
    <div>
      <table>
        <caption style={{ color: "white" }}>Scores Table</caption>
        <tr>
          <th>Sr. No.</th>
          <th>Score</th>
        </tr>
        {scores.map((score) => {
          return (
            <tr>
              <td>{score.id}</td>
              <td>{score.score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Scores;
