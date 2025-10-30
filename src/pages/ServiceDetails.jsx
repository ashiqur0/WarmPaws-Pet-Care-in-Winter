import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [service, setService] = useState({});
    useEffect(() => {
        const serviceFind = data.find(serv => serv.serviceId == id);
        setService(serviceFind);
    }, [id, data]);

    const handleBooking = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        
        if (name && email) {
            return toast.success('You have booked the services...');
        }
        return toast.error('Booking Failed');
    }


    return (
        <div className='bg-slate-800 md:mx-4 rounded-md'>
            <div className='rounded-md w-full pt-8 md:pt-14 px-4 md:w-7xl md:mx-auto  py-10 grid md:grid-cols-2 gap-10 items-start'>
                <div className=''>
                    <img src={service.image} className='rounded-md ' alt="" />
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <p>Category: </p>
                        <span className='bg-slate-600 py-1 px-4 rounded-2xl'>{service.category}</span>
                    </div>

                    <div className='border-t border-b border-slate-600 my-5 py-5'>
                        <h2 className='text-[14px] font-medium '>{service.serviceName}</h2>
                        <p className='mt-2'>{service.description}</p>
                    </div>

                    <div className='flex justify-between w-2/5'>
                        <div className=''>
                            <p>Price: </p>
                            <p>Ratings: </p>
                            <p>Available Slots: </p>
                        </div>
                        <div className='text-right'>
                            <p>${service.price}</p>
                            <p className='flex items-center gap-2'><FaStar /><span>{service.rating}</span></p>
                            <p>${service.slotsAvailable}</p>
                        </div>
                    </div>

                    <div className='border-t border-slate-600 mt-5 pt-5 flex items-center justify-between'>
                        <h2 className=' '>Provider: {service.providerName}</h2>
                        <p className=''>{service.providerEmail}</p>
                    </div>
                </div>
            </div>


            <div className="md:w-7xl w-full px-0 md:mx-auto">
                <div className="p-4 w-full rounded-md">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-0 items-center py-5 md:py-10">

                        <h1 className='md:text-7xl text-3xl font-semibold text-center'>Book Now</h1>
                        <form
                            onSubmit={(e) => {
                                handleBooking(e);
                                e.preventDefault();
                                e.target.reset();
                            }}
                            className='md:flex justify-center items-center'
                        >
                            <fieldset className="fieldset w-4/5 mx-auto md:w-2/3 ">
                                <label className="text-[14px]">Name</label>
                                <input
                                    type="txt"
                                    className="py-2 px-4 text-[14px] rounded-md bg-slate-900 border-0"
                                    placeholder="Name"
                                    name='name'
                                    required
                                />

                                <label className="text-[14px] mt-5">Email</label>
                                <input
                                    type="email"
                                    className="py-2 px-4 text-[14px] rounded-md bg-slate-900 border-0"
                                    placeholder="Email"
                                    name='email'
                                    required
                                />

                                <button
                                    type='submit'
                                    className="py-2 px-4 text-[14px] hover:bg-lime-500 bg-lime-600 rounded-md mt-4"
                                >
                                    Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
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

export default ServiceDetails;