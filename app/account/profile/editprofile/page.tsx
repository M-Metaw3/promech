"use client"
// import { getAuthTokenCookie } from '@/utils/auth';
// import React, { useEffect } from 'react';
// import { Container, Box, Typography, TextField, Button, Avatar, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// function EditProfile() {
//   // Replace with actual state management logic
//   const [profileData, setProfileData] = React.useState({
//     fullName: '',
//     jobStatus: true,
//     phoneNumber: '',
//     linkedInLink: '',
//     websiteLink: '',
//     bio: '',
//   });
//   const [resumeFile, setResumeFile] = React.useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const tokenString = getAuthTokenCookie();
//       const parsetoken = tokenString && JSON.parse(tokenString);

//       if (!tokenString) {
//         push('/login');
//         return;
//       } else {
//         const response = await fetch("http://localhost:1337/api/users/me", {
//           headers: {
//             Authorization: `Bearer ${parsetoken.jwt}`,
//           },
//         });
//         const datares = await response.json();
//         setProfileData({
//           fullName: datares.username,
//           jobStatus: datares.jobStatus,
//           phoneNumber: datares.phonenumber,
//           linkedInLink: '', // Set the desired initial value
//           websiteLink: '', // Set the desired initial value
//           bio: '', // Set the desired initial value
//         });
//       }
//     };
//     fetchData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleJobStatusChange = (e) => {
//     const { value } = e.target;
//     setProfileData((prevData) => ({
//       ...prevData,
//       jobStatus: value === 'true',
//     }));
//   };

//   const handleResumeChange = (e) => {
//     const file = e.target.files[0];
//     setResumeFile(file);
//   };

//   const handleSubmit = async () => {
//     console.log(profileData)
//     const formData = new FormData();
//     formData.append('username', profileData.fullName);
//     formData.append('jobstatus', profileData.jobStatus);
//     formData.append('phonenumber', profileData.phoneNumber);
//     formData.append('linkedInLink', profileData.linkedInLink);
//     formData.append('websiteLink', profileData.websiteLink);
//     formData.append('bio', profileData.bio);
//     formData.append('resume', resumeFile);

//     const tokenString = getAuthTokenCookie();
//     const parsetoken = tokenString && JSON.parse(tokenString);
//     const response = await fetch(`http://localhost:1337/api/users/${parsetoken.user.id}`, {
//       method: 'PUT',
//       headers: {
//         Authorization: `Bearer ${parsetoken.jwt}`,
//       },
//       body: formData,
//     });
//     console.log(response);

//     if (response.ok) {
//       console.log('Data updated successfully!');
//     } else {
//       console.log('Failed to update data.');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box my={4} p={2} borderRadius={2} boxShadow={3}>
//         <Typography variant="h5" gutterBottom>
//           Edit Profile
//         </Typography>
//         <Box my={2}>
//           <Avatar
//             src="https://via.placeholder.com/150x150"
//             sx={{ width: 150, height: 150, mb: 2 }}
//           />
//           {/* Replace the below line with <AvatarEdit /> from react-avatar-edit or similar functionality */}
//           <Typography variant="subtitle1">Upload Photo</Typography>
//           <Typography variant="body2" color="textSecondary">300x300 max 2MB</Typography>
//         </Box>
//         <TextField
//           fullWidth
//           label="Full Name"
//           variant="outlined"
//           name="fullName"
//           value={profileData.fullName}
//           onChange={handleInputChange}
//           margin="normal"
//         />
//         <FormControl fullWidth variant="outlined" margin="normal">
//           <InputLabel id="job-status-label">Job Status</InputLabel>
//           <Select
//             labelId="job-status-label"
//             id="job-status-select"
//             name="jobStatus"
//             value={profileData?.jobStatus?  .toString()}
//             onChange={handleJobStatusChange}
//             label="Job Status"
//           >
//             <MenuItem value="true">True</MenuItem>
//             <MenuItem value="false">False</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           fullWidth
//           label="Phone Number"
//           variant="outlined"
//           name="phoneNumber"
//           value={profileData.phoneNumber}
//           onChange={handleInputChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="LinkedIn"
//           variant="outlined"
//           name="linkedInLink"
//           value={profileData.linkedInLink}
//           onChange={handleInputChange}
//           margin="normal"
//         />
        
