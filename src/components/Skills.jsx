import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github2.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import AWS from '../assets/aws.png';
import NEXTJS from '../assets/NextjsLogo.png';
import MySQL from '../assets/mysql.png';
export default function Skills() {
    return (
        <div name='skills' className='w-full bg-[#d8eaff] text-[#501c1c]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#899555]'>Skills</p>
                    <p className='py-4 font-semibold text-[#501c1c]'>These are the technologies I have worked with</p>
                </div>
                <div className='w-full grid grid-cols-4 gap-4 text-center py-8'>
                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 text-[#8892b0]'>HTML</p>
                    </div>

                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                        <p className='my-4 text-[#8892b0]'>CSS</p>
                    </div>


                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt='JAVASCRIPT icon' />
                        <p className='my-4 text-[#8892b0]'>JAVASCRIPT</p>
                    </div>


                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt='REACT icon' />
                        <p className='my-4 text-[#8892b0]'>REACT</p>
                    </div>


                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt='GITHUB icon' />
                        <p className='my-4 text-[#8892b0]'>GITHUB</p>
                    </div>

                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt='NODE JS icon' />
                        <p className='my-4 text-[#8892b0]'>NODE JS</p>
                    </div>

                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MySQL} alt='MySQL icon' />
                        <p className='my-4 text-[#8892b0]'>MySQL</p>
                    </div>

                    <div className='shawod-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={NEXTJS} alt='NEXT JS icon' />
                        <p className='my-4 text-[#8892b0]'>NEXT JS</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
