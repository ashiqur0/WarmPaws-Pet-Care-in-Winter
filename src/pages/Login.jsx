import { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { login, signInWithGoogle } = use(AuthContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();// return a function

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
            });

        event.target.reset();
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('SignIn Success...');
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(err => {
                const errorCode = err.code;
                toast.fail(errorCode);
            });
    }

    return (
        <div className="md:w-7xl md:mx-auto mx-3 flex justify-center items-center md:py-10">
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
                            onChange={e => {
                                setEmail(e.target.value);
                                setError('');
                            }
                            }
                        />

                        {/* Password Input Field */}
                        <label className="label mt-4">Password</label>
                        <div className='flex items-center'>
                            <input
                                type={show ? 'txt' : 'password'}
                                className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm w-full"
                                placeholder="Password"
                                name='password'
                                required
                                onChange={() => setError('')}
                            />
                            <p
                                onClick={() => setShow(!show)}
                                className='cursor-pointer -ml-8'
                            >
                                {show && <FaRegEye size={16} /> || <FaRegEyeSlash size={16} />}</p>
                        </div>


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
                            type = 'button'
                            onClick={handleSignInWithGoogle}
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