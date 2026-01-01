import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const MeetOutExpert = () => {
    const [experts, setExpert] = useState([]);
    
    useEffect(() => {
        fetch('/data/experts.json')
            .then(res => res.json())
            .then(data => setExpert(data));
    }, []);

    // console.log(expert);

    return (
        <div className='md:w-7xl px-4 md:mx-auto w-full my-10'>
            <h1 className='text-3xl font-semibold mb-7'>Meet Our Experts</h1>
            <Marquee speed={40}>
                <div className='grid grid-cols-4'>
                    {
                        experts.map(expart => <div
                            key={expart.id}
                            className='bg-slate-900 p-4 rounded-md flex flex-col justify-between ml-5 cursor-pointer hover:shadow-white shadow-md border border-slate-500'
                        >
                            <div className=''>
                                <img
                                    src={expart.image}
                                    className='rounded-md w-full h-40 overflow-hidden'
                                    alt={expart.expertise}
                                />
                                <h2 className='text-xl font-medium my-4'>{expart.name}</h2>
                                <div className='flex justify-between items-center mb-10'>
                                    <p>{expart.expertise}</p>

                                </div>
                            </div>
                            <button className='btn w-full bg-slate-900 hover:bg-slate-800 border border-slate-500 font-normal text-xl'>Contacts</button>
                        </div>
                        )}
                </div>
            </Marquee>
        </div>
    );
};

export default MeetOutExpert;