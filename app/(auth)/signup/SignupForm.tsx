'use client';

// import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button,Alert, Checkbox,Select, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Link as MuiLink, OutlinedInput, Stack, MenuItem,TextField } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import { getCookie } from 'cookies-next';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

// import { setAuthTokenCookie,getAuthTokenCookie } from '../../../utils/auth';

// import { redirect } from 'next/navigation';
// import { useRouter } from 'next/navigation'
// const SignupForm = () => {




//     const { push } = useRouter();

//     useEffect(() => {
//         // Check if the user is already authenticated
//         const authToken = getAuthTokenCookie();
    
//         if (authToken) {
//           // User is already authenticated, redirect to the dashboard or another page
//           push('/');
//         }
//       }, []);






//     const country = getCookie('country') as MuiTelInputCountry;
   
//     const [isClient, setIsClient] = useState(false);
//     const [isError, setisError] = useState("");

//     const [formData, setFormData] = useState({
//         // username: '',
//         username:"",
//         email: '',
//         phonenumber: '',
//         password: '',
//         accept: false,
//         GraduationDates:"",
//         gender:"",
//         fullusername:''
//     });
//     console.log(formData.gender)
//     const [showPassword, setShowPassword] = useState(false);
//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const toggleShowPassword = () => setShowPassword((show) => !show);
//     const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//       };

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.type==='checkbox'
//                 ? e.target.checked
//                 : e.target.value
//         });
//     }
    
//     const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//               const response = await axios.post('http://promech-backend.addictaco.com/api/auth/local/register', formData);


         
//         if(response.status==200){

//             setTimeout(()=>{
//                 push('/login');


//             },4000)    
//             toast.success('registration successfully please loggin in wait to redirect');


    
              


//         }else{

//             // toast.error('Error submitting data');

//         }

//         if(response.status==400){

        
//             // toast.success('registration ');
//             console.log("aaaaaaaaaaaaaaaaaaaaa")


    
              


//         }else{

//             // toast.error('Error submitting data');

//         }








           
        
//               // Clear form fields
//               setFormData( {   
//                 username:"",
//                 email: '',
//                 phonenumber: '',
//                 password: '',
//                 accept: false,
//                 GraduationDates:"",
//                 gender:"",
//                 fullusername:'' 
           
//         })
//               // Perform any additional actions or redirects
//             } catch (error:any) {
            
//               setisError(error?.response?.data?.error?.message)
//               // Handle error
//             }
//     }

//     if(!isClient) return <Loader />

//     return (
//         <Stack gap={2} alignItems='center' width='100%' component='form' onSubmit={handleSubmit}
//             sx={{
//                 '& > div': { gap: 1 }
//             }}
//         >
//             <FormControl variant="standard" fullWidth>
//                 <FormLabel  htmlFor="name">User Name</FormLabel>
//                 <TextField
//                     name='username' placeholder='Enter your user name' fullWidth
//                     inputProps={{ minLength: 10, maxLength: 20 }}   value={formData.username} onChange={handleChange} required
//                 />
//             </FormControl>
//             <FormControl variant="standard" fullWidth>
//                 <FormLabel  htmlFor="name">Full Name</FormLabel>
//                 <TextField
//                     name='fullusername' placeholder='Enter your full name' fullWidth
//                     inputProps={{ minLength: 10, maxLength: 50 }}   value={formData.fullusername} onChange={handleChange} required
//                 />
//             </FormControl>
//             <FormControl variant="standard" fullWidth>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <TextField
//                     name='email' placeholder='Enter your Email address' fullWidth type='email' 
//                     value={formData.email} onChange={handleChange} required
//                     inputProps={{ minLength: 5, maxLength: 20 }} 
//                 />
//             </FormControl>
//             <FormControl variant="standard" fullWidth>
//                 <FormLabel htmlFor="GraduationDates">Graduation Date</FormLabel>
//                 <TextField
//                     name='GraduationDates' placeholder='Graduation Dates' fullWidth type='date'
//                     value={formData.GraduationDates}
//                     onChange={handleChange}
//                     required 
//                     // value={formData.email} onChange={handleChange} required
//                 />
//             </FormControl>
//             <FormControl variant="standard" fullWidth>
//                 <FormLabel   inputProps={{ minLength: 10, maxLength: 20 }}  htmlFor="email">Phone Number</FormLabel>
//                 <MuiTelInput
//                     value={formData.phonenumber} fullWidth required
//                     placeholder='Enter your phone number'
//                     onChange={(value: string, info: MuiTelInputInfo) => {
//                         console.log('MuiTelInputInfo', info)
//                         setFormData({
//                             ...formData,
//                             phonenumber: value
//                         });
//                     }}
//                     // continents={continents}
//                     preferredCountries={['EG']} forceCallingCode
//                     excludedCountries={['IL']}
//                     defaultCountry={country}
//                 />
//             </FormControl>
//             <FormControl fullWidth variant="outlined" margin="normal">
            

