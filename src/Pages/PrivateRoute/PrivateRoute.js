import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isloading} = useAuth();
    const location = useLocation();

    if(isloading){
        return <CircularProgress />
    }
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location}} />
};

export default PrivateRoute;