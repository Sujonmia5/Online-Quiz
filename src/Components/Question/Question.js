import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const Question = (props) => {
    console.log(props.question);
    const { question, options, correctAnswer, id } = props.question;
    return (
        <div className="border mx-auto mt-8 shadow-lg w-[90%] md:w-[60%] px-8 pb-8 pt-3 font-mono">
            <div className='flex justify-between'>
                <p className='text-2xl font-semibold'>{question}</p>
                <div>
                    <EyeIcon className='h-6 w-6' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                {
                    options.map((option, idx) => <Option key={idx} option={option} />)
                }
            </div>
        </div>
    );
};

export default Question;