'use client';

// import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { getCookie } from 'cookies-next';
// import { Button, Grid, Stack, TextField } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { CircularProgress } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const ContactForm = () => {
//     const country = getCookie('country') as MuiTelInputCountry;
    
//     const [isClient, setIsClient] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         surName: '',
//         phone: '',
//         email: '',
//         message: ''
//     });

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     }

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//       try{
//         const careersResponse = await axios.post('http://promech-backend.addictaco.com/api/contacts', {
//             data: formData,
//           });
    
//           const careersData = careersResponse;
    
//           console.log('Careers API response:', careersData);
//         //   console.log('Careers API response:', careersData.data.id);
//         careersData.status==200?toast.success('Data submitted successfully!'):toast.error('Error submitting data');
        


//       }catch(error){
//         console.log('Careers API response:', error);
//         toast.error('Error submitting data');


//       }
        
//     }

//     console.log('formData', formData)

//     if(!isClient) return <Loader />

//     return (
//         <Stack width='100%' gap={2.5} component='form' onSubmit={handleSubmit}>
//             <Grid container columns={2} columnSpacing={2.5} rowGap={2.5}>
//                 <Grid item xs={2} sm={1}>
//                     <TextField
//                         name='name' label='Name' fullWidth
//                         value={formData.name} onChange={handleChange} required
//                     />
//                 </Grid>
//                 <Grid item xs={2} sm={1}>
//                     <TextField
//                         name='surName' label='Sur Name' fullWidth
//                         value={formData.surName} onChange={handleChange} required
//                     />
//                 </Grid>
//             </Grid>
            
//             <MuiTelInput
//                 value={formData.phone} fullWidth required
//                 label='Phone Number'
//                 onChange={(value: string, info: MuiTelInputInfo) => {
//                     console.log('MuiTelInputInfo', info)
//                     setFormData({
//                         ...formData,
//                         phone: value
//                     });
//                 }}
//                 // continents={continents}
//                 preferredCountries={['EG']} excludedCountries={['IL']} defaultCountry={country}
//                 forceCallingCode disableFormatting
//             />
//             <TextField
//                 name='email' label='Email' fullWidth type='email'
//                 value={formData.email} onChange={handleChange} required
// 			/>
//             <TextField
//                 name='message' label='Tell Us AnyThing......'
//                 fullWidth multiline minRows={6}
//                 value={formData.message} onChange={handleChange} required
// 			/>
//             <Button variant='contained' size='large' type='submit'
//                 sx={{
//                     fontSize: '19px', paddingY: 1, paddingX: 6,
//                     fontWeight: 600, alignSelf: 'flex-start'
//                 }}
//             >
//                 Submit
//             </Button>
//       <ToastContainer />

//         </Stack>
//     )
// }

// export default ContactForm;


// import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { getCookie } from 'cookies-next';
// import { Button, Grid, Stack, TextField } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { CircularProgress } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// interface FormData {
//   name: string;
//   surName: string;
//   phone: string;
//   email: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {
//   const country = getCookie('country') as MuiTelInputCountry;

//   const [isClient, setIsClient] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     surName: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const careersResponse = await axios.post('http://promech-backend.addictaco.com/api/contacts', {
//         data: formData,
//       });

//       const careersData = careersResponse;

//       console.log('Careers API response:', careersData);
//       careersData.status === 200 ? toast.success('Data submitted successfully!') : toast.error('Error submitting data');
//     } catch (error) {
//       console.log('Careers API response:', error);
//       toast.error('Error submitting data');
//     }
//   };

//   console.log('formData', formData);

//   if (!isClient) return <Loader />;

//   return (
//     <Stack width='100%' gap={2.5} component='form' onSubmit={handleSubmit}>
//       <Grid container columns={2} columnSpacing={2.5} rowGap={2.5}>
//         <Grid item xs={2} sm={1}>
//           <TextField
//             name='name' label='Name' fullWidth
//             value={formData.name} onChange={handleChange} required
//           />
//         </Grid>
//         <Grid item xs={2} sm={1}>
//           <TextField
//             name='surName' label='Sur Name' fullWidth
//             value={formData.surName} onChange={handleChange} required
//           />
//         </Grid>
//       </Grid>

//       <MuiTelInput
//         value={formData.phone} fullWidth required
//         label='Phone Number'
//         onChange={(value: string, info: MuiTelInputInfo) => {
//           console.log('MuiTelInputInfo', info);
//           setFormData({
//             ...formData,
//             phone: value
//           });
//         }}
//         // continents={continents}
//         preferredCountries={['EG']} excludedCountries={['IL']} defaultCountry={country}
//         forceCallingCode disableFormatting
//       />
//       <TextField
//         name='email' label='Email' fullWidth type='email'
//         value={formData.email} onChange={handleChange} required
//       />
//       <TextField
//         name='message' label='Tell Us Anything......'
//         fullWidth multiline minRows={6}
//         value={formData.message} onChange={handleChange} required
//       />
//       <Button variant='contained' size='large' type='submit'
//         sx={{
//           fontSize: '19px', paddingY: 1, paddingX: 6,
//           fontWeight: 600, alignSelf: 'flex-start'
//         }}
//       >
//         Submit
//       </Button>
//       <ToastContainer />
//     </Stack>
//   );
// };

// export default ContactForm;
//////////////////////////////////////////////////////////////////////////////////////////////
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { Button, Grid, Stack, TextField } from '@mui/material';
import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
import Loader from '@/components/Loader';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  surName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const country = getCookie('country') as MuiTelInputCountry;
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    surName: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const careersResponse = await axios.post('http://promech-backend.addictaco.com/api/contacts', {
        data: formData,
      });
      const careersData = careersResponse;
      console.log('Careers API response:', careersData);
   if(   careersData.status === 200) { toast.success('Data submitted successfully!')
    location.reload()
    } else{ toast.error('Error submitting data')};
    } catch (error) {
      console.log('Careers API response:', error);
      toast.error('Error submitting data');
    }finally{
      setIsLoading(false)
    }
  };



  if (!isClient) return <Loader />;

  return (
    <Stack width='100%' gap={2.5} component='form' onSubmit={handleSubmit}>
      <Grid container columns={2} columnSpacing={2.5} rowGap={2.5}>
        <Grid item xs={2} sm={1}>
          <TextField
            name='name' label='Name' fullWidth
            value={formData.name} onChange={handleChange} required
          />
        </Grid>
        <Grid item xs={2} sm={1}>
          <TextField
            name='surName' label='Sur Name' fullWidth
            value={formData.surName} onChange={handleChange} required
          />
        </Grid>
      </Grid>
      <MuiTelInput
        value={formData.phone} fullWidth required
        label='Phone Number'
        onChange={(value: string, info: MuiTelInputInfo) => {
          console.log('MuiTelInputInfo', info);
          setFormData({
            ...formData,
            phone: value
          });
        }}
        // continents={continents}
        preferredCountries={['EG']} excludedCountries={['IL']} defaultCountry={country}
        forceCallingCode disableFormatting
      />
      <TextField
        name='email' label='Email' fullWidth type='email'
        value={formData.email} onChange={handleChange} required
      />
      <TextField
        name='message' label='Tell Us Anything......'
        fullWidth multiline minRows={6}
        value={formData.message} onChange={handleChange} required
      />
      <Button disabled={isLoading} variant='contained' size='large' type='submit'
        sx={{
          fontSize: '19px', paddingY: 1, paddingX: 6,
          fontWeight: 600, alignSelf: 'flex-start'
        }}
      >
        Submit
      </Button>
      <ToastContainer />
    </Stack>
  );
};

export default ContactForm;


