import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { UserContext } from "../../utils/context";
import { useContext } from "react";

export function ScoreChart() {
  const context = useContext(UserContext);
  console.log(context.score);

  if (!context.hasLoaded) {
    return <></>;
  }

  const score = [
    { value: context.score.todayScore || context.score },
    { value: 1 - context.score.todayScore || context.score },
  ];


  return (
    <div className="ScoreChartContainer">
      <h2 className="ScoreChartTitle">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#E60000" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score">
        <p className="scorePercent">{score[0].value * 100}%</p>
        <p className="scoreText">
          de votre
          <br />
          objectif
        </p>
      </div>
    </div>
  );
}
