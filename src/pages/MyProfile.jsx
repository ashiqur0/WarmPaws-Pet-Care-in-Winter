import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const MyProfile = () => {
    const { user } = use(AuthContext);    
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

                <Link
                    to='/auth/updateprofile'
                    className="w-full bg-lime-600 hover:bg-lime-500 text-[14px] py-2 px-4 rounded-md"
                >
                    Update Profile</Link>
            </div>
        </div>
    );
};

export default MyProfile;