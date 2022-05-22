import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "User Performance",
  legend: { position: "bottom" },
  series: {
    1: {
      curveType: "function",
    },
    0: { lineWidth: 3 },
  },
  hAxis: {
    scaleType: "decimal",
  },
  vAxes: {
    0: { title: "Score" },
    1: { title: "No of plays" },
  },
  colors: ["black"],
  backgroundColor: "ivory",
};

const Graph = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/scores")
      .then((response) => response.json())
      .then((data) => {
        const temparr = [];
        temparr.push(["score", "No of plays"]);
        for (let i = 0; i < data.length; i++) {
          temparr.push([data[i].id, data[i].score]);
        }
        setScores(temparr);
      });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        marginTop: "30px",
        width: "80%",
      }}
    >
      {scores.length > 0 && (
        <Chart
          chartType="LineChart"
          width="100%"
          height="450px"
          data={scores}
          options={options}
        />
      )}
    </div>
  );
};

export default Graph;