//         <TextField
//           fullWidth
//           label="Website"
//           variant="outlined"
//           name="websiteLink"
//           value={profileData.websiteLink}
//           onChange={handleInputChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Bio"
//           variant="outlined"
//           name="bio"
//           value={profileData.bio}
//           onChange={handleInputChange}
//           margin="normal"
//           multiline
//           rows={4}
//         />
//         <Box my={2}>
//           <Typography variant="subtitle1">Upload as</Typography>
//           <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
//         </Box>
//         <Box mt={3}>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default EditProfile;
import { getAuthTokenCookie } from '@/utils/auth';
import React, { useEffect, ChangeEvent, useState } from 'react';
import { Container, Box, Typography, TextField, Button, Avatar, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ProfileData {
  fullName: string;
  jobStatus: boolean;
  phoneNumber: string;
  linkedInLink: string;
  websiteLink: string;
  bio: string;
}

function EditProfile() {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    jobStatus: true,
    phoneNumber: '',
    linkedInLink: '',
    websiteLink: '',
    bio: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { push } = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const tokenString = getAuthTokenCookie();
      const parsetoken = tokenString && JSON.parse(tokenString);

      if (!tokenString) {
        push('/login');
        return;
      } else {
        const response = await fetch("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${parsetoken.jwt}`,
          },
        });
        const datares = await response.json();
        setProfileData({
          fullName: datares.username,
          jobStatus: datares.jobStatus,
          phoneNumber: datares.phonenumber,
          linkedInLink: '', // Set the desired initial value
          websiteLink: '', // Set the desired initial value
          bio: '', // Set the desired initial value
        });
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleJobStatusChange = (e:any) => {
    const { value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      jobStatus: value === 'true',
    }));
  };

  // const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setResumeFile(file);
  // };
  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    setResumeFile(file || null);  // Set null if file is undefined
  };

  const handleSubmit = async () => {
    console.log(profileData)
    const formData = new FormData();
    formData.append('username', profileData.fullName);
    formData.append('jobstatus', profileData.jobStatus.toString());
    formData.append('phonenumber', profileData.phoneNumber);
    formData.append('linkedInLink', profileData.linkedInLink);
    formData.append('websiteLink', profileData.websiteLink);
    formData.append('bio', profileData.bio);
    if (resumeFile !== null) {
      formData.append('resume', resumeFile);
    }
   

    const tokenString = getAuthTokenCookie();
    const parsetoken = tokenString && JSON.parse(tokenString);
    const response = await fetch(`http://localhost:1337/api/users/${parsetoken.user.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${parsetoken.jwt}`,
      },
      body: formData,
    });
    console.log(response);

    if (response.ok) {
      console.log('Data updated successfully!');
    } else {
      console.log('Failed to update data.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4} p={2} borderRadius={2} boxShadow={3}>
        <Typography variant="h5" gutterBottom>
          Edit Profile
        </Typography>
        <Box my={2}>
          <Avatar
            src="https://via.placeholder.com/150x150"
            sx={{ width: 150, height: 150, mb: 2 }}
          />
          {/* Replace the below line with <AvatarEdit /> from react-avatar-edit or similar functionality */}
          <Typography variant="subtitle1">Upload Photo</Typography>
          <Typography variant="body2" color="textSecondary">300x300 max 2MB</Typography>
        </Box>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          name="fullName"
          value={profileData.fullName}
          onChange={handleInputChange}
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="job-status-label">Job Status</InputLabel>
          <Select
            labelId="job-status-label"
            id="job-status-select"
            name="jobStatus"
            value={profileData?.jobStatus?.toString()}
            onChange={handleJobStatusChange}
            label="Job Status"
          >
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={profileData.phoneNumber}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="LinkedIn"
          variant="outlined"
          name="linkedInLink"
          value={profileData.linkedInLink}
          onChange={handleInputChange}
          margin="normal"
        />
        
        <TextField
          fullWidth
          label="Website"
          variant="outlined"
          name="websiteLink"
          value={profileData.websiteLink}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Bio"
          variant="outlined"
          name="bio"
          value={profileData.bio}
          onChange={handleInputChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Box my={2}>
          <Typography variant="subtitle1">Upload as</Typography>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
        </Box>
        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default EditProfile;