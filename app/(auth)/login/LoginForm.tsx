'use client';

import React, { ChangeEvent, FormEvent, MouseEvent, useState ,useEffect} from 'react';
import Link from 'next/link';
import { Button, FormControl, FormLabel, IconButton, Link as MuiLink, Stack, TextField } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAuthTokenCookie,getAuthTokenCookie } from '../../../utils/auth';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const { push } = useRouter();
    useEffect(() => {
        // Check if the user is already authenticated
        const authToken = getAuthTokenCookie();
        if (authToken) {
          // User is already authenticated, redirect to the dashboard or another page
          redirect('/');
        }
      }, []);

    const [formData, setFormData] = useState({
        identifier: '',
        password : ''
    });

    console.log(setAuthTokenCookie)

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type==='checkbox'
                ? e.target.checked
                : e.target.value
        });
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://promech-backend.addictaco.com/api/auth/local', formData);
            console.log(response)
            if(response.status==200){
                const token = response?.data;
                // Store the token in cookies
                setAuthTokenCookie(JSON.stringify(token));
                setTimeout(()=>{
                    push('/account/courses');
                },1000)    
                toast.success('login successfully please loggin in wait to redirect');
            }
            // Cookies.set('token',   JSON.stringify(response.data));
            // Clear form fieldsif
            setFormData({  identifier: '',
            password : ''})
            // Perform any additional actions or redirects
        } catch (error:any) {
            // console.error(error.response.data.error.message);
            toast.error(error?.response?.data?.error?.message);
        }
    }

    return (
        <Stack gap={4} alignItems='center' width='100%' component='form' onSubmit={handleSubmit}
            sx={{
                '& > div': { gap: 2 }
            }}
        >
            <FormControl variant="standard" fullWidth>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <TextField
                    name='identifier' placeholder='Enter your Email address' fullWidth type='email' 
                    value={formData.identifier} onChange={handleChange} required
                />
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                    name='password' placeholder='Input Your Password' fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password} onChange={handleChange} required
                    sx={{
                        '& i': { display: 'inline-flex' }
                    }}
                    InputProps={{
                        endAdornment: <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end" type='button'
                        >
                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon /> }
                        </IconButton>
                    }}
                />
            </FormControl>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%' flexWrap='wrap'>
                <MuiLink color='secondary.main' underline='hover' component={Link} href='/forget'>Forgot password?</MuiLink>
                <Button variant='contained'
                    type='submit'
                    sx={{ fontWeight: 400, paddingX: 7, paddingY: 1.5 }}
                    onClick={handleSubmit}
                >
                    Sign in
                </Button>
            </Stack>
            <ToastContainer />
        </Stack>
    )
}

export default LoginPage;


