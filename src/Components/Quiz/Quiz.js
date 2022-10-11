import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizs = useLoaderData()

    const { name, questions } = quizs.data
    return (
        <div>
            <div className='text-right ml-auto mt-12 text-indigo-400 border shadow-xl w-44 sticky top-0 mr-7 px-4 py-4 text-2xl font-bold'>
                <h1>Total Quiz {questions.length}</h1>
            </div>
            <div className='mt-20 text-indigo-400 font-mono'>
                <h1 className='text-5xl font-bold'>Quiz Of {name}</h1>
                <div className="mt-12">
                    {
                        questions.map(question => <Question key={question.id} question={question} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;