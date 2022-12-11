import React from 'react';
import { Doughnut } from 'react-chartjs-2';



function DoughnutChart(){
    const data={
        labels:['jan','Feb','Mar','Apr','May','jun','jul'],
    
    datasets:[
        {
            label:"Sales 2020 (M)",
            data:[3,2,3,6,5,6,4],
            backgroundColor:[
                'rgba(255,99,132,1)',
                'rgba(255,205,86,1)',
                'rgba(65,162,236,1)',
                'rgba(255,160,64,1)',
                'rgba(153,102,255,1)',
                'rgba(180,102,255,1)',
                'rgba(153,150,230,1)',
            ]
        }
    ]
}
    const options={
        title:{
            display: true,
            text:'Doughnut Chart'
        }
    }
return <Doughnut data={data} options={options}/> 
}

export default DoughnutChart;