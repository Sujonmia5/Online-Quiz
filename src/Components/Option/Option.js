import React from 'react';

const Option = ({ option }) => {
    console.log(option)
    return (
        <label for={option} className='border rounded-lg p-3 flex justify-start items-center hover:bg-indigo-100'>
            <input type="radio" id={option} name="drone" value="dewey" />
            <p className='ml-5' >{option}</p>
        </label>
    );
};

export default Option;