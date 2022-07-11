import React from 'react';
import { Navigate } from 'react-router-dom';
import User from '../pages/User';

const RedirectsRoute = ({auth}) => {
    return auth === true ? <User/> : <Navigate to '/login' /> ;
};

export default RedirectsRoute;