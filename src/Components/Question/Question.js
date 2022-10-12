import React from 'react';
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Question = (props) => {
    const [open, setOpen] = useState(false)

    const { question, options, correctAnswer, } = props.question;

    const notify = () => toast.success(' Correct Answer', {
        position: "top-center",

    });
    const notify2 = () => toast("Wrong Answer", {
        position: "top-center",
    });
    const notify3 = () => {
        toast(`${correctAnswer}`)
        return (
            <EyeSlashIcon className='h-6 w-6' />
        )
    };

    const btnHandler = (id) => {
        console.log('click')
        if (id === correctAnswer) {
            notify()
        } else {
            notify2()
        }

    }
    return (
        <div className="border mx-auto mt-8 shadow-lg w-[90%] md:w-[60%] px-8 pb-8 pt-3 font-mono">

            <div className='flex justify-between'>
                <p className='text-2xl font-semibold'>{question}</p>
                <div onClick={() => setOpen(!open)} >
                    {
                        open ? notify3() : <EyeIcon className='h-6 w-6' />
                    }
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                {
                    options.map((option, idx) => <Option key={idx} btnHandler={btnHandler} option={option} />)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;