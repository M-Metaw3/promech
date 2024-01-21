// import React from 'react';
// import Image from 'next/image';
// import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CourseCard from '@/components/CourseCard';

// const CADTracks = () => {
//     const track = {
//         title: 'CAM & CNC',
//         subtitle: 'Manufacturing Fundamentals',
//         coursesCount: 2,
//         description: `
//             CAM & CNC Manufacturing Fundamentals is a course that introduces computer-aided manufacturing (CAM) and computer numerical control (CNC) technologies.
//             This course is designed for individuals who wish to gain a basic understanding of the principles and applications of CAM and CNC in manufacturing processes.
//             this course provides students with the foundational knowledge and skills necessary to begin a career in CAM and CNC manufacturing or to pursue further education in this field.
//         `,
//         detailsLink: '',
//         mainImgSrc: '/home/cnc.jpg',
//         iconColor: '#DB5962',
//         imageIsLeft: true,
//         secImg: {
//             src: '/home/cnc2.png',
//             top: '46.5%', right: '-11.6%', width: '110px'
//         }
//     };

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
// 		/*
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
// 		*/
// 	];

//     const faqs = [
//         {
//             id: '01',
//             question: 'How can Promech Help in Mapping our Trainings and Employee Development Skills?',
//             answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
//         },
//         {
//             id: '02',
//             question: 'Do you offer a money back guarantee?',
//             answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
//         },
//         {
//             id: '03',
//             question: 'Who are the experts/ What are the qualities of Promech experts?',
//             answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
//         }
//     ]
    
//     return (
//         <>
//             <Box position='relative' paddingX={{ xs: 1, lg: 0 }}
//                 sx={{
//                     // background: { xs: 'none', md: `url(${track.secImg.src}), url(${track.mainImgSrc})`},
//                     // backgroundPosition: '68.5% 6%, right center !important',
//                     // backgroundRepeat: 'no-repeat !important'
//                 }}
//             >
//                 <Container disableGutters maxWidth='lg'>
//                     <Grid container width={{ xs: '100%', md: '50%' }} bgcolor='#FFF' rowGap={2} boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.03)' zIndex={1}>
//                         <Grid item xs={12} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
//                             <Typography variant='h3' paddingLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1} borderLeft='4px solid' borderColor={track.iconColor}>
//                                 {track.title}
//                             </Typography>
//                             <Typography variant='h3' marginLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1}>
//                                 {track.subtitle}
//                             </Typography>
//                             <Typography variant='h5' marginLeft={3} color='primary.main' fontWeight={500}><Typography variant='inherit' component='span' fontWeight={700}>{track.coursesCount}</Typography> Courses</Typography>
//                             <Typography marginLeft={3} fontWeight={500} fontSize='18px' lineHeight='35px'>
//                                 {track.description}
//                             </Typography>
//                         </Grid>
//                         <Box
//                             component={Grid} item xs={12} md={6}
//                             position={{ xs: 'relative', md: 'absolute' }}
//                             sx={{
//                                 right: 0, top: 0, bottom: 0
//                             }}
//                         >
//                             <Image
//                                 src={track.mainImgSrc}
//                                 alt={track.title}
//                                 width={600} height={550}
//                                 style={{
//                                     height: 'auto',
//                                     borderRadius: '150px 0px 0px 0px'
//                                 }}
//                             />
//                             <Box display={{ xs: 'none', md: 'block' }}>
//                                 <Image
//                                     src={track.secImg.src}
//                                     alt={track.title}
//                                     width={121} height={78}
//                                     style={{
//                                         width: track.secImg.width,
//                                         height: 'auto',
//                                         position: 'absolute', top: '65%', left: '-13%',
//                                         filter: ' blur(1px)', transform: 'rotateY(180deg)'
//                                     }}
//                                 />
//                             </Box>
//                         </Box>
                            
