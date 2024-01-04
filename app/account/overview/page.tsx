import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import UserCourseCard from '@/components/UserCourseCard';
import PrivateRoute from '../../../components/PrivateRoute';
const AccountOverview = () => {
    const statistics = [
        {
            title: 'No. of Courses',
            count: 2,
            bgcolor: 'primary.main'
        },
        {
            title: 'No. of Chapters',
            count: 8,
            bgcolor: 'primary.main'
        },
        {
            title: 'Assigned Tasks',
            count: 3,
            bgcolor: '#141522'
        },
        {
            title: 'Solve Quizzes',
            count: 1,
            bgcolor: '#141522'
        },
        {
            title: 'Uploaded Files',
            count: 9,
            bgcolor: '#570DE6'
        },
        {
            title: 'Uploaded Files',
            count: 4,
            bgcolor: '#DB5962'
        }
    ]

    const courses = [
		{
			imgSrc: '/home/temp/photo1.jpg',
			category: {
				title: 'CAD & Reverse Engineering',
				iconColor: 'success.main',
			},
			title: 'Modelling and Reverse Engineering',
			user: {
				imgSrc: '/home/temp/user1.svg',
				name: 'Eng. John Lamiee'
			},
			chaptersCount: 7,
			finishedChaptersCount: 4,
			daysCount: 5,
			// hoursCount: 107
		}
	];

    return (
        <PrivateRoute>
        <Stack gap={4}>
            <Typography color='#9C9CA4'>Let’s learn something New</Typography>
            <Grid container columns={6} columnSpacing={{ xs: '10px', md: '20px' }} rowGap={{ xs: '10px', md: '20px' }}>
                {statistics.map(data =>
                    <Grid key={data.title} item xs={3} md={2} lg={1}>
                        <Stack gap={3} bgcolor={data.bgcolor} color='#FFF' borderRadius='10px' padding='20px' paddingBottom='30px'>
                            <Typography fontWeight={600}>{data.title}</Typography>
                            <Typography variant='h3' fontWeight={500}>{data.count}</Typography>
                        </Stack>
                    </Grid>
                )}
            </Grid>
            <Stack gap={2}>
                <Typography variant="h5" fontWeight={500} noWrap>My Courses</Typography>
                <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
                    {courses.map(course =>
                        <Grid item xs={3} md={1} key={course.title}>
                            <UserCourseCard course={course} />
                        </Grid>
                    )}
                </Grid>
            </Stack>
            <Stack gap={2}>
                <Typography variant="h5" fontWeight={500} noWrap>My Last Quiz</Typography>
                <Stack gap={2} border='1px solid #DFDFDF' borderRadius='10px' padding='20px'>
                    <Typography variant="h6" fontWeight={500}>How to complete this assignment easily</Typography>
                    <Typography fontSize='14px'>
                        Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems.
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        </PrivateRoute>
    )
}

export default AccountOverview;