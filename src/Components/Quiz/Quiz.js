import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizs = useLoaderData()
    console.log(quizs.data);
    const { name, questions
    } = quizs.data
    return (
        <div className='mt-36 text-indigo-400 font-mono'>
            <h1 className='text-5xl font-bold'>Quiz Of {name}</h1>
            <div className='mt-6'>
                {
                    questions.map(question => <Question key={question.id} question={question} />)
                }
            </div>
        </div>
    );
};

export default Quiz;