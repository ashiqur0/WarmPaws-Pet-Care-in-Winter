import { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const UpdateProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext);
    const { displayName, photoURL } = user;
    const navigate = useNavigate();

    const [name, updateName] = useState(displayName);
    const [photo, updatePhoto] = useState(photoURL);

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        //Update Profile
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                // toast.success('Profile updated successfully...');
                navigate(`/auth/myprofile`);
            })
            .catch(error => {
                toast.error(error.code);
            })

        updateName(displayName);
        updatePhoto(photoURL);
    }

    return (
        <div className='md:w-100 md:mx-auto mx-3 bg-slate-800 p-10 rounded-xl'>
            <form>
                <fieldset className="fieldset">
                    {/* Name Input Field */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                        placeholder="Name"
                        name='name'
                        required
                        value={name}
                        onChange={(e) => updateName(e.target.value)}
                    />

                    <label className="label mt-4">Photo URL</label>
                    <input
                        type="txt"
                        className="bg-slate-900 text-[14px] py-2 px-4 rounded-sm"
                        placeholder="photo"
                        name='photo'
                        required
                        value={photo}
                        onChange={(e) => updatePhoto(e.target.value)}
                    />

                    <button
                        onClick={handleUpdateProfile}
                        type='submit'
                        className="w-full bg-lime-600 hover:bg-lime-500 text-[14px] py-2 mt-8 px-4 rounded-md text-center font-medium"
                    >
                        Update Profile</button>
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

export default UpdateProfile;