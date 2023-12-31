import React, { useState } from 'react'
import Logo from '../assets/e-m4.png'
import Resume from '../documents/Mirzavand.pdf'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
export default function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-nav-custom-color text-gray-300'>
            <div className="logo">
                <img src={Logo} alt="logo" style={{ width: '70px' }} />
            </div>
            {/* menu */}

            <ul className="hidden md:flex">
                <li className='text-white'><Link to='home' smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='text-white'><Link to='about' smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='text-white'><Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='text-white'><Link to='work' smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className='text-white'><Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}

            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-nav-custom-color flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl text-white' >
                    <Link to='home' smooth={true} duration={500} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl text-white'><Link to='about' smooth={true} duration={500} onClick={handleClick}>
                    About
                </Link></li>
                <li className='py-6 text-4xl text-white'><Link to='skills' smooth={true} duration={500} onClick={handleClick}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl text-white'><Link to='work' smooth={true} duration={500} onClick={handleClick}>
                    Work
                </Link></li>
                <li className='py-6 text-4xl text-white'><Link to='contact' smooth={true} duration={500} onClick={handleClick}>
                    Contact
                </Link></li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/elham-mirzavand/'>
                            Linkedin <FaLinkedin size={30}
                            />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white' href='https://github.com/elhammmi'>
                            FaGithub <FaGithub size={30}
                            />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-white' href='mailto:elham.mirzavand@gmail.com'>
                            Email <HiOutlineMail size={30}
                            />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-white' href={Resume}>
                            Resume <BsFillPersonLinesFill size={30}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
