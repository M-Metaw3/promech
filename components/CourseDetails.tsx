"use client"
// import React, { Fragment,useState } from 'react';
// import { Avatar, Box, Button, Container, Divider, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
// import CourseCard from './CourseCard';
// import { setAuthTokenCookie,getAuthTokenCookie } from '../utils/auth';
// // import { useRouter } from 'next/navigation'
// import { redirect } from 'next/navigation';

// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// type CourseProps = {
//     course: any;
// }
// const CourseDetails = ({ course,id }:CourseProps) => {
//     console.log(course)
//     console.log(id)
//     const [islogin, setislogin] = useState(false);
  



//     const lessons = course?.chapters?.data.reduce(
//         (totalLessons, chapter) =>
//           totalLessons + (chapter?.attributes?.lessons?.data?.length || 0),
//         0
//       )||0
      

//     const courses = [
// 		{
// 			imgSrc: '/home/temp/photo1.jpg',
// 			category: {
// 				title: 'CAD & Reverse Engineering',
// 				iconColor: 'success.main',
// 			},
// 			title: 'Modelling and Reverse Engineering',
// 			user: {
// 				imgSrc: '/home/temp/user1.svg',
// 				name: 'Eng. John Lamiee'
// 			},
// 			chaptersCount: 4,
// 			daysCount: 5,
// 			// hoursCount: 107
// 		},
// 		{
// 			imgSrc: '/home/temp/photo2.jpg',
// 			category: {
// 				title: 'Additive Manufacturing (3D Printing)',
// 				iconColor: '#D38CBD',
// 			},
// 			title: '3D Printing',
// 			user: {
// 				imgSrc: '/home/temp/user2.svg',
// 				name: 'Eng. John Lamiee'
// 			},
// 			chaptersCount: 12,
// 			daysCount: 5,
// 			hoursCount: 30
// 		},
// 		{
// 			imgSrc: '/home/temp/photo3.jpg',
// 			category: {
// 				title: 'Engineering simulation',
// 				iconColor: '#4597D1',
// 			},
// 			title: 'CAM I CATIA Lathe Machining Essentials 2- Axis',
// 			user: {
// 				imgSrc: '/home/temp/user3.svg',
// 				name: 'Eng. John Lamiee'
// 			},
// 			chaptersCount: 9,
// 			hoursCount: 75
// 		}
// 	];

//     const handleSubmit = async () => {
//         try {
//           // Get the token from the cookie
//           const tokenString = getAuthTokenCookie();
      
//           // Check if the token string is undefined or null
//           if (!tokenString) {
              
//               toast.error('You must login to take this service');
              
              
//               console.error('Token is undefined or null');
//             // Handle the case where the token is undefined or null
//             return;
//           }
      
//           // Attempt to parse the token string
//           let token;
      
//           try {
//             token = JSON.parse(tokenString);
//           } catch (error:any) {
//             toast.error('You must login to take this service');

           
           

//             // Handle the case where parsing fails
//             return;
//           }
      
//           // Check if the token has the expected structure
//           if (token && token.jwt && token.user && token.user.id) {
//             const primarykey = `${token.user.id}${id}`;
      
