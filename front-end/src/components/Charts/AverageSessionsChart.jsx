import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from "recharts";
import { UserContext } from "../../utils/context";
import { useContext } from "react";

export function AverageSessionsChart() {

    const context = useContext(UserContext);
    console.log(context.averageSessions.sessions)
    if (!context.hasLoaded) {
        return <></>;
    }

    //Format Xaxis ticks
    //@param {Number} day - day of the week
    //@returns corresponding letter of the day

    const xAxisFormatter = (day) => {
        switch (day) {
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            case 7: return 'D';
            default: return '';
        }
    }

    // Format Tooltip
    // @param {array} payload - source data
    // @param {boolean} active - is Tootip active
    // @returns the value when a dot on the line is pointed

    function CustomToolTipSessionDuration({ active, payload }) {
        if (active) {
            return (
                <div className='sessionDurationChartTooltip'>
                    <div>{`${payload[0].value}`}min</div>
                </div>
            )
        }
        return null
    }

    function customMouseMove(e) {
        let sessionWrap = document.querySelector('.LinechartContainer ');

        if (e.isTooltipActive) {
            let windowWidth = sessionWrap.offsetWidth;
            let mouseXpercent = Math.floor(
                (e.activeCoordinate.x / windowWidth) * 100
            );

            sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%, rgba(0,0,0,0.1) 100%)`;
        }
        else {
            sessionWrap.style.background = 'transparent'
        }
    }

    function customOnMouseOut() {
        let sessionWrap = document.querySelector('.LinechartContainer');
        sessionWrap.style.background = 'transparent'
    }


    return (
        <div className="LinechartContainer">
            <h2 className="LineChartTitle white">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={context.averageSessions.sessions}
                    margin={{
                        top: 80,
                        right: 8,
                        left: 8,
                        bottom: 40
                    }}
                    onMouseMove={(e) => customMouseMove(e)}
                    onMouseOut={() => customOnMouseOut()}
                >
                    <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis
                        dataKey="day"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        tickFormatter={xAxisFormatter}
                        stroke="rgba(255, 255, 255, 0.5)"
                        tickMargin={40}

                    />
                    <YAxis hide="true" domain={["dataMin", "dataMax"]} />
                    <Tooltip content={<CustomToolTipSessionDuration />} cursor={false} />
                    <Line
                        dataKey="sessionLength"
                        type="natural"
                        stroke="#FFFFFF"
                        dot={false}
                        strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );

}