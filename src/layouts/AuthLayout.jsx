import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/common/Footer';
import Loading from '../components/Loading';

const AuthLayout = () => {
    const {state} = useNavigation();

    return (
        <div>
            <Navbar />
            <div className='bg-slate-900 py-10'>
                {
                    state == 'loading' ? <Loading /> : <Outlet />
                }
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;