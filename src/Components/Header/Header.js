import React from 'react';
import Lottie from 'lottie-react'
import Quiz from '../../assets/quiz-bump.json'
import Exam from '../../assets/exams.json'

const Header = () => {
    return (
        <div className='dark:bg-gray-800'>
            <div className="relative bg-gray-400">
                <div className="absolute inset-x-0 bottom-0 bg-gray-800">
                    <svg
                        viewBox="0 0 224 12"
                        fill="currentColor"
                        className="w-full  -mb-1 text-white"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                    </svg>
                </div>
                <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative md:flex max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                        <div className='h-48 w-60 absolute top-0 left-0 mx-auto'>
                            <Lottie animationData={Quiz} loop={true} />
                        </div>
                        <h2 className="mb-6 z-50 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            The online quiz maker
                            <br className="hidden md:block" />
                            that's easy to use,{' '}
                            <span className="relative inline-block">
                                fun and fully customizable{' '}
                            </span>
                        </h2>
                        <div className='h-44 w-60 absolute -top-10 hidden md:block -right-24 '>
                            <Lottie animationData={Exam} loop={true} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;