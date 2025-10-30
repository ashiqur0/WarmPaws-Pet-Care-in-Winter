import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Bounce, ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location?.state);
    // console.log(location);

    return (
        <div className='md:w-100 md:mx-auto mx-3 bg-slate-800 p-10 rounded-xl'>
            <h1 className='text-2xl font-medium mb-10 text-center'>Reset password</h1>

            <form>
                <fieldset className="fieldset">
                    {/* Name Input Field */}
                    <label className="label">Name</label>
                    <input
                        type="email"
                        className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                        placeholder="Email"
                        name='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Link
                        // onClick={}
                        to='https://mail.google.com/'
                        target='_blank'
                        type='submit'
                        className="w-full bg-lime-600 hover:bg-lime-500 text-[14px] py-2 mt-8 px-4 rounded-md text-center font-medium"
                    >
                        Reset Password</Link>
                </fieldset>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={100}
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

export default ForgotPassword;