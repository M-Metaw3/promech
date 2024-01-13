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
      return     handleLogout()
       
}

export default Profile;
