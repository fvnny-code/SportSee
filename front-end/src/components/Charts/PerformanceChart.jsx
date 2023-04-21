import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { UserContext } from "../../utils/context";
import { useContext } from "react";


export function PerformanceChart() {

    const context = useContext(UserContext);
    console.log(context.performance)
    if (!context.hasLoaded) {
        return <></>;
    }

    // const xAxisFormatter = (kind) => {
        
    //     switch (kind){
    //         case 1: return 'Cardio';
    //         case 2: return 'Energie';
    //         case 3: return 'Endurance';
    //         case 4: return 'Force';
    //         case 5: return 'Vitesse';
    //         case 6: return 'Intensité';
    //         default: return null;
    //     }
    // }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={context.performance.data}
                outerRadius={80}>
                <PolarGrid radialLines={false}/> 
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 500 }}
                    stroke="#FFFFFF"
                    // tickFormatter={xAxisFormatter}
                />
                <Radar
                    dataKey="value"
                    fill="#FF0101B2"
                />
            </RadarChart>

        </ResponsiveContainer>
    )
}