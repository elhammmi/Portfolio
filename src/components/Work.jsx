import React from 'react'
import { data } from "../data/data.js";

export default function Work() {
    const project = data;
    console.log(project)
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] flex flex-col mx-auto p-4 justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Work and Certificates</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                {/* grid-container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Items */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                                        flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {item.name}
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href={item.live}>
                                        <button className='bg-white text-gray-700 font-bold text-lg text-center rounded-lg px-4 py-3 m-2'>Demo</button>
                                    </a>
                                    {item.github !== '' ? <a href={item.github}>
                                        <button className='bg-white text-gray-700 font-bold text-lg text-center rounded-lg px-4 py-3 m-2'>Code</button>
                                    </a> : ''
                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
