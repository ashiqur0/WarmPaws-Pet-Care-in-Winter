import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <Loading/>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/auth/login' />;
};

export default ProtectedRoute;