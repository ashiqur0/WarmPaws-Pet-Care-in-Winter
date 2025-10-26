import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '/logo.png'
import { IoCloseOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
    const links = <>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/myprofile'>MyProfile</Link>
    </>

    const [open, setOpen] = useState(false);

    // Dynamically Define korte hobe
    const user = true;
    const displayName = 'Ashiqur';

    return (
        <section className='p-4 shadow-md shadow-gray-800 bg-slate-950 '>
            <nav className='md:flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex justify-between items-center cursor-pointer'>

                    <Link to='/' className='flex items-center gap-3 md:gap-3'>
                        <img className='w-7 lg:w-10' src={logo} alt="" />
                        <h1 className='font-inter font-xl lg:text-2xl font-bold bg-linear-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent'>WarmPaws – Pet Care in Winter</h1>
                    </Link>

                    <button className='md:hidden cursor-pointer text-violet-700 mr-2'
                        onClick={() => setOpen(!open)}>
                        {open ? <IoCloseOutline /> : <CiMenuFries />}
                    </button>

                    <ul className={`w-full text-center md:hidden flex flex-col absolute duration-1000 hover:shadow-sm py-1 rounded-sm bg-linear-to-r from-violet-700 to-purple-700 px-4 text-white text-md
                        ${open ? 'top-16 right-0' : '-top-64 right-0'}
                        `}>{links}
                        {
                            user ? <>
                                <Link to='/'>Logout</Link>
                            </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Signup</Link>
                                </>
                        }
                    </ul>
                </div>

                <div>
                    <ul className='md:flex hidden gap-8 font-semibold text-white'>
                        {links}
                    </ul>
                </div>

                <div className='md:flex hidden gap-3'>
                    {
                        user ? <>
                            <Link to='/' className="btn px-10 bg-slate-900">Logout</Link>
                            <div className='w-10 bg-white p-1 rounded-full ml-3 cursor-pointer'>
                                <img src="https://img.icons8.com/?size=100&id=42384&format=png&color=000000" title={displayName} />
                            </div>
                        </>
                            :
                            <>
                                <Link to='/login' className="btn px-10 bg-slate-900">Login</Link>
                                <Link to='/signup' className="btn px-10 bg-slate-900">Signup</Link>
                            </>
                    }
                </div>
            </nav>
        </section>
    );
};

export default Navbar;