//                     </Grid>
//                 </Container>
//             </Box>
//             <Box bgcolor='#FAFAFA' paddingX={{ xs: 1, lg: 0 }} paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} position='relative'>
//                 <Container disableGutters maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
//                     <div>
//                         <Typography variant='h6' fontSize='22px' fontWeight={500}>Courses</Typography>
//                         <Typography variant='h3' fontSize='38px' fontWeight={700} display='flex' gap={5}>
//                             {track.subtitle} Courses
//                             <Divider sx={{ bgcolor: 'primary.main', borderColor: 'primary.main', opacity: 0.3, flexGrow: 1, alignSelf: 'flex-end', marginY: 1 }} />
//                         </Typography>
//                     </div>
//                     <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
// 						{courses.map(course =>
// 							<Grid item xs={3} md={1} key={course.title}>
// 								<CourseCard course={course} />
// 							</Grid>
// 						)}
//                         {courses.map(course =>
// 							<Grid item xs={3} md={1} key={course.title}>
// 								<CourseCard course={course} />
// 							</Grid>
// 						)}
// 					</Grid>
//                 </Container>
//                 <Box component='img' alt='ellipse' src='/tracks/vector10.svg'
//                     sx={{
//                         position: 'absolute', left: 0,
//                         top: { xs: 2*8, sm: 4*8, md: 6*8, lg: 8*8 }
//                     }}
//                 />
//                 <Box component='img' alt='ellipse' src='/tracks/vector11.svg'
//                     sx={{
//                         position: 'absolute', left: 0, top: 0, bottom: 0, margin: 'auto'
//                     }}
//                 />
//                 <Box component='img' alt='ellipse' src='/tracks/vector12.svg'
//                     sx={{
//                         position: 'absolute', right: 0,
//                         bottom: { xs: 2*8, sm: 4*8, md: 6*8, lg: 8*8 }
//                     }}
//                 />
//             </Box>
//             <Box bgcolor='#FAFDFF' paddingX={{ xs: 1, lg: 0 }} paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} position='relative'>
//                 <Container disableGutters maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
//                     <Typography variant='h4' fontSize='33px' fontWeight={600} color='text.secondary'>FAQs</Typography>
//                     <Stack gap={2}>
//                         {faqs.map(faq =>
//                             <Accordion key={faq.id}
//                                 color='primary.main' disableGutters square elevation={0}
//                                 sx={{
//                                     bgcolor: 'transparent',
//                                     '& .MuiAccordionSummary-content': { gap: 3 },
//                                     '&.Mui-expanded': { bgcolor: 'rgba(209, 229, 243, 0.20)' }
//                                 }}
//                             >
//                                 <AccordionSummary
//                                     expandIcon={<AddCircleIcon fontSize='large' sx={{ color: '#4597D1' }} />}
//                                     aria-controls="panel1bh-content" id="panel1bh-header"
//                                     sx={{
//                                         alignItems: 'flex-start',
//                                         '& .MuiAccordionSummary-content': { marginY: 0 }
//                                     }}
//                                 >
//                                     <Typography color='#4597D1' fontSize='26px' fontWeight={500}>{faq.id}</Typography>
//                                     <Typography color='#282938' fontSize='26px' fontWeight={500} maxWidth={800}>{faq.question}</Typography>
//                                 </AccordionSummary>
//                                 <AccordionDetails
//                                     sx={{ paddingInlineStart: 10, color: '#282938', opacity: 0.87 }}
//                                 >
//                                     {faq.answer}
//                                 </AccordionDetails>
//                             </Accordion>
//                         )}
//                     </Stack>
//                     <Button variant='outlined' size='large' color='inherit' sx={{ color: '#4597D1', fontWeight: 600, fontSize: '16px' }}>
//                         More FAQs
//                     </Button>
//                 </Container>
//             </Box>
//         </>
//     )
// }

// export default CADTracks;





// import React from 'react';
// import Image from 'next/image';
// import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CourseCard from '@/components/CourseCard';

// const CADTracks =async (props) => {
   


//     const response = await fetch(`http://promech-backend.addictaco.comapi/tracks/${props.params.cad}/?populate=mainImgSrc&populate=sectionImg&populate=courses&populate=courses.imgSrc&populate=courses.userimage&populate=courses.chapters`);
//     const data = await response.json()
//     const dataapi=  data.data.attributes



