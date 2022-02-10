import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ currentUser, children }) => {

    return (
        currentUser ? children : <Navigate to="/" />
    )
}

export default RequireAuth;