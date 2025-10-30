import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const { createUser, setUser, updateUser, loading, setLoading, auth, googleProvider } = use(AuthContext);

    const [passwordError, setPasswordError] = useState('');
    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        console.log(name, email, photo, password);

        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordFormat.test(password)) {
            return setPasswordError('Password shoud contain Uppercase, Lowercase and atleast 6 character');
        }

        createUser(email, password)
            .then(userInfo => {
                const user = userInfo.user;

                // update user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success('Sign up seccess...');
                        navigate(`${location.state ? location.state : '/'}`);
                    })
                    .catch(error => {
                        toast.error(error.code);
                        setUser(user);
                    })
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                toast.error(error.code);
            });

        event.target.reset();
    }

    return (
        <div className="md:w-7xl md:mx-auto mx-3 flex justify-center items-center min-h-screen md:py-10">
            <div className="w-full max-w-md shrink-0 shadow-2xl bg-slate-800 px-8 py-10 rounded-md">
                <h1 className='text-center text-3xl font-semibold mb-5'>Sign up your account</h1>

                <form
                    onSubmit={handleSignup}
                    className=""
                >
                    <fieldset className="fieldset">

                        {/* Name Input Field */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="Name"
                            name='name'
                            required
                        />

                        {/* Email */}
                        <label className="label mt-4">Email</label>
                        <input
                            type="email"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="Email"
                            name='email'
                            required
                        />

                        {/* Photo */}
                        <label className="label mt-4">Photo URL</label>
                        <input
                            type="txt"
                            className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                            placeholder="photo"
                            name='photo'
                            required
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
                            />
                            <p
                                onClick={() => setShow(!show)}
                                className='cursor-pointer -ml-8'
                            >
                                {show && <FaRegEye size={16} /> || <FaRegEyeSlash size={16} />}
                            </p>
                        </div>

                        {
                            passwordError && <p className='text-red-400 text-xs'>{passwordError}</p>
                        }

                        {/* Login Button */}
                        <button
                            type='submit'
                            className="bg-lime-600 hover:bg-lime-500 text-[14px] py-2 px-4 rounded-md mt-7"
                        >
                            Sign up</button>

                        {/* Google Signup Button */}
                        <button
                            onClick={function () {
                                setLoading(true);
                                if (loading) {
                                    <Loading></Loading>
                                }
                                signInWithPopup(auth, googleProvider);
                                toast.success('Sign up seccess...');
                                return navigate(`${location.state ? location.state : '/'}`);
                            }}
                            className='btn btn-outline btn-secondary w-full mt-2'
                        >
                            <FcGoogle size={24} /> Signup with Google</button>

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