import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { UserContext } from "../../utils/context";
import { useContext } from "react";


export function PerformanceChart() {

    const context = useContext(UserContext);
    console.log(context.performance)
    if (!context.hasLoaded) {
        return <></>;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={context.performance.data}
                outerRadius={80}>
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 500 }}
                    stroke="#FFFFFF"
                />
                <Radar
                    dataKey="value"
                    fill="#FF0101B2"
                />
            </RadarChart>

        </ResponsiveContainer>
    )
}