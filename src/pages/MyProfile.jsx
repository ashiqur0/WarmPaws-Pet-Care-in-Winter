import { useSpring, animated } from "@react-spring/web";
import { useState } from 'react';

import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
    const { user } = use(AuthContext);
    const { displayName, email, photoURL } = user;

    // smooth grow and shrink animation from: react-spring
    const [hovered, setHovered] = useState(false);
    const animation = useSpring({
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hovered ? '0px 5px 10px white' : '0px 2px 3px gray',
        config: { tension: 200, friction: 10 },
    });

    return (
        <animated.div   //react-spring
            style={animation}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="cursor-pointer transition-all duration-300 h-auto md:w-100 md:mx-auto mx-3 bg-slate-800 p-10 rounded-xl"
        >
            <div className=''>
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
        </animated.div>
    );
};

export default MyProfile;