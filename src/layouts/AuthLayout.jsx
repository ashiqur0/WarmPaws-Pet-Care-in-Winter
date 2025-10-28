import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/common/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-slate-900'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;