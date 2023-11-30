import React from 'react'

export default function About() {
    return (
        <div name='about' className='w-full bg-[#d8eaff] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full '>
                <div className='max-w-[1000px]  w-full px-4 grid grid-cols-2 sm:grid-cols-1 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-4xl text-[#501c1c] font-bold inline border-b-4 border-[#899555]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px]  w-full px-4 grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-2xl text-[#501c1c] font-bold inline border-b-4 border-[#899555]'>
                            Hi. My name is Elham Mirzavand, nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div className='pb-8 pl-4 text-[#501c1c]'>
                        <p>
                            I am passionate about learning new technologies and building user-friendly applications.
                            My educational background includes a Master of Science in Information Technology and a Bachelor of Science in Computer Science.
                            I specialized in creating and developing diffrent user-friendly web applications 
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations.
                            
                        </p>
                        <br />
                        <p>
                        My skill set encompasses a broad range of expertise in modern web development technologies, including React.js, Node.js, and CSS.
                            I am skilled in version control systems like Git and proficient in utilizing GitHub, to streamline collaborative workflows. 
                            I have knowledge in database management, having worked with MySQL, MS SQL, and MongoDB.
                            I bring a dynamic skill set, combining web development with expertise in DevOps and CI/CD, to deliver efficient and scalable solutions.
                            
                        </p>
                        <br />
                        <p>
                        Let's connect and explore how my experience and skills can contribute to something extraordinary.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
