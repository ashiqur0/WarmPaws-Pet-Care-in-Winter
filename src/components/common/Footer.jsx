import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-slate-950 p-10">
           <div className='flex flex-col md:flex-row gap-10 md:items-center justify-between'>
             <div>
                <h1 className='text-2xl font-bold'>📍 Contact Info</h1>
                <p className='ml-10'>Address: 45 Green Lane, Banani, Dhaka, Bangladesh</p>
                <p className='ml-10'>Email: support@pawcare.com</p>
                <p className='ml-10'>Phone: +880 1750 987654</p>
                <p className='ml-10'>Working Hours: Saturday – Thursday, 9:00 AM – 7:00 PM</p>
            </div>
            
            <div>
                <h1 className='text-2xl font-bold'>🐾 Follow Us</h1>
                <div className='flex  gap-5 mt-3 text-2xl ml-10 md:ml-0'>
                    <FaFacebook />
                    <FaInstagramSquare />
                    <BsTwitterX />
                    <FaYoutube />
                </div>
            </div>
           </div>

           <div className='mt-10'>
            <h1 className='text-2xl font-bold'>🔒 Privacy Policy</h1>
            <p className='ml-10'>We care about your privacy and your pets’ safety. Your information is only used to provide better service experiences. We never sell or share your data with third parties.</p>
           </div>

           <p className='mt-10 border-t border-slate-50 pt-5 text-center'>© 2025 PawCare — All rights reserved.</p>
        </footer>
    );
};

export default Footer;