'use client';

import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import Loader from '@/components/Loader';

const ProfilePage = () => {
    const { user, isLoading, error } = useKindeAuth();

    console.log({ user, isLoading, error }); // Debugging log

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center text-gray-600 my-20">
                <p>No user logged in. Please sign in.</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto mt-10">
            <h1 className="text-4xl font-bold text-blue-500 text-center my-10">Profile Page</h1>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-center mb-4'>
                    <img
                        src={user.picture}
                        alt={`${user.given_name}'s profile`}
                        className="rounded-full w-24 h-24 mt-4"
                    />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Welcome, {user.given_name} {user.family_name} to your profile!
                </h2>
                <p className="text-gray-900 dark:text-white text-center mt-2">
                    <strong>Email:</strong> {user.email}
                </p>
            </div>
        </div>
    );
};

export default ProfilePage;
