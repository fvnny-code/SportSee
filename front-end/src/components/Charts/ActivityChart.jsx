import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { UserContext } from "../../utils/context";
import { useContext } from "react";

export default function ActivityChart() {
  const context = useContext(UserContext);
  if (!context.hasLoaded) {
    return <></>;
  }


  // Get the day in the date.
  // @params{string} value - full date
  // @params {number {1-31}} number of days

  const xAxisTickFormat = (value) => {
    const valueDay = value.split("-");
    return Number(valueDay[2]);
  };

  // Format Tooltip
  // @param {array} payload - source data
  // @param {boolean} active - is Tootip active
  // @returns data.value on hover

  function CustomTooltip({ active, payload }) {
  
    if (active) {
      return (
        <div className="activityChartTooltip">
          <div>{`${payload[0].value}`}kg</div>
          <div>{`${payload[1].value}`}Kcal</div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="BarchartContainer">
      <h2 className="BarchartTitle">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={context.activity.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid
            vertical="false"
            strokeDasharray="3"
            height={1}
            horizontalPoints={[90, 185]}
          />
          <XAxis
            dataKey="day"
            tickFormatter={xAxisTickFormat}
            interval="preserveStartEnd"
            tickSize="0"
            tickMargin="25"
            stroke="#9B9EAC"
          />
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="left"
            hide="true"
          />
          <YAxis
            className="activityYAxis"
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            type="number"
            domain={["dataMin -1", "dataMax"]}
            tickCount="3"
            tickSize="0"
            axisLine={false}
            tickMargin="30"
            width={45}
            stroke="#9B9EAC"
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign="top"
            align="right"
            height={80}
            iconType="circle"
            iconSize={8}
          />
          <Bar
            name="Poids(kg)"
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
          <Bar
            name="Calories brûlées(kCal)"
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
