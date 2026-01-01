import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

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