//             // Make the axios request with the token in the headers
//             const response = await axios.post(
//               'https://promecha.onrender.com/api/bookings',
//               {
//                 data: { user: token.user.id, course: id, primarykey },
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token.jwt}`,
//                 },
//               }
//             );
      
//             console.log(response);
      
//             if (response.status === 200) {
//               toast.success('You have sent a request to join this course');
//             } else {
//               // Handle the case where the request was not successful
             
//               toast.error('You must login to take this service');
//             }
//           } else {
//             console.error('Invalid token structure');
//             // Handle the case where the token does not have the expected structure
//           }
//         } catch (error:any) {
//           console.error('Error creating booking:', error);
//           // Handle other errors as needed
//         }
//       };
      


//     return (
//         <Container disableGutters maxWidth='lg'>
//           <Grid container columns={3} columnSpacing={5} rowGap={3}>
//                   <Grid item xs={3} md={2} display='flex' flexDirection='column' gap='30px'>
//                     <Box component='iframe' border='none'
//                         borderRadius='10px 10px 0px 0px'
//                         width="100%" height={500}
//                         src={`https://www.youtube.com/embed/O8mdH2M7MKU`}
//                     />
//                     <Stack gap='20px'>
//                         <Typography variant='h4' fontWeight={700}>{course.title}</Typography>
//                         <Stack direction='row' gap={2} alignItems='center'>
//                             {/* <Avatar src={course?.userimage?.data[1]?.attributes.url?`https://promecha.onrender.com${course?.userimage?.data[0]?.attributes.url}`:""} alt={course.user.name} sx={{ width: 30, height: 30 }} /> */}
//                             <Avatar
//   src={
//     course?.userimage?.data &&
//     course.userimage.data.length >= 2 &&
//     course.userimage.data[1]?.attributes.url
//       ? `https://promecha.onrender.com${course.userimage.data[0]?.attributes.url}`
//       : ""
//   }
//   alt={course.user.name}
//   sx={{ width: 30, height: 30 }}
// />
//                             <Typography variant='body2'>{course.user}</Typography>
//                             <Divider orientation="vertical" variant="middle" flexItem />
//                             <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
//                                 <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
//                                 <Typography variant='inherit' component='span' fontWeight={700}>{course.chapters.data.length}</Typography> Chapters
//                             </Typography>
//                             <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
//                                 <NoteOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4', transform: 'rotate(-90deg)' }} />
//                                 <Typography variant='inherit' component='span' fontWeight={700}>{lessons}</Typography> Lessons
//                             </Typography>
//                         </Stack>
//                     </Stack>
//                     <Tabs value='about'
//                         sx={{
//                             '& .Mui-selected': { color: 'text.primary' },
//                         }}
//                     >
//                         <Tab label="About" value='about'
//                             sx={{ fontWeight: 500, }} />
//                     </Tabs>
//                     <div>
//                         <Typography variant='h5' fontWeight={500} marginBottom='20px'>Description</Typography>
//                         <Typography color='#141522' whiteSpace='pre-wrap'>
//                             {course.description}
//                         </Typography>
//                     </div>
//                 </Grid>
//                 <Grid item xs={3} md={1}>
//                     <Stack gap='30px' border='1px solid #DCDCDC' borderRadius={4} padding='30px' bgcolor='#FBFBFB' alignItems='center'>
//                         <Typography variant='h6' fontSize='18px' color='primary.main' fontWeight={700}>Course Chapters</Typography>
//                         {course?.chapters?.data?.map((chapter:any, i:number) =>
//                             <Fragment key={i}>
//                                 <Typography fontSize='16px' fontWeight={700}>{`${chapter.attributes.name}`}</Typography>
//                                 {chapter?.attributes?.lessons?.data?.map((lesson:any, j:number) =>
//                                     <Typography key={j} fontSize='14px' fontWeight={500} alignSelf='flex-start' display='flex' alignItems='center' gap='20px'>
//                                         <Typography component='span' variant='inherit' padding='5px 10px' borderRadius={2} bgcolor='#F5F5F7'>{j+1}</Typography>
//                                         {lesson?.attributes?.name}
//                                     </Typography>
//                                 )}
//                             </Fragment>
//                         )}
//                         <Button onClick={handleSubmit}  variant='contained' size='large' fullWidth sx={{ padding: '13px 24px' }}>
//                             Join Course
//                         </Button>
        
//                     </Stack>
//                 </Grid>
//             </Grid>
//             <Box marginTop={12}>
//                 <Typography variant='h4' fontWeight={700} marginBottom={3.5}>Related Courses</Typography>
//                 <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
//                     {courses.map(course =>
//                         <Grid item xs={3} md={1} key={course.title}>
//                             <CourseCard course={course} />
//                         </Grid>
//                     )}
// 					</Grid>
//             </Box>
//       <ToastContainer />

