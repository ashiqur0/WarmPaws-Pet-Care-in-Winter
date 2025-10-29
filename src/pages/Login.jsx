import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { login, googleSignIn } = use(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        toast.success('Logged In...');
        toast.error('Logged In Failed');

        login(email, password)
            .then(() => {
                alert('login success');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            })

        event.target.reset();
    }

    return (
        <div className="md:w-7xl md:mx-auto mx-3 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md shrink-0 shadow-2xl bg-slate-800 px-8 py-10 rounded-md">
                <h1 className='text-center text-3xl font-semibold mb-5'>Login</h1>

                <form
                    onSubmit={handleLogin}
                    className=""
                >
                    <fieldset className="fieldset">

                        {/* Email Input Field */}
                        <label className="label">Email</label>
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

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* Login Button */}
                        <button type='submit' className="bg-lime-600 hover:bg-lime-500 text-[14px] py-2 px-4 rounded-md mt-7">Login</button>

                        {/* Google Login Button */}
                        <button
                            onClick={googleSignIn}
                            className='btn btn-outline btn-secondary w-full mt-2'
                        >
                            <FcGoogle size={24} /> Login with Google</button>

                        <p className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Dont’t Have An Account ? <Link to='/signup' className='text-blue-500 hover:underline'>Register</Link></p>
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

export default Login;