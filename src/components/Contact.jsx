import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
        <form method="POST" action="https://getform.io/f/adecced2-be7f-4144-b580-a59e721b7514" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
        </div>
            <input className='bg-[#ccd6f6] p-2' type="text" name='name' placeholder='Name'/>
            <input className='my-4 bg-[#ccd6f6] p-2' type="email" name='email' placeholder='Email'/>
            <textarea className='bg-[#ccd6f6] p-2' rows={10} cols={10} placeholder='Message' />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}   