//           <InputLabel  id="job-status-label">Gender</InputLabel>
//           <Select
//       required
//             labelId="job-status-label"
//             id="job-status-select"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             label="Job Status"
//           >
//             <MenuItem   value="Male">Male</MenuItem>
//             <br/>
//             <br/>

          
//             <MenuItem value="Female">Female </MenuItem>
//           </Select>
//         </FormControl>
//             <FormControl variant="standard" fullWidth>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <TextField
//                     name='password' placeholder='Input Your Password' fullWidth
//                     type={showPassword ? 'text' : 'password'} autoComplete='password'
//                     value={formData.password} onChange={handleChange} required
//                     sx={{
//                         '& i': { display: 'inline-flex' }
//                     }}
//                     InputProps={{
//                         endAdornment: <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={toggleShowPassword}
//                             onMouseDown={handleMouseDownPassword}
//                             edge="end" type='button'
//                         >
//                             {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon /> }
//                         </IconButton>
//                     }}
//                 />
//             </FormControl>
//             <Button variant='contained'
//                 type='submit' fullWidth
//                 sx={{ fontWeight: 400, paddingX: 7, paddingY: 1.5 }}
//             >
//                 Create
//             </Button>
//             <FormControlLabel
//                 label={<>
//                     By clicking Create account, I agree that I have read and accepted the
//                     <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Terms of Use</MuiLink> &nbsp;
//                     and &nbsp;
//                     <MuiLink color='secondary.main' underline='hover' component={Link} href='/signup'>Privacy Policy</MuiLink>
//                     .
//                 </>}
//                 name='accept'
//                 checked={formData.accept} required
//                 sx={{ alignItems: 'flex-start', gap: 1 }}
//                 slotProps={{
//                     typography: { variant: 'body2', color: '#9C9CA4' }
//                 }}
//                 control={
//                     <Checkbox onChange={handleChange} sx={{ padding: 0.5 }} />
//                 }
//             />

// {isError&&<Alert variant="filled" severity="warning">
// {isError}
// </Alert>}
//         </Stack>
//     )
// }

// export default SignupForm;


// // export default SignupForm;


import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Alert, Checkbox, Select, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Link as MuiLink, OutlinedInput, Stack, MenuItem,InputProps , TextField } from '@mui/material';
import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { getCookie } from 'cookies-next';
import Loader from '@/components/Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { setAuthTokenCookie, getAuthTokenCookie } from '../../../utils/auth';

import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'

interface FormData {
  username: string;
  email: string;
  phonenumber: string;
  password: string;
  accept: boolean;
  GraduationDates: string;
  gender: string;
  fullusername: string;
}
interface YourComponentProps {
    label: string;
    inputProps?: InputProps; // Allow passing InputProps
  }

const SignupForm: React.FC = () => {
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

  const [isClient, setIsClient] = useState<boolean>(false);
  const [isError, setisError] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    accept: false,
    GraduationDates: "",
    gender: "",
    fullusername: ''
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://promech-backend.addictaco.com/api/auth/local/register', formData);

      if (response.status == 200) {
        setTimeout(() => {
          push('/login');
        }, 4000)
        toast.success('registration successfully please loggin in wait to redirect');
      } else {
        // toast.error('Error submitting data');
      }

      if (response.status == 400) {
        // toast.success('registration ');
        console.log("aaaaaaaaaaaaaaaaaaaaa");
      } else {
        // toast.error('Error submitting data');
      }

      // Clear form fields
      setFormData({
        username: "",
        email: '',
        phonenumber: '',
        password: '',
        accept: false,
        GraduationDates: "",
        gender: "",
        fullusername: ''
      });
      // Perform any additional actions or redirects
    } catch (error: any) {
      setisError(error?.response?.data?.error?.message);
      // Handle error
    }
  }

  if (!isClient) return <Loader />

  return (
    <Stack gap={2} alignItems='center' width='100%' component='form' onSubmit={handleSubmit}
      sx={{
        '& > div': { gap: 1 }
      }}
    >
      <FormControl variant="standard" fullWidth>
        <FormLabel htmlFor="name">User Name</FormLabel>
        <TextField
          name='username' placeholder='Enter your user name' fullWidth
          inputProps={{ minLength: 10, maxLength: 20 }} value={formData.username} onChange={handleChange} required
        />
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <FormLabel htmlFor="name">Full Name</FormLabel>
        <TextField
          name='fullusername' placeholder='Enter your full name' fullWidth
          inputProps={{ minLength: 10, maxLength: 50 }} value={formData.fullusername} onChange={handleChange} required
        />
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <TextField
          name='email' placeholder='Enter your Email address' fullWidth type='email'
          value={formData.email} onChange={handleChange} required
          inputProps={{ minLength: 5, maxLength: 20 }}
        />
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <FormLabel htmlFor="GraduationDates">Graduation Date</FormLabel>
        <TextField
          name='GraduationDates' placeholder='Graduation Dates' fullWidth type='date'
          value={formData.GraduationDates}
          onChange={handleChange}
          required
          // value={formData.email} onChange={handleChange} required
        />
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <FormLabel htmlFor="email">Phone Number</FormLabel>
        <MuiTelInput
          value={formData.phonenumber} fullWidth required
          inputProps={{ minLength: 10, maxLength: 20 }}
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
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="job-status-label">Gender</InputLabel>
        <Select
          required
          labelId="job-status-label"
          id="job-status-select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          label="Job Status"
        >
          <MenuItem value="Male">Male</MenuItem>
          <br />
          <br />
          <MenuItem value="Female">Female </MenuItem>
        </Select>
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
              {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
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

      {isError && <Alert variant="filled" severity="warning">
        {isError}
      </Alert>}
    </Stack>
  )
}

export default SignupForm;