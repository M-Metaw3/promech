"use client"
// import { getAuthTokenCookie } from '@/utils/auth';





// import React, { useState,useEffect } from 'react';
// import { Button, TextField, Box, Typography } from '@mui/material';
// import { useRouter } from "next/navigation";

// const UserProfile = () => {
//   const [user, setUser] = useState({
//     username: 'johndoe',
//     email: 'johndoe@example.com',
//     jobStatus: 'Employed',
//     bio: 'A short bio...',
//     phoneNumber: '123-456-7890',
//     linkedin: 'https://www.linkedin.com/in/johndoe/',
//     websiteLink: 'https://www.johndoe.com',
//     resume: 'url-to-resume.pdf',
//     avatar: 'url-to-avatar.jpg',
//   });

//   const [editMode, setEditMode] = useState(false);

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };



//   const { push } = useRouter();



//   useEffect(() => {
//     const fetchData = async () => {
//       const tokenString: string | null = getAuthTokenCookie();

//       console.log(tokenString);
//       const parsetoken = tokenString && JSON.parse(tokenString);
      
//       console.log('Authorization Token:', `Bearer ${parsetoken.jwt}`)
//       if (!tokenString) {
//         // toast.error('You must login to take this service');
//         push('/login');
//         return;
//       } else {
//         const response = await fetch("http://promech-backend.addictaco.com//api/users/me", {
//           headers: {
//             Authorization: `Bearer ${parsetoken.jwt}`,
//           },
//         });
//         const datares = await response.json();
      
//         console.log(datares);
//       }
//     };
//     fetchData();
//   }, []);






  

//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//   };

//   const handleUpdateProfile = () => {
//     console.log('Profile updates to be sent to the API:', user);
//     // API request to update profile would go here
//     setEditMode(false);
//   };

//   const handleUploadResume = (event:any) => {
//     console.log('File to be uploaded:', event.target.files[0]);
//     // Handle file upload - Axios or Fetch API can be used
//   };

//   const handleForgetPassword = () => {
//     console.log('Initiate forget password flow here');
//     // API request to initiate password reset flow
//   };

//   return (
//     <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         User Profile
//       </Typography>
//       <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }}>
//         <TextField
//           name="username"
//           label="Username"
//           fullWidth
//           value={user.username}
//           onChange={handleChange}
//           disabled={!editMode}
//         />
//         <TextField
//           name="email"
//           label="Email"
//           fullWidth
//           value={user.email}
//           onChange={handleChange}
//           disabled={!editMode}
//         />
//         <TextField
//           name="bio"
//           label="Bio"
//           fullWidth
//           multiline
//           rows={4}
//           value={user.bio}
//           onChange={handleChange}
//           disabled={!editMode}
//         />
//         {/* Add more fields as needed */}
//         <div>
//           {editMode ? (
//             <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
//               Save
//             </Button>
//           ) : (
//             <Button variant="contained" color="primary" onClick={handleEditToggle}>
//               Edit Profile
//             </Button>
//           )}
//         </div>
//       </Box>
//       <Button variant="contained" color="secondary" onClick={handleForgetPassword}>
//         Forget Password
//       </Button>
//       <Box sx={{ '& > input': { m: 1 } }}>
//         <input
//           accept="application/pdf"
//           style={{ display: 'none' }}
//           id="resume-upload"
//           type="file"
//           onChange={handleUploadResume}
//         />
//         <label htmlFor="resume-upload">
//           <Button variant="contained" component="span">
//             Upload Resume
//           </Button>
//         </label>
//       </Box>
//       <Box>
//         <img src={user.avatar} alt="Profile avatar" style={{ width: 100, borderRadius: '50%' }} />
//       </Box>
//     </Box>
//   );
// };

// export default UserProfile;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import SettingsIcon from '@material-ui/icons/Settings';
// import HelpIcon from '@material-ui/icons/Help';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: theme.spacing(3),
//     borderRadius: 16,
//     background: 'white',
//     [theme.breakpoints.up('sm')]: {
//       width: 350,
//       height: 452,
//     },
//   },
//   title: {
//     color: '#141522',
//     fontSize: 24,
//     fontFamily: 'Plus Jakarta Sans',
//     fontWeight: '700',
//     lineHeight: 36,
//     wordWrap: 'break-word',
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     width: '100%',
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//   },
// }));

// function AccountSettings() {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.container}>
    
