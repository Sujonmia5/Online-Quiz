import React from 'react';

const Option = ({ option, btnHandler }) => {

    console.log(option)
    return (
        <div className='border rounded-lg p-3 flex justify-start items-center hover:bg-indigo-100' onClick={() => btnHandler(option)}>
            <input type="radio" id={option} name="drone" value="dwey" />
            <label for={option}>
                <p className='ml-5 w-full' >{option}</p>
            </label>
        </div>
    );
};

export default Option;