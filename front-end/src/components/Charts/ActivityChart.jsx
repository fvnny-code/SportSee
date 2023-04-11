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

import { USER_ACTIVITY } from '../../data/mockedData'


export default function ActivityChart() {

    const activity = USER_ACTIVITY
    return (
        <div className="BarchartContainer">
            <h2 className="BarchartTitle">Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={activity}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid
                        vertical='false'
                        strokeDasharray="3"
                        height={1}
                        horizontalPoints={[90, 185]}
                    />
                    <XAxis
                        dataKey="day"
                        interval='preserveStartEnd'
                        tickSize='0'
                        tickMargin='25'
                        stroke='#9B9EAC' />
                    <YAxis
                        dataKey='calories'
                        yAxisId='left'
                        orientation='left'
                        hide='true'

                    />
                    <YAxis
                        dataKey='Kilogram'
                        yAxisId='right'
                        orientation='right'
                        type='number'
                        domain={['dataMin -1', 'dataMax']}
                        tickCount='3'
                        tickSize='0'
                        axisLine={false}
                        tickMargin='30'
                        width={45}
                        stroke='#9B9EAC'
                    />
                    <Tooltip />
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
                        yAxisId='right'
                        fill='#282D30'
                        radius={[25, 25, 0, 0]}
                        barSize={7} />
                    <Bar
                        name="Calories brûlées(kCal)"
                        dataKey="calories"
                        yAxisId='left'
                        fill="#E60000"
                        radius={[25, 25, 0, 0]}
                        barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}