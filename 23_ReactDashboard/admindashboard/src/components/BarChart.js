import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart(){
    const data={
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[
            {
                label:"Sales 2020 (M)",
                data:[3,2,2,6,4],
                borderColor:[
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)'
                ],
                backgroundColor:[
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)'
                ]
            },
            {
                label:"Sales 2021 (M)",
                data:[5,2,4,6,4],
                borderColor:[
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)'
                ],
                backgroundColor:[
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)',
                    'rgba(240,220,120,0.2)'
                ]
            },
            {
                label:"Sales 2021 (M)",
                data:[4,6,5,3,4],
                borderColor:[
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)'
                ],
                backgroundColor:[
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)'
                ]
            },
            {
                label:"Sales 2021 (M)",
                data:[4,6,5,3,4],
                borderColor:[
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)'
                ],
                backgroundColor:[
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)',
                    'rgba(255,80,120,0.2)'
                ]
            }
        ]
    }

    const options={
        title:{
            display:true,
            text:"Bar Chart",
        },
        scales:{
            yaxes:[
                {
                    ticks:{
                        min:0,
                        max:6,
                        stepSize:1
                    }
                }
            ]
        }
    }
    return <Bar data={data} options={options}/>;
}

export default BarChart;