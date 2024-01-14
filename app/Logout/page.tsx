'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import { removeAuthTokenCookie } from '@/utils/auth';
import { AppBar, Avatar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';

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
        <Button onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default Profile;
