'use client';

import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Link as MuiLink, OutlinedInput, Stack, TextField } from '@mui/material';
import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { getCookie } from 'cookies-next';
import Loader from '@/components/Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { setAuthTokenCookie,getAuthTokenCookie } from '../../../utils/auth';

import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
const SignupForm = () => {




    const { push } = useRouter();

    useEffect(() => {
        // Check if the user is already authenticated
        const authToken = getAuthTokenCookie();
    
        if (authToken) {
          // User is already authenticated, redirect to the dashboard or another page
          push('/');
        }
      }, []);






    const country = getCookie('country') as MuiTelInputCountry;
   
    const [isClient, setIsClient] = useState(false);
    const [formData, setFormData] = useState({
        // username: '',
        username:"",
        email: '',
        phonenumber: '',
        password: '',
        accept: false
    });
    
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

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
    
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
              const response = await axios.post('http://promech-backend.addictaco.com/api/auth/local/register', formData);


              console.log(response)
        if(response.status==200){

            setTimeout(()=>{
                push('/login');


            },4000)    
            toast.success('registration successfully please loggin in wait to redirect');


    
              


        }else{

            toast.error('Error submitting data');

        }
           
        
              // Clear form fields
              setFormData( {    username:"",
              email: '',
              phonenumber: '',
              password: '',
              accept: false
        })
              // Perform any additional actions or redirects
            } catch (error:any) {
              console.error(error);
              // Handle error
            }
    }

    if(!isClient) return <Loader />

    return (
        <Stack gap={2} alignItems='center' width='100%' component='form' onSubmit={handleSubmit}
            sx={{
                '& > div': { gap: 1 }
            }}
        >
            <FormControl variant="standard" fullWidth>
                <FormLabel htmlFor="name">Name</FormLabel>
                <TextField
                    name='username' placeholder='Enter your full name' fullWidth
                    value={formData.username} onChange={handleChange} required
                />
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <TextField
                    name='email' placeholder='Enter your Email address' fullWidth type='email' 
                    value={formData.email} onChange={handleChange} required
                />
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <FormLabel htmlFor="email">Phone Number</FormLabel>
                <MuiTelInput
                    value={formData.phonenumber} fullWidth required
                    placeholder='Enter your phone number'
                    onChange={(value: string, info: MuiTelInputInfo) => {
                        console.log('MuiTelInputInfo', info)
                        setFormData({
                            ...formData,
                            phonenumber: value
                        });
                    }}
                    // continents={continents}
                    preferredCountries={['EG']} forceCallingCode
                    excludedCountries={['IL']}
                    defaultCountry={country}
                />
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                    name='password' placeholder='Input Your Password' fullWidth
                    type={showPassword ? 'text' : 'password'} autoComplete='password'
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
            <Button variant='contained'
                type='submit' fullWidth
                sx={{ fontWeight: 400, paddingX: 7, paddingY: 1.5 }}
            >
                Create
            </Button>
            <FormControlLabel
                label={<>
                    By clicking Create account, I agree that I have read and accepted the
                    <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Terms of Use</MuiLink> &nbsp;
                    and &nbsp;
                    <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Privacy Policy</MuiLink>
                    .
                </>}
                name='accept'
                checked={formData.accept} required
                sx={{ alignItems: 'flex-start', gap: 1 }}
                slotProps={{
                    typography: { variant: 'body2', color: '#9C9CA4' }
                }}
                control={
                    <Checkbox onChange={handleChange} sx={{ padding: 0.5 }} />
                }
            />

      <ToastContainer />

        </Stack>
    )
}

export default SignupForm;
// 'use client';

// import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Link as MuiLink, OutlinedInput, Stack, TextField } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import { getCookie } from 'cookies-next';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

// import { setAuthTokenCookie, getAuthTokenCookie } from '../../../utils/auth';

// import { redirect } from 'next/navigation';
// import { useRouter } from 'next/navigation';

// interface FormData {
//   username: string;
//   email: string;
//   phonenumber: string;
//   password: string;
//   accept: boolean;
// }

// const SignupForm: React.FC = () => {
//   const { push } = useRouter();

//   useEffect(() => {
//     // Check if the user is already authenticated
//     const authToken = getAuthTokenCookie();

//     if (authToken) {
//       // User is already authenticated, redirect to the dashboard or another page
//       push('/');
//     }
//   }, []);

