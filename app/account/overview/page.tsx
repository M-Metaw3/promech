"use client"
// import React, { useEffect, useState } from 'react';
// import { Grid, Stack, Typography } from '@mui/material';
// import UserCourseCard from '@/components/UserCourseCard';
// import PrivateRoute from '../../../components/PrivateRoute';
// import { setAuthTokenCookie, getAuthTokenCookie } from '../../../utils/auth';
// import { useRouter } from 'next/navigation'
// import { ToastContainer, toast } from 'react-toastify';
// import { redirect } from 'next/navigation';

// const AccountOverview = () => {
//     const [dataapiuser, setdata] = useState<any>();
//     const statistics = [
//         {
//             title: 'No. of Courses',
//             count: 2,
//             bgcolor: 'primary.main'
//         },
//         {
//             title: 'No. of Chapters',
//             count: 8,
//             bgcolor: 'primary.main'
//         },
//         {
//             title: 'Assigned Tasks',
//             count: 3,
//             bgcolor: '#141522'
//         },
//         {
//             title: 'Solve Quizzes',
//             count: 1,
//             bgcolor: '#141522'
//         },
//         {
//             title: 'Uploaded Files',
//             count: 9,
//             bgcolor: '#570DE6'
//         },
//         {
//             title: 'Uploaded Files',
//             count: 4,
//             bgcolor: '#DB5962'
//         }
//     ]
//     const courses = [
//         {
//             imgSrc: '/home/temp/photo1.jpg',
//             category: {
//                 title: 'CAD & Reverse Engineering',
//                 iconColor: 'success.main',
//             },
//             title: 'Modelling and Reverse Engineering',
//             user: {
//                 imgSrc: '/home/temp/user1.svg',
//                 name: 'Eng. John Lamiee'
//             },
//             chaptersCount: 7,
//             finishedChaptersCount: 4,
//             daysCount: 5,
//             // hoursCount: 107
//         }
//     ];
//     const { push } = useRouter();
//     useEffect(() => {
//         const fetchData = async () => {
//             const tokenString = getAuthTokenCookie();
//             console.log(tokenString)
//             const parsetoken = tokenString && JSON.parse(tokenString)
//             console.log(parsetoken);
//             if (!tokenString) {
//                 toast.error('You must login to take this service');
//                 push('/login')
//                 return;
//             } else {
//                 const response = await fetch(`
        



//                 http://promech-backend.addictaco.comapi/bookings?populate[course][populate][imgSrc]=true&populate[course][populate][chapters][populate][lessons]=true&populate[user][populate]=true&filters[isBooking]=true&filters[user]=${parsetoken?.user?.id}
//                 `);
//                 const datares = await response.json()
//                 setdata(datares)
//                 console.log(datares.data)
//             }
//         }
//         fetchData();
//     }, []);
  
//     return (
//         <PrivateRoute>
//             <Stack gap={4}>
//                 <Typography color='#9C9CA4'>Let’s learn something New</Typography>
//                 {/* <Grid container columns={6} columnSpacing={{ xs: '10px', md: '20px' }} rowGap={{ xs: '10px', md: '20px' }}>
//                 {data&&data.map(dataa,i) =>(
//                     <Grid key={statistics[i].title} item xs={3} md={2} lg={1}>
//                         <Stack gap={3} bgcolor={statistics[i].bgcolor} color='#FFF' borderRadius='10px' padding='20px' paddingBottom='30px'>
//                             <Typography fontWeight={600}>{statistics[i].title}</Typography>
//                             <Typography variant='h3' fontWeight={500}>{dataa.meta.total}</Typography>
//                         </Stack>
//                     </Grid>
//                 )}
//             </Grid> */}
//                 <Grid container columns={6} columnSpacing={{ xs: '10px', md: '20px' }} rowGap={{ xs: '10px', md: '20px' }}>
//                     <Grid key={statistics[0].title} item xs={3} md={2} lg={1}>
//                         <Stack gap={3} bgcolor={statistics[0].bgcolor} color='#FFF' borderRadius='10px' padding='20px' paddingBottom='30px'>
//                             <Typography fontWeight={600}>{statistics[0].title}</Typography>
//                             <Typography variant='h3' fontWeight={500}>{dataapiuser?.meta?.pagination?.total?dataapiuser?.meta?.pagination?.total:''}</Typography>
//                         </Stack>
//                     </Grid>
//                 </Grid>
//                 <Stack gap={2}>


