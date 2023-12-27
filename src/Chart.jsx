import React from "react";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = (props) => {
    return (
        <Line
            width={160}
            height={160}
            options={{
                responsive: true,
                plugins: {
                    legend: false,
                    title: {
                        display: true,
                        text: 'График температуры',
                    },
                },
            }}
            data={props.hoursData}
        />
    );
};
export default Chart;
