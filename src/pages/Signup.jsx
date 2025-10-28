import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const handleSignup = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        // Toast Message
        toast.success('Logged In...');
        toast.error('Logged In Failed');

        event.target.reset();
    }

    return (
        <div className="md:w-7xl md:mx-auto mx-3 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md shrink-0 shadow-2xl bg-slate-800 px-8 py-10 rounded-md">
                <h1 className='text-center text-3xl font-semibold mb-5'>Sign up</h1>

                <form
                    onSubmit={handleSignup}
                    className=""
                >
                    <fieldset className="fieldset">

                        {/* Email Input Field */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="Name"
                            name='name'
                            required
                        />                        
                        
                        <label className="label mt-4">Email</label>
                        <input
                            type="email"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="Email"
                            name='email'
                            required
                        />

                        {/* Password Input Field */}
                        <label className="label mt-4">Password</label>
                        <input
                            type="password"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="Password"
                            name='password'
                            required
                        />

                        {/* Login Button */}
                        <button type='submit' className="bg-lime-600 hover:bg-lime-500 text-[14px] py-2 px-4 rounded-md mt-7">Sign up</button>

                        <p className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Already have an account ? <Link to='/auth/login' className='text-green-500 hover:underline'>Login</Link></p>
                    </fieldset>
                </form>
            </div>

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
        </div>
    );
};

export default Signup;