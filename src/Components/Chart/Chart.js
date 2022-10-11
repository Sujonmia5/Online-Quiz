import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const RenderLineChart = () => {
    const quiz = useLoaderData()
    console.log(quiz.data);
    const data = quiz.data;
    return (
        <div className='flex justify-center items-center mt-24'>
            <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </div>
    );
};
export default RenderLineChart;