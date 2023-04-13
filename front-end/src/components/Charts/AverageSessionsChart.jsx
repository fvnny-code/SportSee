import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { UserContext } from "../../utils/context";
import { useContext } from "react";

export function AverageSessionsChart() {

    const context = useContext(UserContext);
    console.log(context.averageSessions)
    if (!context.hasLoaded) {
        return <></>;
    }


    return (
        <>
        </>
    )

}