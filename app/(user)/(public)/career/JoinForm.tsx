'use client';

// import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { getCookie } from 'cookies-next';
// import { Button, Stack, TextField } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import Loader from '@/components/Loader';
// import axios from 'axios';

// const JoinForm = () => {
//     const country = getCookie('country') as MuiTelInputCountry;
    
//     const [isClient, setIsClient] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         message: '',
//         resume: null as File | null,
//     });
    
//     // surName: '',
//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     }

//     const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
//         if(e.target.files?.length) {
//             setFormData({
//                 ...formData,
//                 resume: e.target.files[0]
//             });
//         }
//     }

//     // const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();
     

   
//     //     try {
//     //         // const formData = new FormData();
//     //         // formData.append('name',formData.name);
//     //         // // formData.append('phone', phone);
//     //         // formData.append('email', formData.email);
//     //         // formData.append('message', formData.message);
//     //       await  fetch('https://promecha.onrender.com/api/careers', {
//     //             method: 'POST',
//     //             headers: {
//     //               'Content-Type': 'application/json',
//     //               // Include any additional headers as needed (e.g., authorization token)
//     //             },
//     //             body: JSON.stringify({data:formData}),
//     //           }).then((el)=>el.json()).then((el)=>console.log(el))
       
      

              
           
//     //         // Perform any additional actions or show a success message
//     //       } catch (error:any) {
//     //         console.error('Error submitting data:', error);
//     //         // Handle the error or show an error message
//     //       }








        
//     // }

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
      
//         try {
//           // Step 1: Post data to the careers API
//           const careersResponse = await fetch('https://promecha.onrender.com/api/careers', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               // Include any additional headers as needed (e.g., authorization token)
//             },
//             body: JSON.stringify({ data: formData }),
//           });
      
//           const careersData = await careersResponse.json();
      
//           console.log('Careers API response:', careersData);
//           console.log('Careers API response:', careersData.data.id);

      
//           // Step 2: If posting to careers API is successful, upload the resume to the upload API
//           if (careersResponse.ok && careersData.data.id && formData.resume) {
//             const formDataUpload = new FormData();
//             formDataUpload.append('ref', 'api::career.career');
//             formDataUpload.append('refId', careersData.data.id);
//             formDataUpload.append('field', 'resume');
//             formDataUpload.append('files', formData.resume);
      
//             const uploadResponse = await fetch('https://promecha.onrender.com/api/upload', {
//               method: 'POST',
//               body: formDataUpload,
//             });
      
//             const uploadData = await uploadResponse.json();
      
//             console.log('Upload API response:', uploadData);
      
//             // Perform any additional actions or show a success message
//           } else {
//             // Handle the case where posting to the careers API was not successful
//             console.error('Error posting data to the careers API:', careersData);
//           }
//         } catch (error:any) {
//           console.error('Error submitting data:', error);
//           // Handle the error or show an error message
//         }
//       };
      


//     const uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
//         <path d="M1.75488 24.1289H18.0674" stroke="#12595C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//         <path d="M9.91113 18.3464V1M9.91113 1L14.6689 6.05936M9.91113 1L5.15332 6.05936" stroke="#12595C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>

//     if(!isClient) return <Loader />

//     return (
//         <Stack width='100%' maxWidth={650}
//             gap={2.5} alignItems='center'
//             component='form' onSubmit={handleSubmit}
//             sx={{
//                 '& > div': { bgcolor: '#FFF' }
//             }}
//         >
//             <TextField
//                 name='name' label='Name' fullWidth
//                 value={formData.name} onChange={handleChange} required
//             />
            // <MuiTelInput
            //     value={formData.phone} fullWidth required
            //     label='Phone Number'
            //     onChange={(value: string, info: MuiTelInputInfo) => {
            //         console.log('MuiTelInputInfo', info)
            //         setFormData({
            //             ...formData,
            //             phone: value
            //         });
            //     }}
            //     // continents={continents}
            //     preferredCountries={['EG']} excludedCountries={['IL']} defaultCountry={country}
            //     forceCallingCode disableFormatting
            // />
//             <TextField
//                 name='email' label='Email' fullWidth type='email'
//                 value={formData.email} onChange={handleChange} required
// 			/>
            // <TextField
            //     name='resume' label='Upload Resume' fullWidth type='file'
            //     onChange={handleChangeFile} required
            //     InputProps={{ endAdornment: uploadIcon }}
            //     inputProps={{ style: { opacity: 0 } }}
            // />