//             <br /><br /><br />
//         </Container>
//     )
// }

// export default CourseDetails;

////////////////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useState } from 'react';
// import {
//   Avatar,
//   Box,
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Stack,
//   Tab,
//   Tabs,
//   Typography,
// } from '@mui/material';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
// import CourseCard from './CourseCard';
// import { setAuthTokenCookie, getAuthTokenCookie } from '../utils/auth';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

// type CourseProps = {
//   course: any;
//   id: string; // Assuming `id` is a string, update the type accordingly
// };

// const CourseDetails: React.FC<CourseProps> = ({ course, id }: CourseProps) => {
//   console.log(course);
//   console.log(id);
//   const [islogin, setislogin] = useState(false);

//   const lessons =
//     course?.chapters?.data.reduce(
//       (totalLessons, chapter) =>
//         totalLessons + (chapter?.attributes?.lessons?.data?.length || 0),
//       0
//     ) || 0;

//   const courses = [
//     // ... your course data
//   ];

//   const handleSubmit = async () => {
//     try {
//       // Get the token from the cookie
//       const tokenString = getAuthTokenCookie();

//       // Check if the token string is undefined or null
//       if (!tokenString) {
//         toast.error('You must login to take this service');
//         console.error('Token is undefined or null');
//         // Handle the case where the token is undefined or null
//         return;
//       }

//       // Attempt to parse the token string
//       let token;

//       try {
//         token = JSON.parse(tokenString);
//       } catch (error:any) {
//         toast.error('You must login to take this service');
//         // Handle the case where parsing fails
//         return;
//       }

//       // Check if the token has the expected structure
//       if (token && token.jwt && token.user && token.user.id) {
//         const primarykey = `${token.user.id}${id}`;

