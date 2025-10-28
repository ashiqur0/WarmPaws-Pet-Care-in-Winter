import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const Services = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <div className='md:w-7xl px-4 md:mx-auto w-full my-10'>
            <h1 className='text-3xl font-semibold mb-7'>Popular Wintr Care Service</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data.map(petService => <div
                        key={petService.serviceId}
                        className='bg-slate-800 p-4 rounded-md'
                    >
                        <img src={petService.image} className='rounded-md' alt="" />
                        <h2 className='text-xl font-medium my-4'>{petService.serviceName}</h2>
                        <div className='flex justify-between items-center mb-10'>
                            <p>${petService.price}</p>
                            <p className='flex items-center gap-2'><FaStar /><span>{petService.rating}</span></p>
                        </div>

                        <Link to={`/services/servicedetails/${petService.serviceId}`} className='btn w-full bg-lime-500 hover:bg-lime-400'>See Details</Link>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Services;