//       <Button
//         className={classes.button}
//         startIcon={<EditIcon className={classes.icon} />}
//       >
//         Edit Profile
//       </Button>
//       <Button
//         className={classes.button}
//         startIcon={<SettingsIcon className={classes.icon} />}
//       >
//         Account Setting
//       </Button>
//       <Button
//         className={classes.button}
//         startIcon={<HelpIcon className={classes.icon} />}
//       >
//         Helpdesk
//       </Button>
//       <Button
//         className={classes.button}
//         startIcon={<ExitToAppIcon className={classes.icon} />}
//       >
//         Logout
//       </Button>
//     </Paper>
//   );
// }

// export default AccountSettings;





























// // import React, { useEffect } from 'react';
// // import { Container, Box, Typography, TextField, Button, Avatar } from '@mui/material';

// // function EditProfile() {
// //   // Replace with actual state management logic
// //   const [profileData, setProfileData] = React.useState({
// //     fullName: '',
// //     jobStatus: '',
// //     phoneNumber: '',
// //     linkedInLink: '',
// //     websiteLink: '',
// //     bio: '',
// //   });

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const tokenString = getAuthTokenCookie();
// //       const parsetoken = tokenString && JSON.parse(tokenString);

// //       if (!tokenString) {
// //         push('/login');
// //         return;
// //       } else {
// //         const response = await fetch("http://promech-backend.addictaco.com//api/users/me", {
// //           headers: {
// //             Authorization: `Bearer ${parsetoken.jwt}`,
// //           },
// //         });
// //         const datares = await response.json();
// //         setProfileData({
// //           fullName: datares.username,
// //           jobStatus: '', // Set the desired initial value
// //           phoneNumber: datares.phonenumber,
// //           linkedInLink: '', // Set the desired initial value
// //           websiteLink: '', // Set the desired initial value
// //           bio: '', // Set the desired initial value
// //         });
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setProfileData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = () => {
// //     // Logic to process or send data
// //     console.log(profileData);
// //   };

// //   return (
// //     <Container maxWidth="sm">
// //       <Box my={4} p={2} borderRadius={2} boxShadow={3}>
// //         <Typography variant="h5" gutterBottom>
// //           Edit Profile
// //         </Typography>
// //         <Box my={2}>
// //           <Avatar
// //             src="https://via.placeholder.com/150x150"
// //             sx={{ width: 150, height: 150, mb: 2 }}
// //           />
// //           {/* Replace the below line with <AvatarEdit /> from react-avatar-edit or similar functionality */}
// //           <Typography variant="subtitle1">Upload Photo</Typography>
// //           <Typography variant="body2" color="textSecondary">300x300 max 2MB</Typography>
// //         </Box>
// //         <TextField
// //           fullWidth
// //           label="Full Name"
// //           variant="outlined"
// //           name="fullName"
// //           value={profileData.fullName}
// //           onChange={handleInputChange}
// //           margin="normal"
// //         />
// //         <TextField
// //           fullWidth
// //           label="Job Status"
// //           variant="outlined"
// //           name="jobStatus"
// //           value={profileData.jobStatus}
// //           onChange={handleInputChange}
// //           margin="normal"
// //         />
// //         <TextField
// //           fullWidth
// //           label="Phone Number"
// //           variant="outlined"
// //           name="phoneNumber"
// //           value={profileData.phoneNumber}
// //           onChange={handleInputChange}
// //           margin="normal"
// //         />
// //         <TextField
// //           fullWidth
// //           label="LinkedIn"
// //           variant="outlined"
// //           name="linkedInLink"
// //           value={profileData.linkedInLink}
// //           onChange={handleInputChange}
// //           margin="normal"
// //         />
// //         <TextField
// //           fullWidth
// //           label="Website"
// //           variant="outlined"
// //           name="websiteLink"
// //           value={profileData.websiteLink}
// //           onChange={handleInputChange}
// //           margin="normal"
// //         />
// //         <TextField
// //           fullWidth
// //           label="Bio"
// //           variant="outlined"
// //           name="bio"
// //           value={profileData.bio}
// //           onChange={handleInputChange}
// //           margin="normal"
// //           multiline
// //           rows={4}
// //         />
// //         <Box mt={3}>
// //           <Button variant="contained" color="primary" onClick={handleSubmit}>
// //             Save Changes
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Container>
// //   );
// // }

// // export default EditProfile;



import React from 'react';

const Profile = () => {
    return (
        <div>Profile</div>
    )
}

export default Profile;













