import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '/logo.png'
import { IoCloseOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const links = <>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/myprofile'>MyProfile</Link>
    </>

    const [open, setOpen] = useState(false);
    const user = false;

    return (
        <section className='p-4 shadow-md shadow-gray-800 bg-slate-900 '>
            <nav className='md:flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex justify-between items-center cursor-pointer'>

                    <Link to='/' className='flex items-center gap-1 md:gap-3'>
                        <img className='w-7 lg:w-10' src={logo} alt="" />
                        <h1 className='font-inter font-xl lg:text-2xl font-bold bg-linear-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent'>WarmPaws – Pet Care in Winter</h1>
                    </Link>

                    <button className='md:hidden cursor-pointer text-violet-700 mr-2'
                        onClick={() => setOpen(!open)}>
                        {open ? <IoCloseOutline /> : <CiMenuFries />}
                    </button>

                    <ul className={`md:hidden flex flex-col absolute duration-1000 hover:shadow-sm py-1 rounded-sm bg-linear-to-r from-violet-700 to-purple-700 px-4 text-white text-md
                        ${open ? 'top-16 right-6' : '-top-64 right-6'}
                        `}>{links}
                    </ul>
                </div>

                <div>
                    <ul className='md:flex hidden gap-8 font-semibold text-white'>
                        {links}
                    </ul>
                </div>

                {/* <button className='md:flex hidden items-center gap-2 px-4 py-2 text-white font-bold rounded-md cursor-pointer bg-linear-to-br from-violet-600 to-purple-500'>
                    <FaGithub />
                    <a href='https://github.com/ashiqur0' target='_blank'>Contribute</a>
                </button> */}
                <div className='md:flex hidden gap-5'>
                    {
                        user ? <Link to='/' className="btn bg-slate-900">Logout</Link> :
                            <>
                                <Link to='/login' className="btn bg-slate-900">Login</Link>
                                <Link to='/signup' className="btn bg-slate-900">Signup</Link>
                            </>
                    }
                </div>
            </nav>
        </section>
    );
};

export default Navbar;