//   const country = getCookie('country') as MuiTelInputCountry;
//   const [isClient, setIsClient] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     username: '',
//     email: '',
//     phonenumber: '',
//     password: '',
//     accept: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const toggleShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://promech-backend.addictaco.com//api/auth/local/register', formData);

//       console.log(response);

//       if (response.status === 200) {
//         setTimeout(() => {
//           push('/login');
//         }, 4000);
//         toast.success('Registration successful. Please log in. Redirecting...');

//         // Clear form fields
//         setFormData({
//           username: '',
//           email: '',
//           phonenumber: '',
//           password: '',
//           accept: false,
//         });
//       } else {
//         toast.error('Error submitting data');
//       }
//     } catch (error: any) {
//       console.error(error);
//       toast.error(error?.response?.data?.message || 'Error submitting data');
//     }
//   };

//   if (!isClient) return <Loader />;

//   return (
//     <Stack gap={2} alignItems="center" width="100%" component="form" onSubmit={handleSubmit}>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="name">Name</FormLabel>
//         <TextField
//           name="username"
//           placeholder="Enter your full name"
//           fullWidth
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//       </FormControl>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="email">Email Address</FormLabel>
//         <TextField
//           name="email"
//           placeholder="Enter your Email address"
//           fullWidth
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </FormControl>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="email">Phone Number</FormLabel>
//         <MuiTelInput
//           value={formData.phonenumber}
//           fullWidth
//           required
//           placeholder="Enter your phone number"
//           onChange={(value: string, info: MuiTelInputInfo) => {
//             console.log('MuiTelInputInfo', info);
//             setFormData({
//               ...formData,
//               phonenumber: value,
//             });
//           }}
//           preferredCountries={['EG']}
//           forceCallingCode
//           excludedCountries={['IL']}
//           defaultCountry={country}
//         />
//       </FormControl>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="password">Password</FormLabel>
//         <TextField
//           name="password"
//           placeholder="Input Your Password"
//           fullWidth
//           type={showPassword ? 'text' : 'password'}
//           autoComplete="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           sx={{
//             '& i': { display: 'inline-flex' },
//           }}
//           InputProps={{
//             endAdornment: (
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={toggleShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge="end"
//                 type="button"
//               >
//                 {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
//               </IconButton>
//             ),
//           }}
//         />
//       </FormControl>
//       <Button variant="contained" type="submit" fullWidth sx={{ fontWeight: 400, paddingX: 7, paddingY: 1.5 }}>
//         Create
//       </Button>
//       <FormControlLabel
//         label={
//           <>
//             By clicking Create account, I agree that I have read and accepted the{' '}
//             <MuiLink color="secondary.main" underline="hover" component={Link} href="/signup">
//               Terms of Use
//             </MuiLink>{' '}
//             &nbsp; and &nbsp;
//             <MuiLink color="secondary.main" underline="hover" component={Link} href="/signup">
//               Privacy Policy
//             </MuiLink>
//             .
//           </>
//         }
//         name="accept"
//         checked={formData.accept}
//         required
//         sx={{ alignItems: 'flex-start', gap: 1 }}
//         slotProps={{
//           typography: { variant: 'body2', color: '#9C9CA4' },
//         }}
//         control={<Checkbox onChange={handleChange} sx={{ padding: 0.5 }} />}
//       />

//       <ToastContainer />
//     </Stack>
//   );
// };

// export default SignupForm;

//////////////////////////////////////////////////////////////////////////

// import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Link as MuiLink, OutlinedInput, Stack, TextField } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import { getCookie } from 'cookies-next';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { setAuthTokenCookie, getAuthTokenCookie } from '../../../utils/auth';
// import { redirect } from 'next/navigation';
// import { useRouter } from 'next/navigation';

// interface FormData {
//   username: string;
//   email: string;
//   phonenumber: string;
//   password: string;
//   accept: boolean;
// }

// const SignupForm: React.FC = () => {
//   const { push } = useRouter();

//   useEffect(() => {
//     // Check if the user is already authenticated
//     const authToken = getAuthTokenCookie();
//     if (authToken) {
//       // User is already authenticated, redirect to the dashboard or another page
//       push('/');
//     }
//   }, []);

//   const country = getCookie('country') as MuiTelInputCountry;

//   const [isClient, setIsClient] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     username: '',
//     email: '',
//     phonenumber: '',
//     password: '',
//     accept: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const toggleShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
//     });
//   };

  

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://promech-backend.addictaco.com//api/auth/local/register', formData);
//       console.log(response);
//       if (response.status === 200) {
//         setTimeout(() => {
//           push('/login');
//         }, 4000);
//         toast.success('Registration successful. Please log in. Redirecting...');
//         // Clear form fields
//         setFormData({
//           username: '',
//           email: '',
//           phonenumber: '',
//           password: '',
//           accept: false,
//         });
//       } else {
//         toast.error('Error submitting data');
//       }
//     } catch (error: any) {
//       console.error(error);
//       toast.error(error?.response?.data?.message || 'Error submitting data');
//     }
//   };




















//     // Define a schema for the form data
// // const schema = Yup.object().shape({
// //   username: Yup.string().required('Username is required'),
// //   email: Yup.string()
// //     .email('Email is invalid')
// //     .required('Email is required'),
// //   phonenumber: Yup.string()
// //     .matches(/^d{10}$/, 'Phone number is invalid')
// //     .required('Phone number is required'),
// //   password: Yup.string()
// //     .min(6, 'Password must be at least 6 characters')
// //     .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
// //     .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
// //     .required('Password is required'),
// //   accept: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
// // }); 

// //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://promech-backend.addictaco.com//api/auth/local/register', formData);
// //       console.log(response);
// //       if (response.status === 200) {
// //         setTimeout(() => {
// //           push('/login');
// //         }, 4000);
// //         toast.success('Registration successful. Please log in. Redirecting...');
// //         // Clear form fields
// //         setFormData({
// //           username: '',
// //           email: '',
// //           phonenumber: '',
// //           password: '',
// //           accept: false,
// //         });
// //       } else {
// //         toast.error('Error submitting data');
// //       }
// //     } catch (error: any) {
// //       console.error(error);
// //       toast.error(error?.response?.data?.message || 'Error submitting data');
// //     }
// //   };


//   return (
//     <Stack gap={2} alignItems="center" width="100%" component="form" onSubmit={handleSubmit}>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="name">Name</FormLabel>
//         <TextField
//           name="username"
//           placeholder="Enter your full name"
//           fullWidth
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//       </FormControl>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="email">Email Address</FormLabel>
//         <TextField
//           name="email"
//           placeholder="Enter your Email address"
//           fullWidth
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </FormControl>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="email">Phone Number</FormLabel>
//         <MuiTelInput
//           value={formData.phonenumber}
//           fullWidth
//           required
//           placeholder="Enter your phone number"
//           onChange={(value: string, info: MuiTelInputInfo) => {
//             console.log('MuiTelInputInfo', info);
//             setFormData({
//               ...formData,
//               phonenumber: value,
//             });
//           }}
//           preferredCountries={['EG']}
//           forceCallingCode
//           excludedCountries={['IL']}
//           defaultCountry={country}
//         />
//       </FormControl>
//       <FormControl variant="standard" fullWidth>
//         <FormLabel htmlFor="password">Password</FormLabel>
//         <TextField
//           name="password"
//           placeholder="Input Your Password"
//           fullWidth
//           type={showPassword ? 'text' : 'password'}
//           autoComplete="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           sx={{
//             '& i': { display: 'inline-flex' },
//           }}
//           InputProps={{
//             endAdornment: (
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={toggleShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge="end"
//                 type="button"
//               >
//                 {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
//               </IconButton>
//             ),
//           }}
//         />
//       </FormControl>
//       <Button variant="contained" type="submit" fullWidth sx={{ fontWeight: 400, paddingX: 7, paddingY: 1.5 }}>
//         Create
//       </Button>
//       <FormControlLabel
//         label={
//           <>
//             By clicking Create account, I agree that I have read and accepted the{' '}
//             <MuiLink color="secondary.main" underline="hover" component={Link} href="/signup">
//               Terms of Use
//             </MuiLink>{' '}
//             &nbsp; and &nbsp;
//             <MuiLink color="secondary.main" underline="hover" component={Link} href="/signup">
//               Privacy Policy
//             </MuiLink>
//             .
//           </>
//         }
//         name="accept"
//         checked={formData.accept}
//         required
//         sx={{ alignItems: 'flex-start', gap: 1 }}
//         slotProps={{
//           typography: { variant: 'body2', color: '#9C9CA4' },
//         }}
//         control={<Checkbox onChange={handleChange} sx={{ padding: 0.5 }} />}
//       />
//       <ToastContainer />
//     </Stack>
//   );
// };

// export default SignupForm;