//     const track = {
//         title: 'CAM & CNC',
//         subtitle: 'Manufacturing Fundamentals',
//         coursesCount: 2,
//         description: `
//             CAM & CNC Manufacturing Fundamentals is a course that introduces computer-aided manufacturing (CAM) and computer numerical control (CNC) technologies.
//             This course is designed for individuals who wish to gain a basic understanding of the principles and applications of CAM and CNC in manufacturing processes.
//             this course provides students with the foundational knowledge and skills necessary to begin a career in CAM and CNC manufacturing or to pursue further education in this field.
//         `,
//         detailsLink: '',
//         mainImgSrc: '/home/cnc.jpg',
//         iconColor: '#DB5962',
//         imageIsLeft: true,
//         secImg: {
//             src: '/home/cnc2.png',
//             top: '46.5%', right: '-11.6%', width: '110px'
//         }
//     };

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
// 		/*
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
// 		*/
// 	];

//     const faqs = [
//         {
//             id: '01',
//             question: 'How can Promech Help in Mapping our Trainings and Employee Development Skills?',
//             answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
//         },
//         {
//             id: '02',
//             question: 'Do you offer a money back guarantee?',
//             answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
//         },
//         {
//             id: '03',
//             question: 'Who are the experts/ What are the qualities of Promech experts?',
//             answer: 'At Promech, we carefully hand-pick instructors with 5 to 30 years of experience. They are all certified in their respective field and are verified members of highly trusted globally recognized 3rd parties, like People Cert & Project Management Institute'
//         }
//     ]
    
//     return (
//         <>
//             <Box position='relative' paddingX={{ xs: 1, lg: 0 }}
//                 sx={{
//                     // background: { xs: 'none', md: `url(${track.secImg.src}), url(${track.mainImgSrc})`},
//                     // backgroundPosition: '68.5% 6%, right center !important',
//                     // backgroundRepeat: 'no-repeat !important'
//                 }}
//             >
//                 <Container disableGutters maxWidth='lg'>
//                     <Grid container width={{ xs: '100%', md: '50%' }} bgcolor='#FFF' rowGap={2} boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.03)' zIndex={1}>
//                         <Grid item xs={12} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
//                             <Typography variant='h3' paddingLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1} borderLeft='4px solid' borderColor={track.iconColor}>
//                                 {dataapi?.title}
//                             </Typography>
//                             <Typography variant='h3' marginLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1}>
//                                 {dataapi.subtitle}
//                             </Typography>
//                             <Typography variant='h5' marginLeft={3} color='primary.main' fontWeight={500}><Typography variant='inherit' component='span' fontWeight={700}>{dataapi?.courses?.data?.length}</Typography> Courses</Typography>
//                             <Typography marginLeft={3} fontWeight={500} fontSize='18px' lineHeight='35px'>
//                                 {dataapi.description}
//                             </Typography>
//                         </Grid>
//                         <Box
//                             component={Grid} item xs={12} md={6}
//                             position={{ xs: 'relative', md: 'absolute' }}
//                             sx={{
//                                 right: 0, top: 0, bottom: 0
//                             }}
//                         >
//                             <Image
//                                 src={dataapi?.mainImgSrc?.data?.attributes?.url?`http://promech-backend.addictaco.com${dataapi?.mainImgSrc?.data?.attributes?.url}`:''}
//                                 alt={track.title}
//                                 width={600} height={550}
//                                 style={{
//                                     height: 'auto',
//                                     borderRadius: '150px 0px 0px 0px'
//                                 }}
//                             />
//                             <Box display={{ xs: 'none', md: 'block' }}>
//                                                         {/* <Image
//                                   src={dataapi?.mainImgSrc?.data?.attributes?.url?`http://promech-backend.addictaco.com${dataapi?.sectionImg?.data?.attributes?.url}`:''}
//                                     alt={track.title}
//                                     width={121} height={78}
//                                     style={{
//                                         width: track.secImg.width,
//                                         height: 'auto',
//                                         position: 'absolute', top: '65%', left: '-13%',
//                                         filter: ' blur(1px)', transform: 'rotateY(180deg)'
//                                     }}
//                                 /> */}
//                             </Box>
//                         </Box>
                            