//             <TextField
//                 name='message' label='Tell Us AnyThing......'
//                 fullWidth multiline minRows={6}
//                 value={formData.message} onChange={handleChange} required
// 			/>
//             <Button variant='contained' size='large' type='submit'
//                 sx={{
//                     fontSize: '19px', paddingY: 1, paddingX: 6,
//                     fontWeight: 600, marginTop: 3
//                 }}
//             >
//                 Submit
//             </Button>
//         </Stack>
//     )
// }

// export default JoinForm;


// import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { getCookie } from 'cookies-next';
// import { Button, Stack, TextField ,Typography} from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { CircularProgress } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const JoinForm = () => {
//   const country = getCookie('country') as MuiTelInputCountry;

//   const [isClient, setIsClient] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: '',
//     resume: null as File | null,
//   });


// //   console.log(formData.resume.name)
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.length) {
//       setFormData({
//         ...formData,
//         resume: e.target.files[0],
//       });
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       setIsLoading(true);

//       // Step 1: Post data to the careers API
//       const careersResponse = await axios.post('https://promecha.onrender.com/api/careers', {
//         data: formData,
//       });

//       const careersData = careersResponse.data;

//       console.log('Careers API response:', careersData);
//       console.log('Careers API response:', careersData.data.id);

//       // Step 2: If posting to careers API is successful, upload the resume to the upload API
//       if (careersResponse.status === 200 && careersData.data.id && formData.resume) {
//         const formDataUpload = new FormData();
//         formDataUpload.append('ref', 'api::career.career');
//         formDataUpload.append('refId', careersData.data.id);
//         formDataUpload.append('field', 'resume');
//         formDataUpload.append('files', formData.resume);

//         const uploadResponse = await axios.post('https://promecha.onrender.com/api/upload', formDataUpload, {
//           onUploadProgress: (progressEvent) => {
//             const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(progress);
//           },
//         });

//         const uploadData = uploadResponse.data;

//         console.log('Upload API response:', uploadData);

//         toast.success('Data submitted successfully!');
//         setFormData({
//             name: '',
//             phone: '',
//             email: '',
//             message: '',
//             resume: null as File | null,
//           })
//         // Perform any additional actions or show a success message
//       } else {
//         // Handle the case where posting to the careers API was not successful
//         console.error('Error posting data to the careers API:', careersData);
//         toast.error('Error submitting data');
//       }
//     } catch (error:any) {
//       console.error('Error submitting data:', error);
//       toast.error('Error submitting data');
//     } finally {
//       setIsLoading(false);
//       setUploadProgress(0);
//     }
//   };

//   const uploadIcon = (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
//       <path
//         d="M1.75488 24.1289H18.0674"
//         stroke="#12595C"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M9.91113 18.3464V1M9.91113 1L14.6689 6.05936M9.91113 1L5.15332 6.05936"
//         stroke="#12595C"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   if (!isClient) return <Loader />;

//   return (
//     <Stack
//       width="100%"
//       maxWidth={650}
//       gap={2.5}
//       alignItems="center"
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         '& > div': { bgcolor: '#FFF' },
//       }}
//     >
//       <TextField
//         name="name"
//         label="Name"
//         fullWidth
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <MuiTelInput
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
//       <TextField
//         name="email"
//         label="Email"
//         fullWidth
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//         <TextField
//                 name='resume' label='Upload Resume' fullWidth type='file'
//                 onChange={handleChangeFile} required
//                 InputProps={{ endAdornment: uploadIcon }}
//                 inputProps={{ style: { opacity: 0 } }}
//             />
                
//                 {formData?.resume?.name? <Typography variant='h5' fontSize='16px' fontWeight={600} color='primary'>{formData?.resume?.name}</Typography>:''}
//       <TextField
//         name="message"
//         label="Message"
//         fullWidth
//         multiline
//         rows={4}
//         value={formData.message}
//         onChange={handleChange}
//         required
//       />




        
//       <label htmlFor="upload-resume">
//         <input
//           id="upload-resume"
//           type="file"
//           accept=".pdf,.doc,.docx"
//           onChange={handleChangeFile}
//           style={{ display: 'none' }}
//         />








//       </label>
//       <Button
//         type="submit"
//         variant="contained"
//         disabled={isLoading}
//         sx={{
//           textTransform: 'none',
//         }}
//       >
//         {isLoading ? <CircularProgress size={24} /> : 'Submit'}
//       </Button>

//       {uploadProgress > 0 && (
//         <div>
//           <progress value={uploadProgress} max={100} />
//           <span>{uploadProgress}% uploaded</span>
//         </div>
//       )}

//       <ToastContainer />
//     </Stack>
//   );
// };

// export default JoinForm;

/////////////////////////////////////////////////////////////////////////////////////
// import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { getCookie } from 'cookies-next';
// import { Button, Stack, TextField, Typography, CircularProgress } from '@mui/material';
// import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
// import Loader from '@/components/Loader';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   message: string;
//   resume: File | null;
// }

// const JoinForm: React.FC = () => {
//   const country = getCookie('country') as MuiTelInputCountry;

//   const [isClient, setIsClient] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phone: '',
//     email: '',
//     message: '',
//     resume: null,
//   });

//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.length) {
//       setFormData({
//         ...formData,
//         resume: e.target.files[0],
//       });
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       setIsLoading(true);

//       // Step 1: Post data to the careers API
//       const careersResponse = await axios.post('https://promecha.onrender.com/api/careers', {
//         data: formData,
//       });

//       const careersData = careersResponse.data;

//       console.log('Careers API response:', careersData);
//       console.log('Careers API response:', careersData.data.id);

//       // Step 2: If posting to careers API is successful, upload the resume to the upload API
//       if (careersResponse.status === 200 && careersData.data.id && formData.resume) {
//         const formDataUpload = new FormData();
//         formDataUpload.append('ref', 'api::career.career');
//         formDataUpload.append('refId', careersData.data.id);
//         formDataUpload.append('field', 'resume');
//         formDataUpload.append('files', formData.resume);

//         const uploadResponse = await axios.post('https://promecha.onrender.com/api/upload', formDataUpload, {
//           onUploadProgress: (progressEvent) => {
//             const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(progress);
//           },
//         });

//         const uploadData = uploadResponse.data;

//         console.log('Upload API response:', uploadData);

//         toast.success('Data submitted successfully!');
//         setFormData({
//           name: '',
//           phone: '',
//           email: '',
//           message: '',
//           resume: null,
//         });
//         // Perform any additional actions or show a success message
//       } else {
//         // Handle the case where posting to the careers API was not successful
//         console.error('Error posting data to the careers API:', careersData);
//         toast.error('Error submitting data');
//       }
//     } catch (error:any) {
//       console.error('Error submitting data:', error);
//       toast.error('Error submitting data');
//     } finally {
//       setIsLoading(false);
//       setUploadProgress(0);
//     }
//   };

//   if (!isClient) return <Loader />;

//   return (
//     <Stack
//       width="100%"
//       maxWidth={650}
//       gap={2.5}
//       alignItems="center"
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         '& > div': { bgcolor: '#FFF' },
//       }}
//     >
//       <TextField
//         name="name"
//         label="Name"
//         fullWidth
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <MuiTelInput
//         value={formData.phone}
//         fullWidth
//         required
//         label="Phone Number"
//         onChange={(value: string, info: MuiTelInputInfo) => {
//           console.log('MuiTelInputInfo', info);
//           setFormData({
//             ...formData,
//             phone: value,
//           });
//         }}
//         preferredCountries={['EG']}
//         excludedCountries={['IL']}
//         defaultCountry={country}
//         forceCallingCode
//         disableFormatting
//       />
//       <TextField
//         name="email"
//         label="Email"
//         fullWidth
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <TextField
//         name="resume"
//         label="Upload Resume"
//         fullWidth
//         type="file"
//         onChange={handleChangeFile}
//         required
//         // InputProps={{ endAdornment }}
//         inputProps={{ style: { opacity: 0 } }}
//       />
//       {formData?.resume?.name ? (
//         <Typography variant="h5" fontSize="16px" fontWeight={600} color="primary">
//           {formData?.resume?.name}
//         </Typography>
//       ) : (
//         ''
//       )}
//       <TextField
//         name="message"
//         label="Message"
//         fullWidth
//         multiline
//         rows={4}
//         value={formData.message}
//         onChange={handleChange}
//         required
//       />
//       <label htmlFor="upload-resume">
//         <input
//           id="upload-resume"
//           type="file"
//           accept=".pdf,.doc,.docx"
//           onChange={handleChangeFile}
//           style={{ display: 'none' }}
//         />
//       </label>
//       <Button
//         type="submit"
//         variant="contained"
//         disabled={isLoading}
//         sx={{
//           textTransform: 'none',
//         }}
//       >
//         {isLoading ? <CircularProgress size={24} /> : 'Submit'}
//       </Button>
//       {uploadProgress > 0 && (
//         <div>
//           <progress value={uploadProgress} max={100} />
//           <span>{uploadProgress}% uploaded</span>
//         </div>
//       )}
//       <ToastContainer />
//     </Stack>
//   );
// };

// export default JoinForm;
//////////////////////////////////////////////////////////////////////////
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { Button, Stack, TextField, Typography, CircularProgress } from '@mui/material';
import { MuiTelInput, MuiTelInputCountry, MuiTelInputInfo } from 'mui-tel-input';
import Loader from '@/components/Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  resume: File | null;
}

