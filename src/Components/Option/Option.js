import React from 'react';

const Option = ({ option, btnHandler }) => {

    return (
        <label onClick={() => btnHandler(option)} htmlFor={option} className='border rounded-lg p-3 flex justify-start items-center hover:bg-indigo-100' >
            <input type="radio" className="radio radio-primary" />
            <p className='ml-5 w-full' >{option}</p>
        </label>
    );
};

export default Option;