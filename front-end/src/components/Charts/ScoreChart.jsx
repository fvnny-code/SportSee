import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { UserContext } from "../../utils/context";
import { useContext } from "react";

export function ScoreChart() {
  const context = useContext(UserContext);
  console.log(context.score);

  if (!context.hasLoaded) {
    return <></>;
  }

  return (
    <div className="ScoreChartContainer">
      <h2 className="ScoreChartTitle">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie>
            <Cell></Cell>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
