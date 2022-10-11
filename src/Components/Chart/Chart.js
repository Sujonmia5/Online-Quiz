import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, ComposedChart, Legend, Bar, Line } from 'recharts';


const RenderLineChart = () => {
    const quiz = useLoaderData()
    const data = quiz.data;
    return (
        <>
            <div className='mt-24 mx-auto w-[90%] md:w-[60%] h-[300px]'>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-24 mx-auto w-[90%] md:w-[50%] h-[300px]'>
                <ResponsiveContainer>
                    <ComposedChart
                        data={data}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="quiz" fill="#8884d8" stroke="#8884d8" />

                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};
export default RenderLineChart;