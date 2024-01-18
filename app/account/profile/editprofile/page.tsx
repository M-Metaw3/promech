"use client"

import { getAuthTokenCookie } from '@/utils/auth';
import React, { useEffect, ChangeEvent, useState } from 'react';
import { Container, Box, Typography, TextField, Button, Avatar, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';

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
  const [Profile, setProfile] = useState<File | null>(null);
  const [Profileimage, setProfileimage] = useState<File | null>(null);

  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [resumdata, setresumdata] = useState<any>('');
  


  const { push } = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const tokenString = getAuthTokenCookie();
      const parsetoken = tokenString && JSON.parse(tokenString);
console.log(parsetoken.jwt)
      if (!tokenString) {
        push('/login');
        return;
      } else {
        const response = await fetch("https://promecha.onrender.com/api/users/me/?populate=profile&populate=resume", {
          headers: {
            Authorization: `Bearer ${parsetoken.jwt}`,
          },
        });
        const datares = await response.json();
        setProfileimage(datares?.profile?.url)
        setresumdata(datares?.resume?.name)
        console.log(datares)
        setProfileData({
          fullName: datares.username,
          jobStatus: datares.jobStatus||false,
          phoneNumber: datares.phonenumber,
          linkedInLink:datares.linkedin,  // Set the desired initial value
          websiteLink: datares.website, // Set the desired initial value
          bio: datares.bio||'', // Set the desired initial value
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

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // setResumeFile(file);
    setProfile(file || null);
  };
  const handleProfilChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // setProfile(file);
    setProfile(file || null);
  };
console.log(Profile)

 

  const handleSubmit = async () => {
    console.log(profileData)
    const formData = new FormData();
    formData.append('username', profileData.fullName);
    formData.append('jobstatus', profileData.jobStatus?.toString());
    formData.append('phonenumber', profileData.phoneNumber);
    formData.append('linkedInLink', profileData.linkedInLink);
    formData.append('websiteLink', profileData.websiteLink);
    formData.append('bio', profileData.bio);
    if (resumeFile !== null) {
      formData.append('resume', resumeFile);
    }
   

    const tokenString = getAuthTokenCookie();
    const parsetoken = tokenString && JSON.parse(tokenString);
    const response = await fetch(`https://promecha.onrender.com/api/users/${parsetoken.user.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${parsetoken.jwt}`,
      },
      body: formData,
    });
    
    
    
    
    if (response.ok) {
      console.log(response);

      if (Profile !== null) {


        const ProfileFormData = new FormData();
        ProfileFormData.append('ref', 'plugin::users-permissions.user');
        ProfileFormData.append('refId', parsetoken.user.id.toString());
        ProfileFormData.append('field', 'profile');
        ProfileFormData.append('files', Profile);
        const uploadprofile = await axios.post('https://promecha.onrender.com/api/upload', ProfileFormData, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            setUploadProgress(progress);
          },
        })



        if (!uploadprofile.data || !uploadprofile.data[0]) {
          console.log('Failed to upload resume.');
       
          return;
        }else{

          alert("your data updated")
        }









      }
      if (resumeFile !== null) {
        const resumeFormData = new FormData();
        resumeFormData.append('ref', 'plugin::users-permissions.user');
        resumeFormData.append('refId', parsetoken.user.id.toString());
        resumeFormData.append('field', 'resume');
        resumeFormData.append('files', resumeFile);

        const uploadResponse = await axios.post('https://promecha.onrender.com/api/upload', resumeFormData, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
            setUploadProgress(progress);
          },
        });



   
  
        if (!uploadResponse.data || !uploadResponse.data[0]) {
          console.log('Failed to upload resume.');
       
          return;
        }else{

          alert("your data updated")
        }
      }
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
            src={ Profile? URL.createObjectURL(Profile) : Profileimage?`https://promecha.onrender.com${Profileimage}`:''}
            sx={{ width: 200, height: 200, mb: 2 }}
          />
          <Typography variant="subtitle1">Upload Photo</Typography>
          <Typography variant="body2" color="textSecondary">300x300 max 2MB</Typography>
          <input type="file" accept="image/*" onChange={handleProfilChange} />
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
{resumdata?(    <Typography variant="h6" gutterBottom>
{resumdata}
        </Typography>):''}
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