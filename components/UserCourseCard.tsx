


import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Box, CircularProgress, Divider, LinearProgress, Stack, Typography } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

interface CourseProps {
    course: any;
    id: any;
}

const UserCourseCard: FC<CourseProps> = ({ id, course }) => {
    console.log(id);
    console.log(course);

    return (
        <Stack
            component={Link} href={`courses/${id}`}
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
            <Box position='relative' width='100%' height={266}>
                <Image
                    src={course?.imgSrc && course?.imgSrc?.data?.attributes?.url ? `http://promech-backend.addictaco.com${course?.imgSrc && course.imgSrc.data.attributes.url}` : ''}
                    alt={course?.title}
                    width={270} height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', transition: '0.2s' }}
                />
                <Stack direction='row' component='figcaption'
                    gap='6px' alignItems='center' justifyContent='center'
                    borderRadius={2} padding='6px 10px' bgcolor='#FFF'
                    position='absolute' bottom={10} left={10}
                    sx={{ backdropFilter: 'blur(15px)' }}
                >
                    {/* <Divider orientation='vertical' sx={{ bgcolor: course.category.iconColor, width: 3, height: 12, border: 'none' }} /> */}
                    <Typography fontSize='12px'>{course?.categoryname}</Typography>
                </Stack>
            </Box>
            <Typography variant='h6' fontSize='18px' fontWeight={700} color='primary.main' flexGrow={1}>{course?.title}</Typography>
            {/* <LinearProgress
                variant='determinate' color='secondary'
                sx={{
                    width: '100%', height: 8, borderRadius: 3,
                    bgcolor: '#F5F5F7'
                }}
                value={course.finishedChaptersCount / course.chaptersCount * 100}
            /> */}
            <Stack direction='row' width='100%' justifyContent='space-between' gap={1} marginTop={-1}>
                <Typography component='span' fontSize='12px' fontWeight={500}>{course?.chapters?.data?.length}/{course?.chapters?.data?.length} Chapters</Typography>
                {/* <Typography component='span' fontSize='12px' fontWeight={500}>{(course.chapters.data.length / course.chapters.data.length * 100).toFixed(2)} %</Typography> */}
            </Stack>
            <Stack direction='row' width='100%' gap={1} alignItems='center'>
                <Avatar src={course?.userimage && course?.userimage?.data?.attributes?.url ? `http://promech-backend.addictaco.com${course?.userimage && course?.userimage?.data?.attributes?.url}` : ''} alt={'Salma Hegazy'} sx={{ width: 30, height: 30 }} />
                <Typography component='span' fontSize='14px'>{course?.user}</Typography>
            </Stack>
            <Stack gap={2}>
                {/* <Stack direction='row' gap='10px' alignItems='center'>
                    <Avatar src={course.user.imgSrc} alt={course.user.name} sx={{ width: 30, height: 30 }} />
                    <Typography fontSize='14px'>{course.user.name}</Typography>
                </Stack> */}
                <Stack direction='row' gap={2} alignItems='center'>
                    <Stack direction='row' gap={0.5}>
                        <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                        <Typography fontSize='14px'>
                            <Typography variant='inherit' component='span' fontWeight={700}>{course?.chaptersCount}</Typography> Chapter(s)
                        </Typography>
                    </Stack>
                    {course?.daysCount && <Stack direction='row' gap={0.5}>
                        <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                        <Typography fontSize='14px'>
                            <Typography variant='inherit' component='span' fontWeight={700}>{course?.daysCount}</Typography> Chapters
                        </Typography>
                    </Stack>}
                    {course?.hours && <Stack direction='row' gap={0.5}>
                        <TimerOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                        <Typography fontSize='14px'>
                            <Typography variant='inherit' component='span' fontWeight={700}>{course?.hours}</Typography> Hour(s)
                        </Typography>
                    </Stack>}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default UserCourseCard;