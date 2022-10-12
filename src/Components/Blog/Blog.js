import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-4xl mt-10 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Qus: What is the purpose of React Router?</a>
                    <p className="mt-2">Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className="flex items-center justify-between mt-4">

                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-1/309272493_476591194509615_5212622540766778464_n.jpg?stp=c0.25.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG0JgN0plAdFm3akYyMdVZ2wV5cgicpKOzBXlyCJyko7Lbu8PhtoLj4fY-At1IrNV7GnBCmBG_DdAdP3pF11qQQ&_nc_ohc=SdGt5DGaUZkAX9x0jRT&_nc_ht=scontent.fdac34-1.fna&oh=00_AT9FBuFsnMAfDBy2EBpDhkozOjv63MzVJX5uMIpqri5QqQ&oe=6349CC84" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <Link to='https://www.linkedin.com/in/md-sujon-mia-547a51243/' className="hover:underline dark:text-gray-400">Md Sujon</Link>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl mt-10 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Qus: How dose context API works?</a>
                    <p className="mt-2">Ans: The ReactContext API is a way for a React app to effectively create global variables that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to children to parents. Context is also referred to as a simple, lightweight method for managing state using Redux.</p>
                </div>
                <div className="flex items-center justify-between mt-4">

                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-1/309272493_476591194509615_5212622540766778464_n.jpg?stp=c0.25.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG0JgN0plAdFm3akYyMdVZ2wV5cgicpKOzBXlyCJyko7Lbu8PhtoLj4fY-At1IrNV7GnBCmBG_DdAdP3pF11qQQ&_nc_ohc=SdGt5DGaUZkAX9x0jRT&_nc_ht=scontent.fdac34-1.fna&oh=00_AT9FBuFsnMAfDBy2EBpDhkozOjv63MzVJX5uMIpqri5QqQ&oe=6349CC84" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <Link to='https://www.linkedin.com/in/md-sujon-mia-547a51243/' className="hover:underline dark:text-gray-400">Md Sujon</Link>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl mt-10 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">qus: what is usehref?</a>
                    <p className="mt-2">Ans: The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
                </div>
                <div className="flex items-center justify-between mt-4">

                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-1/309272493_476591194509615_5212622540766778464_n.jpg?stp=c0.25.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG0JgN0plAdFm3akYyMdVZ2wV5cgicpKOzBXlyCJyko7Lbu8PhtoLj4fY-At1IrNV7GnBCmBG_DdAdP3pF11qQQ&_nc_ohc=SdGt5DGaUZkAX9x0jRT&_nc_ht=scontent.fdac34-1.fna&oh=00_AT9FBuFsnMAfDBy2EBpDhkozOjv63MzVJX5uMIpqri5QqQ&oe=6349CC84" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <p className="text-gray-200">Md Sujon</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;