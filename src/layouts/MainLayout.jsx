import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {

    return (
        <div className='h-[100vh] flex flex-col justify-between bg-slate-900'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;