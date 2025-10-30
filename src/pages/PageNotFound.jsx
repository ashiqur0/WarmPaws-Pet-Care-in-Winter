import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import errorImg from '../assets/images/error/error-404.png'

const PageNotFound = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-slate-900 w-full md:mx-auto flex justify-center items-center py-20 px-10'>
                <img src={errorImg} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;