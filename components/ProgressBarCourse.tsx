


"use client"
import * as React from 'react';
import { Box, Container, Alert,Button,Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Circle from '@/components/Circle';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Link from 'next/link';
interface Lesson {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface Chapter {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    lessons: {
      data: Lesson[];
    };
  };
}

interface Course {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    user: string;
    categoryname: string;
    hours: number;
    description: string;
    chapters: {
      data: Chapter[];
    };
  };
  meta: {};
}

interface Attendance {
  data: {
    id: number;
    attributes: {
      attended: boolean;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      primarykey: string;
      lesson: {
        data: Lesson;
      };
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
interface ProgressBarCourseProps {
  lessonData: Attendance | null; // Allow null for lessonData
  courseData: Course;
}

interface LessonStats {
  attendedLessonCount: number;
  totalLessonCount: number;
  averageAttendedCourses: number;
}

export default function LinearDeterminate({ lessonData, courseData }: ProgressBarCourseProps) {
  const [progress, setProgress] = React.useState(0);
  console.log(courseData);



  // function calculateLessonStats(attendanceJson: Attendance | null, courseJson: Course): LessonStats {
  //   // Extract lesson data from attendanceJson
  //   const attendedLessons = attendanceJson?.data?.filter(item => item.attributes.attended === true);
  //   const attendedLessonCount = attendedLessons?.length;

  //   // Extract lesson data from courseJson
  //   const allLessons: Lesson[] = courseJson?.attributes?.chapters?.data
  //     .map(chapter => chapter?.attributes?.lessons?.data)
  //     .flat();

  //   // Calculate the total number of lessons
  //   const totalLessonCount = allLessons?.length;

  //   // Calculate the average of attended courses
  //   const averageAttendedCourses = attendedLessonCount / totalLessonCount;

  //   // Return the result
  //   return {
  //     attendedLessonCount,
  //     totalLessonCount,
  //     averageAttendedCourses,
  //   };
  // }


  function calculateLessonStats(attendanceJson: Attendance | null, courseJson: Course): LessonStats {
    // Extract lesson data from attendanceJson
    const attendedLessons = attendanceJson?.data?.filter(item => item.attributes.attended === true);
    const attendedLessonCount = attendedLessons?.length ?? 0; // Use 0 if attendedLessons is undefined
  
    // Extract lesson data from courseJson
    const allLessons: Lesson[] = courseJson?.attributes?.chapters?.data
      .map(chapter => chapter?.attributes?.lessons?.data)
      .flat() ?? []; // Use an empty array if allLessons is undefined
  
    // Calculate the total number of lessons
    const totalLessonCount = allLessons.length; // No need for nullish coalescing as allLessons is an array
  
    // Calculate the average of attended courses
    const averageAttendedCourses = totalLessonCount > 0 ? attendedLessonCount / totalLessonCount : 0;
  
    // Return the result
    return {
      attendedLessonCount,
      totalLessonCount,
      averageAttendedCourses,
    };
  }
  const attendanceJson: Attendance | null = lessonData;
  const courseJson: Course = courseData;
  const result: LessonStats | null = calculateLessonStats(attendanceJson, courseJson);




  // function calculateLessonStats(attendanceJson: Attendance, courseJson: Course): LessonStats {
  //   // Extract lesson data from attendanceJson
  //   const attendedLessons = attendanceJson?.data?.filter(item => item.attributes.attended === true);
  //   const attendedLessonCount = attendedLessons?.length;

  //   // Extract lesson data from courseJson
  //   const allLessons: Lesson[] = courseJson?.attributes?.chapters?.data.reduce((acc, chapter) => {
  //     return acc.concat(chapter?.attributes?.lessons?.data);
  //   }, []);

  //   // Calculate the total number of lessons
  //   const totalLessonCount = allLessons?.length;

  //   // Calculate the average of attended courses
  //   const averageAttendedCourses = attendedLessonCount / totalLessonCount;

  //   // Return the result
  //   return {
  //     attendedLessonCount,
  //     totalLessonCount,
  //     averageAttendedCourses,
  //   };
  // }

  // Example usage:
  // const attendanceJson: Attendance = lessonData;
  // const courseJson: Course = courseData;
  // const result: LessonStats = calculateLessonStats(attendanceJson, courseJson);
  // console.log(result?.averageAttendedCourses*100);

  return (
    <Box sx={{  alignItems: 'center' ,alignContent: 'center' , display: 'flex' , flexWrap: 'wrap' , flexDirection: 'column', justifyContent: 'center',width: '100%' }}>
         <Alert sx={{ m: 2 }} variant="filled" severity="info">
        Total Lessons  : {result.totalLessonCount}
      </Alert>
      <Alert sx={{ m: 2 }} variant="filled" severity="success">
        Total attends  : {result.attendedLessonCount}
      </Alert>
   
      <Circle values={result.averageAttendedCourses} />
      <br/>
      <br/>
      
      
  {result?.averageAttendedCourses*100==100?(
    <>
    <Typography sx={{color:'green'}}  variant="h6" component="h6">
    Congratulation to Complete This course
  </Typography>
  <br/>
      <br/>
    <LibraryAddCheckIcon sx={{color:'green',width:'100px'}}/><br/>
      <br/>
    <Button component={Link} href='/account/rating' sx={{color:'white',backgroundColor:"success"}} variant="contained"> Complete Survey to Get The Certificate</Button>
    </>
  ):(
 
    <Alert variant="filled" severity="warning">
 Complete this Course to Get The Certificate
</Alert>

  )}
    </Box>


  );
}


