"use client"
import Link from 'next/link';
import React, { Fragment, useState, useEffect } from 'react';
interface Lesson {
  id: number;
}

interface Chapter {
  attributes: {
    lessons: {
      data: Lesson[];
    };
  };
}

interface Course {
  chapters: {
    data: Chapter[];
  };
}

interface Attendee {
  attributes: {
    lesson: {
      data: {
        id: number;
      };
    };
  };
}

// Assuming 'course' and 'isattend' are of type 'Course' and 'Attendee[]' respectively

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

import { useRouter } from 'next/navigation';

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
  const [isbooking, setisbooking] = useState<number>(3);
  const [isattend, setisattend] = useState<any[]>([]);
  const [istext, setistext] = useState<string>('');
console.log(course)
  useEffect(() => {
    const fetchData = async () => {
      const tokenString: string | null = getAuthTokenCookie();

      console.log(tokenString);
      const parsetoken = tokenString && JSON.parse(tokenString);
      const primarykey = `${parsetoken?.user?.id}${id}`;

      console.log(primarykey);
      if (!tokenString) {
     
        return;
      } else {
        const response = await fetch(
          `http://promech-backend.addictaco.com/api/attendaces/?populate[user][populate]=true&filters[user]=${parsetoken?.user?.id}&filters[attended]=true&[populate][lesson]=true`
        );
        const datares = await response.json();
        const isAttendArray = Array.isArray(datares) ? datares : [datares];
setisattend(isAttendArray)
        // setisattend(datares);
        console.log(datares.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const tokenString: string | null = getAuthTokenCookie();

   
      const parsetoken = tokenString && JSON.parse(tokenString);
      const primarykey = `${parsetoken?.user?.id}${id}`;

      console.log(primarykey);
      if (!tokenString) {
      
        return;
      } else {
        const response = await fetch(
          `http://promech-backend.addictaco.com/api/bookings?filters[isBooking]=true&filters[primarykey]=${primarykey}`
        );
        const datares = await response.json();
        console.log(datares)
        if (datares?.data?.length>0&&datares?.data[0]?.attributes?.isBooking==true) {
          setisbooking(1);
        }else if(datares?.data?.length==0){
          setisbooking(2);
        }else{
          setisbooking(3);

        }
      }
    };
    fetchData();
  }, []);

  const { push } = useRouter();

  const [islogin, setislogin] = useState<boolean>(false);
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
    const tokenString: string | null = getAuthTokenCookie();
    try {
      if (!tokenString) {
        toast.error('You must login to take this service');
        push('/login');
        return;
      }
      let token;
      try {
        token = JSON.parse(tokenString);
      } catch (error: any) {
        toast.error('You must login to take this service');
        push('/login');

        return;
      }
      if (token && token.jwt && token.user && token.user.id) {
        const primarykey = `${token?.user?.id}${id}`;
        const course = id;
        const user = token.user.id;

        console.log(token.user.id);
        console.log(id);

        const response = await axios.post(
          'http://promech-backend.addictaco.com/api/bookings',
          {
            data: { user, course, primarykey },
          }
          // {
          //   headers: {
          //     Authorization: `Bearer ${token.jwt}`,
          //   },
          // }
        );

        console.log(response);
        if (response.status == 200) {
          setistext('You have sent a request to join this course');
        } else if (response.status == 400) {
          setistext('You have sent a request already waiting for approving');
        } else {
          setistext('You have sent a request already waiting for approving');
        }
      } else {
        console.error('Invalid token structure');
      }
    } catch (error: any) {
      console.error('Error creating booking:', error);
    }
  };

  interface Attendee {
    attributes: {
      lesson: {
        data: {
          id: number;
        };
      };
    };
  }
  
  // ...
  
  function doesLessonExist(lessonId: number) {
    // Check if the lessonId exists in the first JSON
    const lessonInJson1 = course?.chapters?.data?.some((chapter: Chapter) => {
      return chapter?.attributes?.lessons?.data?.some((lesson: Lesson) => lesson?.id === lessonId);
    });
  
    // Check if isattend is an array and if the lessonId exists in the second JSON
    const lessonInJson2 = Array.isArray(isattend) && isattend.some((attendee: Attendee) =>
      attendee?.attributes?.lesson?.data?.id === lessonId
    );
  // if(lessonInJson1 && lessonInJson2 &&  )
    // Return true if the lesson exists in both JSONs
    return lessonInJson1 && lessonInJson2;
  }
  const courseyoutubelink = course?.courseyoutubelink;
  
  
  console.log(doesLessonExist(5));

  return (
    <Container disableGutters maxWidth="lg">
      <Grid container columns={3} columnSpacing={5} rowGap={3}>
        <Grid item xs={3} md={2} display="flex" flexDirection="column" gap="30px">
          <Box
            component="iframe"
            border="none"
            borderRadius="10px 10px 0px 0px"
            width="100%"
            height={500}
            // src={`https://www.youtube.com/embed/O8mdH2M7MKU`}
            src={course?.courseyoutubelink}

          />
          <Stack gap="20px">
            <Typography variant="h4" fontWeight={700}>
              {course?.title}
            </Typography>
            <Stack direction="row" gap={2} alignItems="center">
              <Avatar
                src={
                  course?.userimage?.data &&
                  course.userimage.data?.attributes.url
                    ? `http://promech-backend.addictaco.com${course.userimage.data?.attributes.url}`
                    : ''
                }
                alt={course?.user?.name}
                sx={{ width: 30, height: 30 }}
              />
              <Typography variant="body2">{course?.user}</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography fontSize="14px" display="flex" alignItems="center" gap={0.5}>
                <ArticleOutlinedIcon fontSize="small" sx={{ fill: '#9C9CA4' }} />
                <Typography variant="inherit" component="span" fontWeight={700}>
                  {course.chapters.data.length}
                </Typography>{' '}
                Chapters
              </Typography>
              <Typography fontSize="14px" display="flex" alignItems="center" gap={0.5}>
                <NoteOutlinedIcon fontSize="small" sx={{ fill: '#9C9CA4', transform: 'rotate(-90deg)' }} />
                <Typography variant="inherit" component="span" fontWeight={700}>
                  {lessons}
                </Typography>{' '}
                Lessons
              </Typography>
            </Stack>
          </Stack>
          <Tabs
            value="about"
            sx={{
              '& .Mui-selected': { color: 'text.primary' },
            }}
          >
            <Tab label="About" value="about" sx={{ fontWeight: 500 }} />
          </Tabs>
          <div>
            <Typography variant="h5" fontWeight={500} marginBottom="20px">
              Description
            </Typography>
            <Typography color="#141522" whiteSpace="pre-wrap">
              {course.description}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3} md={1}>
          <Stack gap="30px" border="1px solid #DCDCDC" borderRadius={4} padding="30px" bgcolor="#FBFBFB" alignItems="center">
            <Typography variant="h6" fontSize="18px" color="primary.main" fontWeight={700}>
              Course Chapters
            </Typography>
            {course?.chapters?.data?.map((chapter: any, i: number) => (
              <Fragment key={i}>
                <Typography fontSize="16px" fontWeight={700}>{`${chapter.attributes.name}`}</Typography>
                {chapter?.attributes?.lessons?.data?.map((lesson: any, j: number) => (
                  <Typography key={j} fontSize="14px" fontWeight={500} alignSelf="flex-start" display="flex" alignItems="center" gap="20px">
                    <Typography component="span" variant="inherit" padding="5px 10px" borderRadius={2} bgcolor="#F5F5F7">
                      {j + 1}
                    </Typography>
                    {lesson?.attributes?.name}
                  </Typography>
                ))}
              </Fragment>
            ))}
{!isbooking ? (
  <Button component={Link} href='/account/courses' variant="contained" size="large" fullWidth sx={{ padding: '13px 24px' }}>
    You are already enrolled in this course. Check your courses.
  </Button>
) : (
  <Button onClick={handleSubmit} variant="contained" size="large" fullWidth sx={{ padding: '13px 24px' }}>
  Join Course
</Button>
  // <Button disabled variant="contained" size="large" fullWidth sx={{ padding: '13px 24px' }}>
  //   Pending
  // </Button>
) 

// : 
// (
//   <Button onClick={handleSubmit} variant="contained" size="large" fullWidth sx={{ padding: '13px 24px' }}>
//     Join Course
//   </Button>
// )
}




            
            <Typography variant="h5" fontWeight={700} marginBottom={3.5}>
              {istext}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      {/* <Box marginTop={12}>
        <Typography variant="h4" fontWeight={700} marginBottom={3.5}>
          Related Courses
        </Typography>
        <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent="stretch">
          {courses?.map(course => (
            <Grid item xs={3} md={1} key={course.title}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <ToastContainer />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default CourseDetails;