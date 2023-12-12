import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import girlImage from '../assets/girl.jpg'


export default function Home() {


    return (
        <div name='home' className='w-full pb-4 bg-[#d8eaff]'>
            {/* container */}

            <div className='max-w-[1000px] flex flex-col mx-auto p-4 justify-center w-full pt-32 pb-16'>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div className='background-custom'></div>
                <div >
                    
                    {/* <p className='text-[#899555]'>Hi, my name is</p> */}
                    <h1 className='text-4xl sm:text-7xlf font-bold text-[#899555]'>
                        Elham Mirzavand
                    </h1>
                    <h2 className='text-4xl sm:text-7xlf font-bold text-[#501c1c]'>
                        Full-Stack Developer
                    </h2>
                    <p className='text-[#501c1c] py-4 max-w-[700px]'>
                        I am a full-stack developer specializing in user-friendly web applications.
                        Currently, I am more immersed in front-end development, particularly working with technologies like React.
                    </p>
                    <div >
                        <Link to='work' smooth={true} duration={500}>
                            <button className='text-[#501c1c] group border-2 border-[#a1b1c1] px-6 py-3 my-2 flex items-center hover:bg-[#a1b1c1] hover:border-[#a1b1c1] '>
                                View Work
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3' />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
                


            </div>

        </div>
    )
}
