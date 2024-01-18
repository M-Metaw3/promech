import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Divider, Stack, Typography,Avatar } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

type CourseProps = {
    course: any
}
type Course = {
    imgSrc: string;
    title: string;
    user: {
      imgSrc: string;
      name: string;
    };
    chaptersCount: number;
    daysCount: number;
    hoursCount?: number;
    category: {
      title: string;
      iconColor: string;
    };
  };
  
// interface Course {
//     imgSrc: string;
//     category: {
//       title: string;
//       iconColor: string;
//     };
//     title: string;
//     user: {
//       imgSrc: string;
//       name: string;
//     };
//     chaptersCount: number;
//     daysCount: number;
//     hoursCount?: number; // Add optional property if needed
//   }
  
const CourseCard = ({ course }:any) => {
    console.log(course)
    const courses: Course[]= [
        {
          imgSrc: '/home/temp/photo1.jpg',
          category: {
            title: 'CAD & Reverse Engineering',
            iconColor: 'success.main',
          },
          title: 'Modelling and Reverse Engineering',
          user: {
            imgSrc: '/home/temp/user1.svg',
            name: 'Eng. John Lamiee',
          },
          chaptersCount: 4,
          daysCount: 5,
          // hoursCount: 107
        },
        {
          imgSrc: '/home/temp/photo2.jpg',
          category: {
            title: 'Additive Manufacturing (3D Printing)',
            iconColor: '#D38CBD',
          },
          title: '3D Printing',
          user: {
            imgSrc: '/home/temp/user2.svg',
            name: 'Eng. John Lamiee',
          },
          chaptersCount: 12,
          daysCount: 5,
          hoursCount: 30,
        },
        // Add more course objects as needed
      ];
      

    // const courses:Course[] = [
	// 	{
	// 		imgSrc: '/home/temp/photo1.jpg',
	// 		category: {
	// 			title: 'CAD & Reverse Engineering',
	// 			iconColor: 'success.main',
	// 		},
	// 		title: 'Modelling and Reverse Engineering',
	// 		user: {
	// 			imgSrc: '/home/temp/user1.svg',
	// 			name: 'Eng. John Lamiee'
	// 		},
	// 		chaptersCount: 4,
	// 		daysCount: 5,
	// 		// hoursCount: 107
	// 	},
	// 	{
	// 		imgSrc: '/home/temp/photo2.jpg',
	// 		category: {
	// 			title: 'Additive Manufacturing (3D Printing)',
	// 			iconColor: '#D38CBD',
	// 		},
	// 		title: '3D Printing',
	// 		user: {
	// 			imgSrc: '/home/temp/user2.svg',
	// 			name: 'Eng. John Lamiee'
	// 		},
	// 		chaptersCount: 12,
	// 		daysCount: 5,
	// 		hoursCount: 30
	// 	},
		/*
		{
			imgSrc: '/home/temp/photo3.jpg',
			category: {
				title: 'Engineering simulation',
				iconColor: '#4597D1',
			},
			title: 'CAM I CATIA Lathe Machining Essentials 2- Axis',
			user: {
				imgSrc: '/home/temp/user3.svg',
				name: 'Eng. John Lamiee'
			},
			chaptersCount: 9,
			hoursCount: 75
		}
		*/
	// ];

    const faqs = [
        {
            id: '01',
            question: 'How can Promech Help in Mapping our Trainings and Employee Development Skills?',
            answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
        },
        {
            id: '02',
            question: 'Do you offer a money back guarantee?',
            answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
        },
        {
            id: '03',
            question: 'Who are the experts/ What are the qualities of Promech experts?',
            answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
        }
    ]
    
    return (
        <Stack
            component={Link} href={`/courses/${course?.id}`}
            padding={{ xs: 1.5, sm: 2, md: '30px' }}
            height='100%' gap='20px' alignItems='flex-start'
            borderRadius={4} border='1px solid #DADADA' bgcolor='#FFF'
            boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.05)'
            sx={{
                transition: '0.2s',
                '&:hover': {
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    '& img': { transform: 'scale(1.02)' }
                }
            }}
        >
{}

            <Box position='relative' width='100%' height={266}>
                <Image
                    src={course?.attributes?.imgSrc?.data?.attributes.url?`http://localhost:1337${course?.attributes?.imgSrc?.data?.attributes.url}`:''} alt={course?.attributes?.title}
                    width={270} height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', transition: '0.2s' }}
                />
                <Stack direction='row' component='figcaption'
                    gap='6px' alignItems='center' justifyContent='center'
                    borderRadius={2} padding='6px 10px' bgcolor='#FFF'
                    position='absolute' bottom={10} left={10}
                    sx={{ backdropFilter: 'blur(15px)' }}
                >
                    {/* <Divider orientation='vertical' sx={{ bgcolor: courses?.category?.iconColor, width: 3, height: 12, border: 'none' }} /> */}
                    <Typography fontSize='12px'>{course?.attributes?.categoryname}</Typography>
                </Stack>
            </Box>
            <Typography variant='h6' fontSize='18px' fontWeight={700} color='primary.main' flexGrow={1}>{course?.attributes?.title}</Typography>
            <Stack gap={2}>
                <Stack direction='row' gap='10px' alignItems='center'>
                <Avatar
  src={
    course &&
    course.attributes &&
    course.attributes.userimage &&
    course.attributes.userimage.data &&
    course.attributes.userimage.data.attributes.url
      ? `http://localhost:1337${course.attributes.userimage.data.attributes.url}`
      : ''
  }
  alt={course?.attributes?.user}
  sx={{ width: 30, height: 30 }}
/>
                    <Typography fontSize='14px'>{course?.attributes?.user}</Typography>
                </Stack>
                <Stack direction='row' gap={2} alignItems='center'>
                    <Stack direction='row' gap={0.5}>
                        <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                        <Typography fontSize='14px'>
                            <Typography variant='inherit' component='span' fontWeight={700}>{course?.attributes?.chapters?.data?.length}</Typography> Chapter(s)
                        </Typography>
                    </Stack>
                    {/* {course.attributes.chapters.data.length && <Stack direction='row' gap={0.5}>
                        <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                        <Typography fontSize='14px'>
                            <Typography variant='inherit' component='span' fontWeight={700}>{course?.attributes?.chapters?.data?.length}</Typography> 
                        </Typography>
                    </Stack>} */}
                    {course?.attributes?.hours && <Stack direction='row' gap={0.5}>
                        <TimerOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                        <Typography fontSize='14px'>
                            <Typography variant='inherit' component='span' fontWeight={700}>{course?.attributes?.hours}</Typography> Hour(s)
                        </Typography>
                    </Stack>}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CourseCard;