//                     <Typography variant="h5" fontWeight={500} noWrap>My Courses</Typography>
//                     <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
//                         {dataapiuser&&dataapiuser.data&&dataapiuser.data.map(course =>
//                             <Grid item xs={3} md={1} key={course.attributes.course.data.attributes.title}>
//                                 <UserCourseCard id={course.attributes?.course?.data.id} course={course.attributes?.course?.data.attributes} />
//                             </Grid>
//                         )}
//                     </Grid>
//                 </Stack>
//                 <Stack gap={2}>
//                     <Typography variant="h5" fontWeight={500} noWrap>My Last Quiz</Typography>
//                     <Stack gap={2} border='1px solid #DFDFDF' borderRadius='10px' padding='20px'>
//                         <Typography variant="h6" fontWeight={500}>How to complete this assignment easily</Typography>
//                         <Typography fontSize='14px'>
//                             Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems.
//                         </Typography>
//                     </Stack>
//                 </Stack>
//             </Stack>
//         </PrivateRoute>
//     )
// }

// export default AccountOverview;
import React, { useEffect, useState } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import UserCourseCard from '@/components/UserCourseCard';
import PrivateRoute from '../../../components/PrivateRoute';
import { setAuthTokenCookie, getAuthTokenCookie } from '../../../utils/auth';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
interface Statistics {
    title: string;
    count: number;
    bgcolor: string;
}

interface Course {
    imgSrc: string;
    category: {
        title: string;
        iconColor: string;
    };
    title: string;
    user: {
        imgSrc: string;
        name: string;
    };
    chaptersCount: number;
    finishedChaptersCount: number;
    daysCount: number;
    // hoursCount: number;
}

const AccountOverview = (): JSX.Element => {
    const [dataapiuser, setdata] = useState<any>();
    const statistics: Statistics[] = [
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
    const courses: Course[] = [
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
    const { push } = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const tokenString = getAuthTokenCookie();
            console.log(tokenString)
            const parsetoken = tokenString && JSON.parse(tokenString)
            console.log(parsetoken);
            if (!tokenString) {
                toast.error('You must login to take this service');
                push('/login')
                return;
            } else {
                const response = await fetch(`
        



                http://promech-backend.addictaco.com/api/bookings?populate[course][populate][imgSrc]=true&populate[course][populate][chapters][populate][lessons]=true&populate[user][populate]=true&populate[course][populate][userimage]=true&filters[isBooking]=true&filters[user]=${parsetoken?.user?.id}
                `);
                const datares = await response.json()
                setdata(datares)
                console.log(datares.data)
            }
        }
        fetchData();
    }, []);
  
    return (
        <PrivateRoute>
            <Stack gap={4}>
                <Typography color='#9C9CA4'>Let’s learn something New</Typography>
                {/* <Grid container columns={6} columnSpacing={{ xs: '10px', md: '20px' }} rowGap={{ xs: '10px', md: '20px' }}>
                {data&&data.map(dataa,i) =>(
                    <Grid key={statistics[i].title} item xs={3} md={2} lg={1}>
                        <Stack gap={3} bgcolor={statistics[i].bgcolor} color='#FFF' borderRadius='10px' padding='20px' paddingBottom='30px'>
                            <Typography fontWeight={600}>{statistics[i].title}</Typography>
                            <Typography variant='h3' fontWeight={500}>{dataa.meta.total}</Typography>
                        </Stack>
                    </Grid>
                )}
            </Grid> */}
                <Grid container columns={6} columnSpacing={{ xs: '10px', md: '20px' }} rowGap={{ xs: '10px', md: '20px' }}>
                    <Grid key={statistics[0].title} item xs={3} md={2} lg={1}>
                        <Stack gap={3} bgcolor={statistics[0].bgcolor} color='#FFF' borderRadius='10px' padding='20px' paddingBottom='30px'>
                            <Typography fontWeight={600}>{statistics[0].title}</Typography>
                            <Typography variant='h3' fontWeight={500}>{dataapiuser?.meta?.pagination?.total?dataapiuser?.meta?.pagination?.total:''}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack gap={2}>


                    <Typography variant="h5" fontWeight={500} noWrap>My Courses</Typography>
                    <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
                        {dataapiuser&&dataapiuser.data&&dataapiuser.data.map((course: any) =>
                            <Grid item xs={3} md={1} key={course.attributes.course.data.attributes.title}>
                                <UserCourseCard id={course.attributes?.course?.data.id} course={course.attributes?.course?.data.attributes} />
                            </Grid>
                        )}
                    </Grid>
                </Stack>
                <Stack gap={2}>
                    <Typography variant="h5" fontWeight={500} noWrap>My Last Quiz</Typography>
                    <Stack gap={2} border='1px solid #DFDFDF' borderRadius='10px' padding='20px'>
                        <Typography color="secondary" variant="h6" fontWeight={500}>  
                        
                        <IconButton color="secondary"  aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
                        under Development</Typography>
                        <Typography fontSize='20px'>
                    
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </PrivateRoute>
    )
}

export default AccountOverview;