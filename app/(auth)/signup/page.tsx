import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Stack, Typography, Link as MuiLink } from '@mui/material';
import LoginForm from './SignupForm';

export const metadata: Metadata = {
    title: 'Signup - PROMECH'
}

const SignupUserPage = () => {
    return (
        <Stack width='100%' maxWidth={530} gap={3} padding={1}>
            <Typography component='h1' variant='h3' fontWeight={500}>Create An Acount</Typography>
            <Typography>
                Already have an account? &nbsp;
                <MuiLink color='secondary.main' underline='hover' component={Link} href='/login'>Login</MuiLink>
            </Typography>
            <LoginForm />
        </Stack>
    )
}

export default SignupUserPage;