//                     </Grid>
//                 </Container>
//             </Box>
//             <Box bgcolor='#FAFAFA' paddingX={{ xs: 1, lg: 0 }} paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} position='relative'>
//                 <Container disableGutters maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
//                     <div>
//                         <Typography variant='h6' fontSize='22px' fontWeight={500}>Courses</Typography>
//                         <Typography variant='h3' fontSize='38px' fontWeight={700} display='flex' gap={5}>
//                             {track.subtitle} Courses
//                             <Divider sx={{ bgcolor: 'primary.main', borderColor: 'primary.main', opacity: 0.3, flexGrow: 1, alignSelf: 'flex-end', marginY: 1 }} />
//                         </Typography>
//                     </div>
//                     <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
// 						{dataapi?.courses?.data?dataapi?.courses?.data?.map(course =>
// 							<Grid item xs={3} md={1} key={1}>
// 								<CourseCard course={course} />
// 							</Grid>
// 						):""}
//                         {/* {courses.map(course =>
// 							<Grid item xs={3} md={1} key={course.title}>
// 								<CourseCard course={course} />
// 							</Grid>
// 						)} */}
// 					</Grid>
//                 </Container>
//                 <Box component='img' alt='ellipse' src='/tracks/vector10.svg'
//                     sx={{
//                         position: 'absolute', left: 0,
//                         top: { xs: 2*8, sm: 4*8, md: 6*8, lg: 8*8 }
//                     }}
//                 />
//                 <Box component='img' alt='ellipse' src='/tracks/vector11.svg'
//                     sx={{
//                         position: 'absolute', left: 0, top: 0, bottom: 0, margin: 'auto'
//                     }}
//                 />
//                 <Box component='img' alt='ellipse' src='/tracks/vector12.svg'
//                     sx={{
//                         position: 'absolute', right: 0,
//                         bottom: { xs: 2*8, sm: 4*8, md: 6*8, lg: 8*8 }
//                     }}
//                 />
//             </Box>
//             <Box bgcolor='#FAFDFF' paddingX={{ xs: 1, lg: 0 }} paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} position='relative'>
//                 <Container disableGutters maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
//                     <Typography variant='h4' fontSize='33px' fontWeight={600} color='text.secondary'>FAQs</Typography>
//                     <Stack gap={2}>
//                         {faqs.map(faq =>
//                             <Accordion key={faq.id}
//                                 color='primary.main' disableGutters square elevation={0}
//                                 sx={{
//                                     bgcolor: 'transparent',
//                                     '& .MuiAccordionSummary-content': { gap: 3 },
//                                     '&.Mui-expanded': { bgcolor: 'rgba(209, 229, 243, 0.20)' }
//                                 }}
//                             >
//                                 <AccordionSummary
//                                     expandIcon={<AddCircleIcon fontSize='large' sx={{ color: '#4597D1' }} />}
//                                     aria-controls="panel1bh-content" id="panel1bh-header"
//                                     sx={{
//                                         alignItems: 'flex-start',
//                                         '& .MuiAccordionSummary-content': { marginY: 0 }
//                                     }}
//                                 >
//                                     <Typography color='#4597D1' fontSize='26px' fontWeight={500}>{faq.id}</Typography>
//                                     <Typography color='#282938' fontSize='26px' fontWeight={500} maxWidth={800}>{faq.question}</Typography>
//                                 </AccordionSummary>
//                                 <AccordionDetails
//                                     sx={{ paddingInlineStart: 10, color: '#282938', opacity: 0.87 }}
//                                 >
//                                     {faq.answer}
//                                 </AccordionDetails>
//                             </Accordion>
//                         )}
//                     </Stack>
//                     <Button variant='outlined' size='large' color='inherit' sx={{ color: '#4597D1', fontWeight: 600, fontSize: '16px' }}>
//                         More FAQs
//                     </Button>
//                 </Container>
//             </Box>
//         </>
//     )
// }

