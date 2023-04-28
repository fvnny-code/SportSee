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
    { value: context.score.todayScore || context.score.score  },
    { value: 1 - context.score.todayScore || context.score.score  },
  ];

  console.log(score);
  return (
    <div className="ScoreChartContainer">
      <h2 className="ScoreChartTitle">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"  
            cx="50%"
            cy="40%"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >

             <Cell cornerRadius={10} fill="#E60000" /> 
             <Cell fill="#fbfbfb" />

          </Pie>
        </PieChart>
        
      </ResponsiveContainer>
      <div className="score">
        <p className="scorePercent">{score[0].value * 100} %</p>
        <p className="scoreText">
          de votre
          <br />
          objectif
        </p>
      </div>
    </div>
  );
}
