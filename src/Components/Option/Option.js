import React from 'react';

const Option = ({ option, btnHandler }) => {

    return (
        <div onClick={() => btnHandler(option)} className='border rounded-lg p-3 flex justify-start items-center hover:bg-indigo-100' >
            <p className='ml-5 w-full' >{option}</p>
        </div>
    );
};

export default Option;