// export default CADTracks;
import React from 'react';
import Image from 'next/image';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CourseCard from '@/components/CourseCard';

const CADTracks = async (props: any): Promise<JSX.Element> => {
    const response = await fetch(`http://promech-backend.addictaco.comapi/tracks/${props.params.cad}/?populate=mainImgSrc&populate=sectionImg&populate=courses&populate=courses.imgSrc&populate=courses.userimage&populate=courses.chapters`,
    {
        next:{revalidate:0}
    });
    console.log(props.params.cad)
    const data = await response.json()
    const dataapi = await data?.data?.attributes
    // console.log(data)
    const track = {
        title: 'CAM & CNC',
        subtitle: 'Manufacturing Fundamentals',
        coursesCount: 2,
        description: `
            CAM & CNC Manufacturing Fundamentals is a course that introduces computer-aided manufacturing (CAM) and computer numerical control (CNC) technologies.
            This course is designed for individuals who wish to gain a basic understanding of the principles and applications of CAM and CNC in manufacturing processes.
            this course provides students with the foundational knowledge and skills necessary to begin a career in CAM and CNC manufacturing or to pursue further education in this field.
        `,
        detailsLink: '',
        mainImgSrc: '/home/cnc.jpg',
        iconColor: '#DB5962',
        imageIsLeft: true,
        secImg: {
            src: '/home/cnc2.png',
            top: '46.5%', right: '-11.6%', width: '110px'
        }
    };
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
                name: 'Eng. John Lamiee'
            },
            chaptersCount: 12,
            daysCount: 5,
            hoursCount: 30
        },
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
    ];
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
        <>
            <Box position='relative' paddingX={{ xs: 1, lg: 0 }}
                sx={{
                    // background: { xs: 'none', md: `url(${track.secImg.src}), url(${track.mainImgSrc})`},
                    // backgroundPosition: '68.5% 6%, right center !important',
                    // backgroundRepeat: 'no-repeat !important'
                }}
            >
                <Container disableGutters maxWidth='lg'>
                    <Grid container width={{ xs: '100%', md: '50%' }} bgcolor='#FFF' rowGap={2} boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.03)' zIndex={1}>
                        <Grid item xs={12} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
                            <Typography variant='h3' paddingLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px' }} color='text.secondary' fontWeight={600} lineHeight={1} borderLeft='4px solid' borderColor={track.iconColor}>
                                {dataapi?.title}
                            </Typography>
                            <Typography variant='h3' marginLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px' }} color='text.secondary' fontWeight={600} lineHeight={1}>
                                {dataapi?.subtitle}
                            </Typography>
                            <Typography variant='h5' marginLeft={3} color='primary.main' fontWeight={500}><Typography variant='inherit' component='span' fontWeight={700}>{dataapi?.courses?.data?.length}</Typography> Courses</Typography>
                            <Typography marginLeft={3} fontWeight={500} fontSize='18px' lineHeight='35px'>
                                {dataapi?.description}
                            </Typography>
                        </Grid>
                        <Box
                            component={Grid} item xs={12} md={6}
                            position={{ xs: 'relative', md: 'absolute' }}
                            sx={{
                                right: 0, top: 0, bottom: 0
                            }}
                        >
                            <Image
                                src={dataapi&&dataapi?.mainImgSrc&&dataapi?.mainImgSrc?.data?.attributes?.url ? `http://promech-backend.addictaco.com${dataapi?.mainImgSrc?.data?.attributes?.url}` : ''}
                                alt={track.title}
                                width={600} height={550}
                                style={{
                                    height: 'auto',
                                    borderRadius: '150px 0px 0px 0px'
                                }}
                            />
                            <Box display={{ xs: 'none', md: 'block' }}>
                                {/* <Image
                                  src={dataapi?.mainImgSrc?.data?.attributes?.url?`http://promech-backend.addictaco.com${dataapi?.sectionImg?.data?.attributes?.url}`:''}
                                    alt={track.title}
                                    width={121} height={78}
                                    style={{
                                        width: track.secImg.width,
                                        height: 'auto',
                                        position: 'absolute', top: '65%', left: '-13%',
                                        filter: ' blur(1px)', transform: 'rotateY(180deg)'
                                    }}
                                /> */}
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box bgcolor='#FAFAFA' paddingX={{ xs: 1, lg: 0 }} paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} position='relative'>
                <Container disableGutters maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
                    <div>
                        <Typography variant='h6' fontSize='22px' fontWeight={500}>Courses</Typography>
                        <Typography variant='h3' fontSize='38px' fontWeight={700} display='flex' gap={5}>
                            {track?.subtitle} Courses
                            <Divider sx={{ bgcolor: 'primary.main', borderColor: 'primary.main', opacity: 0.3, flexGrow: 1, alignSelf: 'flex-end', marginY: 1 }} />
                        </Typography>
                    </div>
                    <Grid container columns={3} columnSpacing={8} rowGap={4} marginTop={2} justifyContent='stretch'>
                        {dataapi?.courses?.data ? dataapi?.courses?.data?.map((course: any) =>
                            <Grid item xs={3} md={1} key={1}>
                                <CourseCard course={course} />
                            </Grid>
                        ) : ""}
                        {/* {courses.map(course =>
							<Grid item xs={3} md={1} key={course.title}>
								<CourseCard course={course} />
							</Grid>
						)} */}
                    </Grid>
                </Container>
                <Box component='img' alt='ellipse' src='/tracks/vector10.svg'
                    sx={{
                        position: 'absolute', left: 0,
                        top: { xs: 2 * 8, sm: 4 * 8, md: 6 * 8, lg: 8 * 8 }
                    }}
                />
                <Box component='img' alt='ellipse' src='/tracks/vector11.svg'
                    sx={{
                        position: 'absolute', left: 0, top: 0, bottom: 0, margin: 'auto'
                    }}
                />
                <Box component='img' alt='ellipse' src='/tracks/vector12.svg'
                    sx={{
                        position: 'absolute', right: 0,
                        bottom: { xs: 2 * 8, sm: 4 * 8, md: 6 * 8, lg: 8 * 8 }
                    }}
                />
            </Box>
            <Box bgcolor='#FAFDFF' paddingX={{ xs: 1, lg: 0 }} paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} position='relative'>
                <Container disableGutters maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <Typography variant='h4' fontSize='33px' fontWeight={600} color='text.secondary'>FAQs</Typography>
                    <Stack gap={2}>
                        {faqs.map(faq =>
                            <Accordion key={faq.id}
                                color='primary.main' disableGutters square elevation={0}
                                sx={{
                                    bgcolor: 'transparent',
                                    '& .MuiAccordionSummary-content': { gap: 3 },
                                    '&.Mui-expanded': { bgcolor: 'rgba(209, 229, 243, 0.20)' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<AddCircleIcon fontSize='large' sx={{ color: '#4597D1' }} />}
                                    aria-controls="panel1bh-content" id="panel1bh-header"
                                    sx={{
                                        alignItems: 'flex-start',
                                        '& .MuiAccordionSummary-content': { marginY: 0 }
                                    }}
                                >
                                    <Typography color='#4597D1' fontSize='26px' fontWeight={500}>{faq.id}</Typography>
                                    <Typography color='#282938' fontSize='26px' fontWeight={500} maxWidth={800}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{ paddingInlineStart: 10, color: '#282938', opacity: 0.87 }}
                                >
                                    {faq.answer}
                                </AccordionDetails>
                            </Accordion>
                        )}
                    </Stack>
                    <Button variant='outlined' size='large' color='inherit' sx={{ color: '#4597D1', fontWeight: 600, fontSize: '16px' }}>
                        More FAQs
                    </Button>
                </Container>
            </Box>
        </>
    )
}

export default CADTracks;


