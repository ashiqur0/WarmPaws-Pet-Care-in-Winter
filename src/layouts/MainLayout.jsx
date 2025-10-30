import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Loading from '../components/Loading';

const MainLayout = () => {
    const {state} = useNavigation();

    return (
        <div className='bg-slate-900'>
            <Navbar />
            {
                state == 'loading'? <Loading /> : <Outlet />
            }
            <Footer />
        </div>
    );
};

export default MainLayout;