import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import Loading from '../components/Loading';

const Login = () => {
    const { login, loading, setLoading, auth, googleProvider } = use(AuthContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const location = useLocation();
    const navigate = useNavigate();// return a function
    // console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
            .then(() => {
                toast.success('Logged In...');
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(err => {
                const errorCode = err.code;
                setError(errorCode);
                toast.error(errorCode);
            })

        event.target.reset();
    }

    return (
        <div className="md:w-7xl md:mx-auto mx-3 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md shrink-0 shadow-2xl bg-slate-800 px-8 py-10 rounded-md">
                <h1 className='text-center text-3xl font-semibold mb-5'>Login your account</h1>

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
                            onChange={e=> setEmail(e.target.value)}
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

                        {/* Forgot password */}
                        <Link
                            onClick={() => navigate('/auth/forgotpassword')}
                            state={email}
                            className='text-blue-500'
                        >
                            Forgot password?</Link>

                        {
                            // Validation
                            error && <p className='text-red-400 text-xs'>{error}</p>
                        }

                        {/* Login Button */}
                        <button type='submit' className="bg-lime-600 hover:bg-lime-500 text-[14px] py-2 px-4 rounded-md mt-7">Login</button>

                        {/* Google Login Button */}
                        <button
                            onClick={function () {
                                setLoading(true);
                                signInWithPopup(auth, googleProvider);
                                if (loading) {
                                    <Loading></Loading>
                                }
                                toast.success('Sign up seccess...');

                                return navigate(`${location.state ? location.state : '/'}`);
                            }}
                            className='btn btn-outline btn-secondary w-full mt-2'
                        >
                            <FcGoogle size={24} /> Login with Google</button>

                        <p
                            className='text-center font-semibold text-[0.875rem] text-primary mt-3'>Dont’t Have An Account ?
                            <Link
                                state={location.state}
                                to='/auth/signup'
                                className='text-blue-500 hover:underline'
                            >
                                Register</Link>
                        </p>

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