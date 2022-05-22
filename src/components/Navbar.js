import React, { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
  const { setShowScores, setShowGraph } = useContext(AppContext);

  return (
    <div>
      <h1 style={{ marginTop: "10px", letterSpacing: 5, fontSize: "30px" }}>
        REACTLE
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => {
            setShowScores(true);
            setShowGraph(false);
          }}
          style={{
            width: "10%",
            // flex: 0.2,
            padding: "6px 0px",
            borderRadius: "9px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "lightgray",
            fontWeight: "bold",
          }}
        >
          Scores
        </button>
        <button
          onClick={() => {
            window.location.reload();
          }}
          style={{
            width: "10%",
            borderRadius: "9px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "lightgray",
            fontWeight: "bold",
          }}
        >
          Create New
        </button>
        <button
          onClick={() => {
            setShowGraph(true);
            setShowScores(false);
          }}
          style={{
            width: "10%",
            borderRadius: "9px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "lightgray",
            fontWeight: "bold",
          }}
        >
          Graph
        </button>
      </div>
    </div>
  );
};

export default Navbar;
