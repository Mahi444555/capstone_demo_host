import React from "react";

import {Line} from "react-chartjs-2";

function LineChart(){
    const data={
        labels:[
            'jan',
            'Feb',
            'Mar',
            'April',
            'May',
            'June',
            
        ],
    
    datasets:[
        {
            label:'Sales 2020(M)',
            data:[3,2,2,1,5,8],
            borderColor:['rgba(255,206,86,0.2'],
            backgroundColor:['rgba(255,206,86,0.2)'],
            pointBackgroundColor:'rgba(255,206,86,0.2)',
            pointBorderColor:'rgba(255,206,86,0.2  )',
        },
        {
            label:'Sales 2021(M)',
            data:[1,3,2,2,3,7],
            borderColor:['rgba(54,162,235,0.2'],
            backgroundColor:['rgba(54,162,235,0.2)'],
            pointBackgroundColor:'rgba(54,162,235,0.2)',
            pointBorderColor:'rgba(54,162,235,0.2)',
        },
        {
            label:'Sales 2022(M)',
            data:[4,5,1,6,4],
            borderColor:['rgba(67,180,200,0.2'],
            backgroundColor:['rgba(67,180,200,0.2)'],
            pointBackgroundColor:'rgba(67,180,200,0.2)',
            pointBorderColor:'rgba(67,180,200,0.2)',
        },
        {
            label:'Sales 2018(M)',
            data:[4,5,1,6,4],
            borderColor:['rgba(87,140,250,0.2'],
            backgroundColor:['rgba(87,140,250,0.2)'],
            pointBackgroundColor:['rgba(87,140,250,0.2)'],
            pointBorderColor:'rgba(87,140,250,0.2)',
        },
    ]
}
const options={
    title:{
        display:true,
        text:'Line Chart'
    },
    scales:{
        yAxes:[
            {
                ticks:{
                    min:0,
                    max:10,
                    stepSize:1
                }
            }
        ]
    }
}
return <Line data={data} options={options} />;
}


export default LineChart;