const JoinForm: React.FC = () => {
  const country = getCookie('country') as MuiTelInputCountry;
  const [isClient, setIsClient] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    resume: null,
  });
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Step 1: Post data to the careers API
      const careersResponse = await axios.post('https://promecha.onrender.com/api/careers', {
        data: formData,
      });
      const careersData = careersResponse.data;
      console.log('Careers API response:', careersData);
      console.log('Careers API response:', careersData.data.id);

      // Step 2: If posting to careers API is successful, upload the resume to the upload API
      if (careersResponse.status === 200 && careersData.data.id && formData.resume) {
        const formDataUpload = new FormData();
        formDataUpload.append('ref', 'api::career.career');
        formDataUpload.append('refId', careersData.data.id);
        formDataUpload.append('field', 'resume');
        formDataUpload.append('files', formData.resume);

        const uploadResponse = await axios.post('https://promecha.onrender.com/api/upload', formDataUpload, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            setUploadProgress(progress);
          },
        });
        const uploadData = uploadResponse.data;
        console.log('Upload API response:', uploadData);
        toast.success('Data submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          resume: null,
        });
        // Perform any additional actions or show a success message
      } else {
        // Handle the case where posting to the careers API was not successful
        console.error('Error posting data to the careers API:', careersData);
        toast.error('Error submitting data');
      }
    } catch (error: any) {
      console.error('Error submitting data:', error);
      toast.error('Error submitting data');
    } finally {
      setIsLoading(false);
      setUploadProgress(0);
    }
  };

  if (!isClient) return <Loader />;

  return (
    <Stack
      width="100%"
      maxWidth={650}
      gap={2.5}
      alignItems="center"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > div': { bgcolor: '#FFF' },
      }}
    >
      <TextField
        name="name"
        label="Name"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        required
      />
      <MuiTelInput
        value={formData.phone}
        fullWidth
        required
        label="Phone Number"
        onChange={(value: string, info: MuiTelInputInfo) => {
          console.log('MuiTelInputInfo', info);
          setFormData({
            ...formData,
            phone: value,
          });
        }}
        preferredCountries={['EG']}
        excludedCountries={['IL']}
        defaultCountry={country}
        forceCallingCode
        disableFormatting
      />
      <TextField
        name="email"
        label="Email"
        fullWidth
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        name="resume"
        label="Upload Resume"
        fullWidth
        type="file"
        onChange={handleChangeFile}
        required
        // InputProps={{ endAdornment }}
        inputProps={{ style: { opacity: 0 } }}
      />
      {formData?.resume?.name ? (
        <Typography variant="h5" fontSize="16px" fontWeight={600} color="primary">
          {formData?.resume?.name}
        </Typography>
      ) : (
        ''
      )}
      <TextField
        name="message"
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <label htmlFor="upload-resume">
        <input
          id="upload-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChangeFile}
          style={{ display: 'none' }}
        />
      </label>
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        sx={{
          textTransform: 'none',
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Submit'}
      </Button>
      {uploadProgress > 0 && (
        <div>
          <progress value={uploadProgress} max={100} />
          <span>{uploadProgress}% uploaded</span>
        </div>
      )}
      <ToastContainer />
    </Stack>
  );
};

export default JoinForm;


