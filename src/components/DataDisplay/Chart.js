import React from 'react'
import { Bar } from 'react-chartjs-2'

function Chart({ data }) {
    const ChartData = {
        labels: ['Confirmed', 'Recovered', 'Death'],
        datasets: [{
            data: [
                data.confirm ? data.confirm : 0, data.recovered ? data.recovered : 0, data.death ? data.death : 0
            ],
            backgroundColor: [
                '#1774dd',
                '#25bf11',
                '#d80a0a'
            ],
        }
        ]
    }

    const renderChart = () => {
        return data.confirm ?
            <Bar data={ChartData} options={{
                title: {
                    display: false,
                },
                legend: {
                    display: false,
                }
            }}
            ></Bar> : null
    }

    return (
        <div className="chart-container">
            {renderChart()}
        </div>
    )
}
export default Chart
