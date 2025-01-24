// src/components/PrivateRoute.js
'use client';
import { useKindeAuth, LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import React, { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { user } = useKindeAuth();

    if (!user) {
        return (
            <div>
                <p>You need to be logged in to access this page. Please log in below:</p>
                <LoginLink postLoginRedirectURL='/profile'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Sign In
                    </button>
                </LoginLink>
            </div>
        );
    }

    return children;
};

export default PrivateRoute;
