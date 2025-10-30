import React, { use, useState } from 'react';
import logo from '/logo.png'
import { IoCloseOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/services'>Services</NavLink>
    <NavLink to='/auth/myprofile'>MyProfile</NavLink>
</>

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Dynamically Define korte hobe
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Seccess Logout...');
            })
            .catch(error => {
                toast.error('Logout Failed with: ', error.code);
            })
    }

    return (
        <section className='p-4 shadow-md shadow-gray-800 bg-slate-950 '>
            <nav className='md:flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex justify-between items-center cursor-pointer'>

                    <Link to='/' className='flex items-center gap-3 md:gap-3'>
                        <img className='w-7 lg:w-10' src={logo} alt="" />
                        <h1 className='font-inter font-xl lg:text-2xl font-bold bg-linear-to-r from-lime-700 to-green-700 bg-clip-text text-transparent'>WarmPaws – Pet Care in Winter</h1>
                    </Link>

                    <button className='md:hidden cursor-pointer bg-linear-to-r from-green-700 to-lime-700 bg-clip-text mr-2'
                        onClick={() => setOpen(!open)}>
                        {open ? <IoCloseOutline /> : <CiMenuFries />}
                    </button>

                    <ul className={`z-10 w-full text-center md:hidden flex flex-col absolute duration-1000 hover:shadow-sm py-1 rounded-sm bg-linear-to-r from-lime-700 to-green-700 px-4 text-white text-md
                        ${open ? 'top-16 right-0' : '-top-64 right-0'}
                        `}>{links}
                        {
                            user ? <>
                                <NavLink to='/'>Logout</NavLink>
                            </>
                                :
                                <>
                                    <NavLink to='/auth/login'>Login</NavLink>
                                    <NavLink to='/auth/signup'>Signup</NavLink>
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
                            <NavLink
                                onClick={handleLogOut}
                                to='/' className="py-2 rounded-sm font-semibold hover:bg-slate-800 px-10 bg-slate-900"
                            >
                                Logout</NavLink>
                            <Link
                                to='/auth/myprofile'
                                className='w-10 border border-green-500 rounded-full ml-3 cursor-pointer'
                            >
                                <img
                                    className='rounded-full'
                                    src={`${user ? user?.photoURL : "https://img.icons8.com/?size=100&id=42384&format=png&color=000000"}`} title={user.displayName} />
                            </Link>
                        </>
                            :
                            <>
                                <Link to='/auth/login' className="py-2 rounded-sm font-semibold hover:bg-slate-800 px-10 bg-slate-900">Login</Link>
                                <Link to='/auth/signup' className="py-2 rounded-sm font-semibold hover:bg-slate-800 px-10 bg-slate-900">Signup</Link>
                            </>
                    }
                </div>
            </nav>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </section>
    );
};

export default Navbar;