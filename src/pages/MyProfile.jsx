import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const { user } = use(AuthContext);
    // console.log(user);
    const { displayName, email, photoURL } = user;

    return (
        <div className='md:w-100 md:mx-auto mx-3 bg-slate-800 p-10 rounded-xl'>
            <div className=''>
                <img
                    src={photoURL}
                    alt={`Profile Picture of ${displayName}`}
                    className='rounded-full border-3 border-white'
                />

                <div className='my-5'>
                    <h1>{displayName}</h1>
                    <h1>{email}</h1>
                </div>

                <button className="w-full bg-lime-600 hover:bg-lime-500 text-[14px] py-2 px-4 rounded-md">Update Profile</button>
            </div>
        </div>
    );
};

export default MyProfile;