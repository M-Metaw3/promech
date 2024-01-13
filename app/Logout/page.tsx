'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import { removeAuthTokenCookie } from '@/utils/auth';

const Profile = () => {
    const { push } = useRouter();

    const handleLogout = () => {
        // Clear the authentication token from cookies
        removeAuthTokenCookie();
        // Redirect to the login page or any other desired page
        push('/login');
    };

    // You can use the handleLogout function as an event handler, not calling it directly
    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Profile;
