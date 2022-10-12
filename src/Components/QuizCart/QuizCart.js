import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';


export const QuizCart = ({ quiz }) => {
    const { id, name, logo, total } = quiz;

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/quiz/${id}`)

    }

    return (
        <div className="flex p-2 rounded-xl flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-gray-900 text-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-4">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                    <img src={logo} alt="" />
                </div>
            </div>
            <p className="mb-2 font-bold mx-3">{name}</p>
            <div className='flex justify-between items-center mx-2'>
                <p className="text-sm leading-5">
                    Total Quiz: {total}
                </p>
                <button
                    onClick={handleNavigate}
                    className="inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
                    aria-label="Start quiz"
                    title="Start quiz"
                >
                    Start quiz
                    <ArrowRightIcon className="h-6 w-5 ml-1 font-bold text-white" />
                </button>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
    );
}