import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Loading/>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/auth/login' />;
};

export default ProtectedRoute;