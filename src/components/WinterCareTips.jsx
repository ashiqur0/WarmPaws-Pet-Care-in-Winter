import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const WinterCareTips = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='my-10 md:w-7xl md:mx-auto mx-4'>
            <h1 className='text-3xl font-medium my-10'>Winter Care Tips for Pets</h1>
            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-4/7 pl-4 my-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🐶 1. Keep Them Warm Indoors</h2>
                <p className='text-[14px]'>Pets feel the cold too! Make sure they have a warm, cozy spot away from cold floors and drafts. A soft blanket or pet bed helps them stay comfortable during chilly nights.</p>
            </div>
            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-4/7 pl-4 my-10 ml-5 md:ml-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🧥 2. Limit Outdoor Time</h2>
                <p className='text-[14px]'>Short walks are okay, but don’t keep pets outside for long periods. Prolonged exposure to cold can cause frostbite or hypothermia — especially for small, short-haired, or senior pets.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-4/7 pl-4 my-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🦶 3. Protect Their Paws</h2>
                <p className='text-[14px]'>Snow, ice, and road salt can hurt your pet’s paws. Wipe their paws after walks or use pet-safe booties. Applying paw balm can also prevent dryness and cracking.</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-4/7 pl-4 my-10 ml-5 md:ml-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🥣 4. Adjust Their Diet and Water</h2>
                <p className='text-[14px]'>Pets may burn more calories in the cold while keeping warm. Give them slightly more food if they’re active, and ensure their water bowl doesn’t freeze — hydration is just as important in winter!</p>
            </div>

            <div
                data-aos='fade-left'
                className='border-l-4 border-slate-700 w-4/7 pl-4 my-10'>
                <h2 className='md:text-xl text-[1rem] font-medium mb-2'>🛁 5. Groom, But Don’t Overdo Baths</h2>
                <p className='text-[14px]'>Regular grooming helps maintain healthy fur that provides insulation. Avoid over-bathing — too many baths can dry out your pet’s skin in the cold season.</p>
            </div>

        </div>
    );
};

export default WinterCareTips;