//         // Make the axios request with the token in the headers
//         const response = await axios.post(
//           'https://promecha.onrender.com/api/bookings',
//           {
//             data: { user: token.user.id, course: id, primarykey },
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token.jwt}`,
//             },
//           }
//         );

//         console.log(response);

//         if (response.status === 200) {
//           toast.success('You have sent a request to join this course');
//         } else {
//           // Handle the case where the request was not successful
//           toast.error('You must login to take this service');
//         }
//       } else {
//         console.error('Invalid token structure');
//         // Handle the case where the token does not have the expected structure
//       }
//     } catch (error:any) {
//       console.error('Error creating booking:', error);
//       // Handle other errors as needed
//     }
//   };

//   return (
//     <Container disableGutters maxWidth="lg">
//            <Grid container columns={3} columnSpacing={5} rowGap={3}>
//                   <Grid item xs={3} md={2} display='flex' flexDirection='column' gap='30px'>
//                     <Box component='iframe' border='none'
//                          borderRadius='10px 10px 0px 0px'
//                          width="100%" height={500}                         src={`https://www.youtube.com/embed/O8mdH2M7MKU`}
//                     />
//                     <Stack gap='20px'>
//                         <Typography variant='h4' fontWeight={700}>{course.title}</Typography>
//                         <Stack direction='row' gap={2} alignItems='center'>
//                             {/* <Avatar src={course?.userimage?.data[1]?.attributes.url?`https://promecha.onrender.com${course?.userimage?.data[0]?.attributes.url}`:""} alt={course.user.name} sx={{ width: 30, height: 30 }} /> */}
//                             <Avatar
//   src={
//     course?.userimage?.data &&
//     course.userimage.data.length >= 2 &&
//     course.userimage.data[1]?.attributes.url
//       ? `https://promecha.onrender.com${course.userimage.data[0]?.attributes.url}`
//       : ""
//   }
//   alt={course.user.name}
//   sx={{ width: 30, height: 30 }}
// />
//                             <Typography variant='body2'>{course.user}</Typography>
//                             <Divider orientation="vertical" variant="middle" flexItem />
//                             <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
//                                 <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
//                                 <Typography variant='inherit' component='span' fontWeight={700}>{course.chapters.data.length}</Typography> Chapters
//                             </Typography>
//                             <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
//                                 <NoteOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4', transform: 'rotate(-90deg)' }} />
//                                 <Typography variant='inherit' component='span' fontWeight={700}>{lessons}</Typography> Lessons
//                             </Typography>
//                         </Stack>
//                     </Stack>
//                     <Tabs value='about'
//                         sx={{
//                             '& .Mui-selected': { color: 'text.primary' },
//                         }}
//                     >
//                         <Tab label="About" value='about'
//                             sx={{ fontWeight: 500, }} />
//                     </Tabs>
//                     <div>
//                         <Typography variant='h5' fontWeight={500} marginBottom='20px'>Description</Typography>
//                         <Typography color='#141522' whiteSpace='pre-wrap'>
//                             {course.description}
//                         </Typography>
//                     </div>
//                 </Grid>
//                 <Grid item xs={3} md={1}>
//                     <Stack gap='30px' border='1px solid #DCDCDC' borderRadius={4} padding='30px' bgcolor='#FBFBFB' alignItems='center'>
//                         <Typography variant='h6' fontSize='18px' color='primary.main' fontWeight={700}>Course Chapters</Typography>
//                         {course?.chapters?.data?.map((chapter:any, i:number) =>
//                             <Fragment key={i}>
//                                 <Typography fontSize='16px' fontWeight={700}>{`${chapter.attributes.name}`}</Typography>
//                                 {chapter?.attributes?.lessons?.data?.map((lesson:any, j:number) =>
//                                     <Typography key={j} fontSize='14px' fontWeight={500} alignSelf='flex-start' display='flex' alignItems='center' gap='20px'>
//                                         <Typography component='span' variant='inherit' padding='5px 10px' borderRadius={2} bgcolor='#F5F5F7'>{j+1}</Typography>
//                                         {lesson?.attributes?.name}
//                                     </Typography>
//                                 )}
//                             </Fragment>
//                         )}
//                         <Button onClick={handleSubmit}  variant='contained' size='large' fullWidth sx={{ padding: '13px 24px' }}>
//                             Join Course
//                         </Button>
        
//                     </Stack>
//                 </Grid>
//             </Grid>
//             <Box marginTop={12}>
//                 <Typography variant='h4' fontWeight={700} marginBottom={3.5}>Related Courses</Typography>
//                 <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
//                     {courses?.map(course =>
//                         <Grid item xs={3} md={1} key={course.title}>
//                             <CourseCard course={course} />
//                         </Grid>
//                     )}
// 					</Grid>
//             </Box>
//       <ToastContainer />

//             <br /><br /><br />
//     </Container>
//   );
// };

