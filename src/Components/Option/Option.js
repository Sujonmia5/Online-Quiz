import React from 'react';

const Option = ({ option, btnHandler }) => {

    console.log(option)
    return (
        <div id="option" className='border rounded-lg p-3 flex justify-start items-center hover:bg-indigo-100' onClick={() => btnHandler(option)}>
            <input type="radio" name="radio-2" id="option" className="radio radio-primary" />
            <p className='ml-5 w-full' >{option}</p>

        </div>
    );
};

export default Option;