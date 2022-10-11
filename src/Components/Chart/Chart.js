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
                        <XAxis dataKey="name" stroke="#FFFFFF" />
                        <YAxis stroke="#FFFFFF" />
                        <Tooltip stroke="#FFFFFF" />
                        <Area type="monotone" dataKey="total" stroke="#FFFFFF" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-24 mx-auto w-[90%] md:w-[50%] h-[300px]'>
                <ResponsiveContainer>
                    <ComposedChart
                        data={data} stroke="#FFFFFF">
                        <CartesianGrid stroke="#FFFFFF" />
                        <XAxis dataKey="name" scale="band" stroke="#FFFFFF" />
                        <YAxis stroke="#FFFFFF" />
                        <Tooltip stroke="#FFFFFF" />
                        <Legend />

                        <Area type="monotone" dataKey="quiz" fill="white" stroke="#EAC0C0" />
                        <Line type="monotone" dataKey="total" stroke="#EAC0C0" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};
export default RenderLineChart;