// export default CourseDetails;
import React, { Fragment, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import CourseCard from './CourseCard';
import { setAuthTokenCookie, getAuthTokenCookie } from '../utils/auth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

type CourseProps = {
  course: any;
  id: string;
};

const CourseDetails: React.FC<CourseProps> = ({ course, id }: CourseProps) => {
  console.log(course);
  console.log(id);
  const [islogin, setislogin] = useState(false);
  const lessons =
    course?.chapters?.data.reduce(
      (totalLessons: number, chapter: any) =>
        totalLessons + (chapter?.attributes?.lessons?.data?.length || 0),
      0
    ) || 0;
  const courses: any[] = [
    // ... your course data
  ];
  const handleSubmit = async () => {
    try {
      const tokenString = getAuthTokenCookie();
      if (!tokenString) {
        toast.error('You must login to take this service');
        console.error('Token is null');
        return;
      }
      let token;
      try {
        token = JSON.parse(tokenString);
      } catch (error: any) {
        toast.error('You must login to take this service');
        return;
      }
      if (token && token.jwt && token.user && token.user.id) {
        const primarykey = `${token.user.id}${id}`;
        const response = await axios.post(
          'https://promecha.onrender.com/api/bookings',
          {
            data: { user: token.user.id, course: id, primarykey },
          },
          {
            headers: {
              Authorization: `Bearer ${token.jwt}`,
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          toast.success('You have sent a request to join this course');
        } else {
          toast.error('You must login to take this service');
        }
      } else {
        console.error('Invalid token structure');
      }
    } catch (error: any) {
      console.error('Error creating booking:', error);
    }
  };
  return (
    <Container disableGutters maxWidth="lg">
      <Grid container columns={3} columnSpacing={5} rowGap={3}>
        <Grid item xs={3} md={2} display='flex' flexDirection='column' gap='30px'>
          <Box component='iframe' border='none'
            borderRadius='10px 10px 0px 0px'
            width="100%" height={500} src={`https://www.youtube.com/embed/O8mdH2M7MKU`}
          />
          <Stack gap='20px'>
            <Typography variant='h4' fontWeight={700}>{course.title}</Typography>
            <Stack direction='row' gap={2} alignItems='center'>
              <Avatar
                src={
                  course?.userimage?.data &&
                  course.userimage.data.length >= 2 &&
                  course.userimage.data[1]?.attributes.url
                    ? `https://promecha.onrender.com${course.userimage.data[0]?.attributes.url}`
                    : ""
                }
                alt={course.user.name}
                sx={{ width: 30, height: 30 }}
              />
              <Typography variant='body2'>{course.user}</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
                <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                <Typography variant='inherit' component='span' fontWeight={700}>{course.chapters.data.length}</Typography> Chapters
              </Typography>
              <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
                <NoteOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4', transform: 'rotate(-90deg)' }} />
                <Typography variant='inherit' component='span' fontWeight={700}>{lessons}</Typography> Lessons
              </Typography>
            </Stack>
          </Stack>
          <Tabs value='about'
            sx={{
              '& .Mui-selected': { color: 'text.primary' },
            }}
          >
            <Tab label="About" value='about'
              sx={{ fontWeight: 500, }} />
          </Tabs>
          <div>
            <Typography variant='h5' fontWeight={500} marginBottom='20px'>Description</Typography>
            <Typography color='#141522' whiteSpace='pre-wrap'>
              {course.description}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3} md={1}>
          <Stack gap='30px' border='1px solid #DCDCDC' borderRadius={4} padding='30px' bgcolor='#FBFBFB' alignItems='center'>
            <Typography variant='h6' fontSize='18px' color='primary.main' fontWeight={700}>Course Chapters</Typography>
            {course?.chapters?.data?.map((chapter: any, i: number) =>
              <Fragment key={i}>
                <Typography fontSize='16px' fontWeight={700}>{`${chapter.attributes.name}`}</Typography>
                {chapter?.attributes?.lessons?.data?.map((lesson: any, j: number) =>
                  <Typography key={j} fontSize='14px' fontWeight={500} alignSelf='flex-start' display='flex' alignItems='center' gap='20px'>
                    <Typography component='span' variant='inherit' padding='5px 10px' borderRadius={2} bgcolor='#F5F5F7'>{j + 1}</Typography>
                    {lesson?.attributes?.name}
                  </Typography>
                )}
              </Fragment>
            )}
            <Button onClick={handleSubmit} variant='contained' size='large' fullWidth sx={{ padding: '13px 24px' }}>
              Join Course
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box marginTop={12}>
        <Typography variant='h4' fontWeight={700} marginBottom={3.5}>Related Courses</Typography>
        <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
          {courses?.map(course =>
            <Grid item xs={3} md={1} key={course.title}>
              <CourseCard course={course} />
            </Grid>
          )}
        </Grid>
      </Box>
      <ToastContainer />
      <br /><br /><br />
    </Container>
  );
};

export default CourseDetails;


