import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Stack, Typography, Link as MuiLink, Divider } from '@mui/material';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
    title: 'Login - PROMECH'
}

const LoginUserPage = () => {
    return (
        <Stack width='100%' maxWidth={530} gap={3} padding={1}>
            <Typography component='h1' variant='h3' fontWeight={500}>Sign In</Typography>
            <Typography>
                New user? &nbsp;
                <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Create an acount</MuiLink>
            </Typography>
            <LoginForm />
            <Typography variant='body2' display='flex' width='100%' alignItems='center' gap={1} component='div'>
                <Divider sx={{ bgcolor: '#F5F5F7', borderColor: '#F5F5F7', flexGrow: 1 }} />
                Or
                <Divider sx={{ bgcolor: '#F5F5F7', borderColor: '#F5F5F7', flexGrow: 1 }} />
            </Typography>
            <Typography variant='body2' color='#9C9CA4'>
                Protected by reCAPTCHA and subject to the Google &nbsp;
                <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Privacy Policy</MuiLink> &nbsp;
                and &nbsp;
                <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Terms of Service</MuiLink>
                .
            </Typography>
        </Stack>
    )
}

export default LoginUserPage;