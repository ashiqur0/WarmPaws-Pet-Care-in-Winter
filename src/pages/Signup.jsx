import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
    const { createUser, setUser } = use(AuthContext);

    const handleSignup = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.vlaue;
        const password = event.target.password.value;
        console.log(name, email, photo, password);

        // Toast Message
        toast.success('Sign up seccess...');
        // toast.error('Logged In Failed');

        createUser(email, password)
        .then(userInfo => {
            const user = userInfo.user;
            // console.log(user);
            setUser(user);
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

        event.target.reset();
    }

    return (
        <div className="md:w-7xl md:mx-auto mx-3 flex justify-center items-center min-h-screen md:py-10">
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

                        <label className="label mt-4">Photo URL</label>
                        <input
                            type="txt"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="Photo"
                            name='photo'
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

                        {/* Google Login Button */}
                        <button className='btn btn-outline btn-secondary w-full mt-2'><FcGoogle size={24} /> Sign up with Google</button>

                        <p className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Already have an account ? <Link to='/login' className='text-green-500 hover:underline'>Login</Link></p>
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