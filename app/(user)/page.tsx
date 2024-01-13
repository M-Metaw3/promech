// import React from 'react';
// import { Metadata } from 'next';
// import Image from 'next/image';
// import { Avatar, Box, Button, Container, Divider, Grid, Icon, Stack, Typography } from '@mui/material';
// import EastIcon from '@mui/icons-material/East';
// import Link from 'next/link';

// import { colors, fonts } from '@/components/ThemeRegistry/variables';
// import DownButton from './DownButton';
// import Students from './Students';
// import CourseCard from '@/components/CourseCard';

// export const metadata: Metadata = {

// }	

// const page = async() => {
// 	const tracks = [
// 		{
// 			title: 'CAD &',
// 			subtitle: 'Reverse Engineering',
// 			coursesCount: 6,
// 			description: `
//                 CAD (Computer-Aided Design) and Reverse Engineering are two essential skills for designing and manufacturing products.
//                 This course is designed to teach students the fundamentals of CAD, including creating and modifying 3D designs, using CAD software tools, and understanding design principles.
//                 Students will also learn about Reverse Engineering, which involves using computer-aided tools to recreate an existing product, part, or assembly.
//                 This course will cover methods such as 3D scanning, point cloud processing, and parametric modeling.
//             `,
// 			detailsLink: '',
// 			mainImgSrc: '/home/cad.png',
// 			iconColor: 'success.main',
// 			backgroundColor: '#f6f6f6'
// 		},
// 		{
// 			title: 'Additive Manufacturing',
// 			subtitle: '(3D Printing)',
// 			coursesCount: 8,
// 			description: `
//                 Additive Manufacturing, also known as 3D printing, is a rapidly growing field of technology that allows the creation of complex three-dimensional objects from digital designs.
//                 This course will introduce students to the principles, practices, and applications of additive manufacturing.
//                 Students will learn about the various types of 3D printing technologies, including fused deposition modeling (FDM), stereolithography (SLA), selective laser sintering (SLS), and more.
//                 They will also gain hands-on experience with 3D printing software, designing and printing their own objects.
//                 Additionally, the course will cover the use of 3D printing in various industries, such as aerospace, automotive, and medical.
//             `,
// 			detailsLink: '',
// 			mainImgSrc: '/home/scanning.jpg',
// 			iconColor: '#D38CBD',
// 			imageIsLeft: true,
// 			secImg: {
// 				src: '/home/inspection.png',
// 				top: '5.7%', right: '-7.5%', width: '24%'
// 			}
// 		},
// 		{
// 			title: 'Simulation',
// 			subtitle: '(FEA & CFD)',
// 			coursesCount: 7,
//             description: `
//                 The Simulation course is designed to teach students the fundamentals of Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD).
//                 FEA is a powerful numericaltool used to simulate the behavior of complex structures and systems under different loading conditions.
//                 CFD, on the other hand, is used to study fluid flow and heat transfer phenomena.
//             `,
// 			detailsLink: '',
// 			mainImgSrc: '/home/simulation.jpg',
// 			iconColor: '#4597D1',
// 			secImg: {
// 				src: '/home/gear.png',
// 				top: '4.7%', left: '-28.3%'
// 			}
// 		},
// 		{
// 			title: 'CAM & CNC',
// 			subtitle: 'Manufacturing Fundamentals',
// 			coursesCount: 2,
//             description: `
//                 CAM & CNC Manufacturing Fundamentals is a course that introduces computer-aided manufacturing (CAM) and computer numerical control (CNC) technologies.
//                 This course is designed for individuals who wish to gain a basic understanding of the principles and applications of CAM and CNC in manufacturing processes.
//                 this course provides students with the foundational knowledge and skills necessary to begin a career in CAM and CNC manufacturing or to pursue further education in this field.
//             `,
// 			detailsLink: '',
// 			mainImgSrc: '/home/cnc.jpg',
// 			iconColor: '#DB5962',
// 			imageIsLeft: true,
// 			secImg: {
// 				src: '/home/cnc2.png',
// 				top: '46.5%', right: '-11.6%', width: '110px'
// 			}
// 		},
// 	]

// 	const courses = [
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


//     const response = await fetch(`http://localhost:1337/api/herosections/?populate=image`,{

//     next:{
//         revalidate: 0
//     }
//     });
//     const data = await response.json()
//     const dataapi=  await data?.data?.attributes
// 	// console.log(data?.data[0]?.attributes?.image?.data.attributes.url)
// 	/////////////////////////////////////////////////////////////////////////////////////////////////////////
//     const responsetracks = await fetch(`http://localhost:1337/api/tracks/?pagination[limit]=2&populate=mainImgSrc&populate=courses`,{

//     next:{
//         revalidate: 0
//     }
//     });
//     const datatracks = await responsetracks.json()
//     const dataapitracks=  await data?.data?.attributes
	
// 	// console.log(datatracks?.data[0]?.attributes?.image?.data.attributes.url)
// 	const responsecourses = await fetch(`http://localhost:1337/api/courses/?pagination[limit]=3&populate=imgSrc&populate=chapters&populate=userimage`, {
//         next: {
//             revalidate: 0
//         }
//     });
//     const coursesdata  = await responsecourses.json();
//     // const  dataapicourses = await datacourses?.data?.attributes;
// 	// console.log(datatracks?.data[0]?.attributes?.image?.data.attributes.url)
	


// 	/////////////////////////////////////////////////////////////////////////////////////
// 	const responseSection = await fetch(`http://localhost:1337/api/sectionsinhomes/?populate=imagesection`, {
//         next: {
//             revalidate: 0
//         }
//     });
//     const sections = await responseSection.json();
// 	console.log(sections.data)

// 	return (
// 		<>
// 			<Box position='relative' bgcolor='primary.main' color='#FFF' marginTop='106px' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
// 				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
// 					<Grid container columnSpacing={2} rowGap={2} alignItems='center' justifyContent='space-between' zIndex={1}>
// 						<Grid style={{ 
//     maxWidth: "660px", 
//     overflowWrap: "break-word", 
//     wordWrap: "break-word" 
//   }} item xs={12} md={7} display='flex' flexDirection='column' gap={2} alignItems='flex-start'>
// 							<Typography variant='h3' component='div' typography={{ xs: 'h4', md: 'h3' }} fontWeight={'600 !important'} fontFamily={fonts.poppins} lineHeight='normal !important' sx={{ wordSpacing: 2 }}>
// 								{data&&data?.data[0]&&data?.data[0]?.attributes?data?.data[0]?.attributes?.header:"Empowering the next generation of sustainable manufacturers." }
// 							</Typography>
// 							<Stack gap={0.5}>
						
// 								{data&&data?.data[0]&&data?.data[0]?.attributes?data?.data[0]?.attributes?.paragraph:(
//         <>
//           <Typography lineHeight={2} fontSize='18px' maxWidth={600}>
//             Welcome to <Typography component='span' variant='inherit' textTransform='uppercase' display='inline'>PROMECH</Typography> Academy, the hub for aspiring manufacturers seeking to revolutionize the future of Egypt and the Arab world.
//           </Typography>
//           <Typography lineHeight={2} fontSize='18px' maxWidth={600}>
//             We believe in nurturing a culture of collaboration and innovation. Therefore, our hubs are incubators, where ideas take flight, dreams materialize, and lifelong connections are forged.
//           </Typography>
//           <Typography lineHeight={2} fontSize='18px' maxWidth={600}>
//             Join us to get empowered and lead the next generation of sustainable manufacturing.
//           </Typography>
//         </>
//       )}

// 							</Stack>
							
// 							<Button variant='contained' color='inherit' size='large'
// 								endIcon={<EastIcon color='success' />}
// 								sx={{ bgcolor: '#FFF', color: 'primary.main', fontWeight: 600, fontSize: '18px', paddingY: 2, paddingX: 4 }}
// 							>
// 								  <a href="#sectionId" style={{ textDecoration: 'none', color: 'inherit' }}>
//     Explore Tracks
//   </a>
// 							</Button>
// 							{/* <Typography fontSize='18px' fontWeight={700}>
// 								Sponsored by
// 							</Typography>
// 							<img alt='giz' src='/home/giz.png' /> */}
// 						</Grid>
// 						<Grid item xs={12} md={5} display='flex' justifyContent={{ xs: 'center', md: 'flex-end' }}>
// 							<Image alt='ellipse' 
// 							src={data&&data?.data[0]&&data?.data[0]?.attributes&&data?.data[0]?.attributes?.image?`http://localhost:1337${data?.data[0]?.attributes?.image?.data.attributes.url}`:'/home/ellipse.jpg'}
						
// 								width={405} height={405}
// 								style={{
// 									maxWidth: 405, maxHeight: 405,
// 									width: '100%', height: 'auto',
// 									objectFit: 'cover', borderRadius: '50%',
// 									border: '20px solid rgba(255, 255, 255, 0.10)',
// 									boxShadow: '0px 4px 54px 0px rgba(0, 0, 0, 0.15)'
// 								}}
// 							/>
// 						</Grid>
// 					</Grid>
// 					<DownButton />
// 					<Image alt='scroll' src='/home/hero-back.gif'
// 						width={791} height={445}
// 						style={{
// 							objectFit: 'cover', width: 791, height: 'auto',
// 							position: 'absolute', bottom: 0, right: 0,
// 							opacity: 0.44
// 						}}
// 					/>
// 				</Container>
// 			</Box>
			

// {sections&&sections.data.map((el)=>(
// <>
// <Box id='#sectionId' position='relative' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }} paddingBottom={{ xs: 8, sm: 10, md: 12, lg: 12 }}>
// 				<Container  disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex',  alignItems: 'center', gap: 2 }}>
// 					<Box component='img' alt='ellipse' src='/home/ellipse2.svg' sx={{ alignSelf: 'flex-end', position: { xs: 'absolute', md: 'block' }, bottom: { xs: -8*8, sm: -8*10, md: -8*10, lg: -8*12 }, left: 0 }} />
// 					<Stack gap={4} width='100%'>
// 						<Typography variant='h4' color='text.secondary' lineHeight='55px' fontWeight={700}>
// 						{el?.attributes?.header} <br />
// 							<Typography variant='inherit' color='secondary.main' display='inline'>Promech Academy</Typography> Solutions!
// 						</Typography>
// 						<Grid container columns={2} columnSpacing={4} rowGap={4}>
// 							<Grid item xs={2} md={1}>
// 								<img alt='solutions'
								
// 								src={el?.attributes?.imagesection?.data?.attributes?.url?`http://localhost:1337${el?.attributes?.imagesection?.data?.attributes?.url}`:'/home/solutions.jpg'}
// 								 width='100%' height='auto' style={{ objectFit: 'cover' }} />
// 							</Grid>
// 							<Grid item xs={2} md={1} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
// 								<Typography variant='h5' component='h4' fontWeight={700} lineHeight='42px'>
// 								{el?.attributes?.subheader}
// 								</Typography>
// 								<Typography style={{ 
//     maxWidth: "660px", 
//     overflowWrap: "break-word", 
//     wordWrap: "break-word" 
//   }} lineHeight='35px' fontWeight={500} fontSize='18px'>
// 								{el?.attributes?.descrption}
					
// 								</Typography>
// 								<Button variant='text' color='secondary' size='large'
// 									endIcon={<EastIcon color='secondary' />}
// 									sx={{ fontWeight: 700, fontSize: '16px', paddingInlineStart: 0, marginTop: 2 }}
// 								>
// 									Know more
// 								</Button>
// 							</Grid>
// 						</Grid>
// 					</Stack>
// 					<Box component='img' alt='ellipse' src='/home/ellipse3.svg' sx={{ alignSelf: 'flex-start', position: { xs: 'absolute', md: 'block', top: 0, right: 0 } }} />

// 					<Box component='img' alt='group2' src='/home/group2.svg'
// 						sx={{
// 							position: 'absolute', right: 0,
// 							bottom: { xs: -8*8, md: -10*8, lg: -12*8 }
// 						}}
// 					/>

					
// 				</Container>
				

// 				{/* <Box component='img' alt='group1' src={el?.attributes?.imagesection?.data?.attributes?.url?`http://localhost:1337${el?.attributes?.imagesection?.data?.attributes?.url}`:''}
// 					sx={{
// 						position: 'absolute', left: 0,
// 						top: { xs: 2*8, sm: 4*8, md: 6*8, lg: 8*8 }
// 					}}
// 				/> */}
// 			</Box>

// </>
// ))}






			















			

// 			<Box position='relative' bgcolor='#F8FBFF' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
// 				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
// 					<Stack alignItems='center' width='100%' gap={2}>
// 						<Typography variant='h4' color='primary.main' fontWeight={500} lineHeight='normal'>Explore</Typography>
// 						<Typography variant='h4' fontWeight={700} lineHeight='normal'>Promech Academy Tracks</Typography>
// 						<Divider variant='middle' sx={{ bgcolor: 'primary.main', width: 100, opacity: 0.3, marginTop: 2 }} />
// 					</Stack>


// 					{/* {datatracks&&datatracks?.data&&datatracks?.data.map((el:any,i:any)=>(
// 						<>
// 						<h1>

// 							{el?.attributes?.title}
// 						</h1>
// 						</>
// 					))} */}
// 					{datatracks&&datatracks?.data&&datatracks?.data.map((track:any, i:any) =>
// 						<Grid key={track?.id} container border='1px solid #F4F4F4' borderRadius='6px' bgcolor='#FFF' boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.03)' zIndex={1}>
// 							<Grid item xs={10} md={6} order={tracks[0].imageIsLeft ? 1 : undefined} padding={{ xs: 2, md: 5, lg: 8 }} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
// 								<Typography marginLeft={3} color='#73A2A4' fontFamily={fonts.poppins} fontWeight={500} fontSize='18px'>Track</Typography>
// 								<Typography variant='h3' paddingLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1} borderLeft='4px solid' borderColor={tracks[0].iconColor}>
// 									{track?.attributes?.title}
// 								</Typography>
// 								<Typography variant='h3' marginLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1}>
// 									{track?.attributes?.subtitle}
// 								</Typography>
// 								<Typography variant='h5' marginLeft={3} color='primary.main' fontWeight={500}><Typography variant='inherit' component='span' fontWeight={700}>{track?.attributes?.courses?.data?.length}</Typography> Courses</Typography>
// 								<Typography marginLeft={3} fontWeight={500} fontSize='18px' lineHeight='35px'>
// 									{track?.attributes?.description}
// 								</Typography>
// 								<Button variant='contained' size='large'
// 									endIcon={<EastIcon />}
// 									sx={{ fontWeight: 600, fontSize: '16px',  marginLeft: 3 }}
// 									component={Link} href={`/tracks/${track?.id}`}
// 								>
// 									More Details
// 								</Button>
// 							</Grid>
// 							<Grid item xs={12} md={6} position='relative'
// 								sx={{
// 									background: tracks[0].backgroundColor ? 'linear-gradient(#f6f6f6, #f6f6f6)' : undefined,
// 									backgroundSize: '90% auto',
// 									backgroundRepeat: 'no-repeat',
// 									backgroundPosition: i % 2 === 0 ? "right" : "left"
// 								}}
// 							>
// 								<Image
// 									src={track&&track?.attributes&&track?.attributes?.mainImgSrc&&track?.attributes?.mainImgSrc?.data&&track?.attributes?.mainImgSrc&&track?.attributes?.mainImgSrc?.data?.attributes?.url?`http://localhost:1337${track?.attributes?.mainImgSrc&&track?.attributes?.mainImgSrc?.data?.attributes?.url}`:''}
// 									alt={track?.attributes?.title}
// 									width={500} height={500}
// 									style={{
// 										width: '100%',
// 										height: '100%',
// 									}}
// 								/>
// 								{tracks[0].secImg &&
// 									<Box display={{ xs: 'none', md: 'block' }}>
// 										<Image
// 											src={track.secImg.src}
// 											alt={track.title}
// 											width={142} height={177}
// 											style={{
// 												width: track.secImg.width,
// 												height: 'auto',
// 												position: 'absolute',
// 												top: track.secImg.top, right: track.secImg.right, left: track.secImg.left
// 											}}
// 										/>
// 									</Box>
// 								}
// 							</Grid>
// 						</Grid>
// 					)}
					
// 					<Box component='img' alt='group3' src='/home/group3.svg'
// 						sx={{
// 							position: 'absolute', top: 10, left: { xs: 0, lg: -50 },
// 						}}
// 					/>
// 					<Box component='img' alt='group3' src='/home/group3.svg'
// 						sx={{
// 							position: 'absolute', top: '43%', right: { xs: 0, lg: -100 },
// 							transform: 'rotate(90deg)'
// 						}}
// 					/>
// 					<Box component='img' alt='group3' src='/home/group3.svg'
// 						sx={{
// 							position: 'absolute', top: '64%', left: { xs: 0, lg: -100 },
// 							transform: 'rotate(-90deg)'
// 						}}
// 					/>
// 					<Box component='img' alt='group3' src='/home/group3.svg'
// 						sx={{
// 							position: 'absolute', top: '95%', right: { xs: 0, lg: -100 },
// 							transform: 'rotate(90deg)'
// 						}}
// 					/>
				
// 					<Box component='img' alt='vector' src='/home/vector.svg'
// 						sx={{
// 							position: 'absolute', top: '5%', right: { xs: 0, lg: -160 },
// 						}}
// 					/>
// 					<Box component='img' alt='vector' src='/home/vector.svg'
// 						sx={{
// 							position: 'absolute', top: '28%', left: { xs: 0, lg: -200 },
// 						}}
// 					/>
// 					<Box component='img' alt='vector' src='/home/vector.svg'
// 						sx={{
// 							position: 'absolute', top: '66%', right: { xs: 0, lg: -160 },
// 						}}
// 					/>
// 					<Box component='img' alt='vector' src='/home/vector.svg'
// 						sx={{
// 							position: 'absolute', bottom: '-5%', left: { xs: 0, lg: -160 },
// 							transform: 'rotate(180deg)'
// 						}}
// 					/>
// 				</Container>
// 			</Box>

// 			<Box position='relative' bgcolor='#FAFAFA' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
// 				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
// 					<Typography color='#000' fontWeight={500} fontSize='22px'>Courses</Typography>
// 					<Typography variant='h2' fontSize={{ xs: '30px', md: '38px'}} color='primary.main' fontWeight={700} display='flex'>
// 						Most Popular Courses
// 						<Divider variant='middle' sx={{ bgcolor: 'primary.main', width: 100, opacity: 0.3, alignSelf: 'flex-end', marginY: 1, flexGrow: 1 }} />
// 					</Typography>
// 					{/* <Grid container columns={3} columnSpacing={8} rowGap={1} marginTop={2} justifyContent='stretch'>
// 						{datacourses?.data?.map(el=>
// 							<Grid item xs={3} md={1} key={course.title}>
// 								<CourseCard course={course} />
// 							</Grid>
// 						):''}
// 					</Grid> */}
// 					 <Grid container columns={3} columnSpacing={8} rowGap={1} marginTop={2} justifyContent='stretch'>
// 					{coursesdata&&coursesdata?.data&&coursesdata?.data.map((el,i)=>(
// 							<Grid item xs={3} md={1} key={el.id}>
						                           
// 														<CourseCard course={el} />
														
// 														</Grid>

								
// 								))}
// 								</Grid>
// 					<Button variant='contained' size='large'
// 						endIcon={<EastIcon />}
// 						sx={{ fontWeight: 600, fontSize: '16px',  marginLeft: 3, marginTop: 4 }}
// 					>
// 						View Courses
// 					</Button>
// 				</Container>
// 			</Box>

// 			{/* <Box position='relative' bgcolor='#FFF' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
// 				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
// 					<Typography variant='h6' fontSize='22px' fontWeight={500} color='primary.main' lineHeight='normal'>TESTIMONIALS</Typography>
// 					<Typography variant='h3' fontWeight={600} color='text.secondary' fontSize={{ xs: '30px', md: '38px'}} lineHeight='normal'>
// 						Listen from our &nbsp;
// 						<Typography variant='inherit' component='span' color='secondary.main'>Promech</Typography> &nbsp;
// 						Students
// 					</Typography>
// 					<Students />
// 				</Container>
// 				<Box component='img' alt='vector' src='/home/vector.svg'
// 					sx={{
// 						position: 'absolute', top: '10%', right: 0,
// 					}}
// 				/>
// 				<Box component='img' alt='vector' src='/home/vector.svg'
// 					sx={{
// 						position: 'absolute', bottom: 0, left: 0,
// 						transform: 'rotate(116deg)'
// 					}}
// 				/>
// 			</Box> */}

// 			{/* <Box position='relative' bgcolor='#FAFAFA' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
// 				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// 					<Typography variant='h4' color='text.secondary' fontWeight={600}>We loved Sponsor</Typography>
// 					<img alt='giz' src='/home/giz-red.png' style={{ mixBlendMode: 'darken' }} />

// 					<Box component='img' alt='group4' src='/home/group4.svg'
// 						sx={{
// 							position: 'absolute', top: 10, left: 50,
// 						}}
// 					/>
// 					<Box component='img' alt='group4' src='/home/group4.svg'
// 						sx={{
// 							position: 'absolute', bottom: 10, right: 50,
// 							transform: 'rotate(180deg)'
// 						}}
// 					/>
// 				</Container>
// 			</Box> */}
// 		</>
// 	)
// }

// export default page;

import React, { FC } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Avatar, Box, Button, Container, Divider, Grid, Icon, Stack, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

import { colors, fonts } from '@/components/ThemeRegistry/variables';
import DownButton from './DownButton';
import Students from './Students';
import CourseCard from '@/components/CourseCard';

export const metadata: Metadata = {

}	

const page: FC = async() => {
	const tracks: Track[] = [
		{
			title: 'CAD &',
			subtitle: 'Reverse Engineering',
			coursesCount: 6,
			description: `
                CAD (Computer-Aided Design) and Reverse Engineering are two essential skills for designing and manufacturing products.
                This course is designed to teach students the fundamentals of CAD, including creating and modifying 3D designs, using CAD software tools, and understanding design principles.
                Students will also learn about Reverse Engineering, which involves using computer-aided tools to recreate an existing product, part, or assembly.
                This course will cover methods such as 3D scanning, point cloud processing, and parametric modeling.
            `,
			detailsLink: '',
			mainImgSrc: '/home/cad.png',
			iconColor: 'success.main',
			backgroundColor: '#f6f6f6'
		},
		{
			title: 'Additive Manufacturing',
			subtitle: '(3D Printing)',
			coursesCount: 8,
			description: `
                Additive Manufacturing, also known as 3D printing, is a rapidly growing field of technology that allows the creation of complex three-dimensional objects from digital designs.
                This course will introduce students to the principles, practices, and applications of additive manufacturing.
                Students will learn about the various types of 3D printing technologies, including fused deposition modeling (FDM), stereolithography (SLA), selective laser sintering (SLS), and more.
                They will also gain hands-on experience with 3D printing software, designing and printing their own objects.
                Additionally, the course will cover the use of 3D printing in various industries, such as aerospace, automotive, and medical.
            `,
			detailsLink: '',
			mainImgSrc: '/home/scanning.jpg',
			iconColor: '#D38CBD',
			imageIsLeft: true,
			secImg: {
				src: '/home/inspection.png',
				top: '5.7%', right: '-7.5%', width: '24%'
			}
		},
		{
			title: 'Simulation',
			subtitle: '(FEA & CFD)',
			coursesCount: 7,
            description: `
                The Simulation course is designed to teach students the fundamentals of Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD).
                FEA is a powerful numericaltool used to simulate the behavior of complex structures and systems under different loading conditions.
                CFD, on the other hand, is used to study fluid flow and heat transfer phenomena.
            `,
			detailsLink: '',
			mainImgSrc: '/home/simulation.jpg',
			iconColor: '#4597D1',
			secImg: {
				src: '/home/gear.png',
				top: '4.7%', left: '-28.3%'
			}
		},
		{
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
		},
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


    const response = await fetch(`http://localhost:1337/api/herosections/?populate=image`,{

    next:{
        revalidate: 0
    }
    });
    const data = await response.json()
    const dataapi=  await data?.data?.attributes
	// console.log(data?.data[0]?.attributes?.image?.data.attributes.url)
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
    const responsetracks = await fetch(`http://localhost:1337/api/tracks/?pagination[limit]=2&populate=mainImgSrc&populate=courses`,{

    next:{
        revalidate: 0
    }
    });
    const datatracks = await responsetracks.json()
    const dataapitracks=  await data?.data?.attributes
	
	// console.log(datatracks?.data[0]?.attributes?.image?.data.attributes.url)
	const responsecourses = await fetch(`http://localhost:1337/api/courses/?pagination[limit]=3&populate=imgSrc&populate=chapters&populate=userimage`, {
        next: {
            revalidate: 0
        }
    });
    const coursesdata  = await responsecourses.json();
    // const  dataapicourses = await datacourses?.data?.attributes;
	// console.log(datatracks?.data[0]?.attributes?.image?.data.attributes.url)
	


	/////////////////////////////////////////////////////////////////////////////////////
	const responseSection = await fetch(`http://localhost:1337/api/sectionsinhomes/?populate=imagesection`, {
        next: {
            revalidate: 0
        }
    });
    const sections = await responseSection.json();
	console.log(sections.data)

	return (
		<>
			<Box position='relative' bgcolor='primary.main' color='#FFF' marginTop='106px' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
					<Grid container columnSpacing={2} rowGap={2} alignItems='center' justifyContent='space-between' zIndex={1}>
						<Grid style={{ 
    maxWidth: "660px", 
    overflowWrap: "break-word", 
    wordWrap: "break-word" 
  }} item xs={12} md={7} display='flex' flexDirection='column' gap={2} alignItems='flex-start'>
							<Typography variant='h3' component='div' typography={{ xs: 'h4', md: 'h3' }} fontWeight={'600 !important'} fontFamily={fonts.poppins} lineHeight='normal !important' sx={{ wordSpacing: 2 }}>
								{data&&data?.data[0]&&data?.data[0]?.attributes?data?.data[0]?.attributes?.header:"Empowering the next generation of sustainable manufacturers." }
							</Typography>
							<Stack gap={0.5}>
						
								{data&&data?.data[0]&&data?.data[0]?.attributes?data?.data[0]?.attributes?.paragraph:(
        <>
          <Typography lineHeight={2} fontSize='18px' maxWidth={600}>
            Welcome to <Typography component='span' variant='inherit' textTransform='uppercase' display='inline'>PROMECH</Typography> Academy, the hub for aspiring manufacturers seeking to revolutionize the future of Egypt and the Arab world.
          </Typography>
          <Typography lineHeight={2} fontSize='18px' maxWidth={600}>
            We believe in nurturing a culture of collaboration and innovation. Therefore, our hubs are incubators, where ideas take flight, dreams materialize, and lifelong connections are forged.
          </Typography>
          <Typography lineHeight={2} fontSize='18px' maxWidth={600}>
            Join us to get empowered and lead the next generation of sustainable manufacturing.
          </Typography>
        </>
      )}

							</Stack>
							
							<Button variant='contained' color='inherit' size='large'
								endIcon={<EastIcon color='success' />}
								sx={{ bgcolor: '#FFF', color: 'primary.main', fontWeight: 600, fontSize: '18px', paddingY: 2, paddingX: 4 }}
							>
								  <a href="#sectionId" style={{ textDecoration: 'none', color: 'inherit' }}>
    Explore Tracks
  </a>
							</Button>
							{/* <Typography fontSize='18px' fontWeight={700}>
								Sponsored by
							</Typography>
							<img alt='giz' src='/home/giz.png' /> */}
						</Grid>
						<Grid item xs={12} md={5} display='flex' justifyContent={{ xs: 'center', md: 'flex-end' }}>
							<Image alt='ellipse' 
							src={data&&data?.data[0]&&data?.data[0]?.attributes&&data?.data[0]?.attributes?.image?`http://localhost:1337${data?.data[0]?.attributes?.image?.data.attributes.url}`:'/home/ellipse.jpg'}
						
								width={405} height={405}
								style={{
									maxWidth: 405, maxHeight: 405,
									width: '100%', height: 'auto',
									objectFit: 'cover', borderRadius: '50%',
									border: '20px solid rgba(255, 255, 255, 0.10)',
									boxShadow: '0px 4px 54px 0px rgba(0, 0, 0, 0.15)'
								}}
							/>
						</Grid>
					</Grid>
					<DownButton />
					<Image alt='scroll' src='/home/hero-back.gif'
						width={791} height={445}
						style={{
							objectFit: 'cover', width: 791, height: 'auto',
							position: 'absolute', bottom: 0, right: 0,
							opacity: 0.44
						}}
					/>
				</Container>
			</Box>
			

{sections&&sections.data.map((el:any)=>(
<>
<Box id='#sectionId' position='relative' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }} paddingBottom={{ xs: 8, sm: 10, md: 12, lg: 12 }}>
				<Container  disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex',  alignItems: 'center', gap: 2 }}>
					<Box component='img' alt='ellipse' src='/home/ellipse2.svg' sx={{ alignSelf: 'flex-end', position: { xs: 'absolute', md: 'block' }, bottom: { xs: -8*8, sm: -8*10, md: -8*10, lg: -8*12 }, left: 0 }} />
					<Stack gap={4} width='100%'>
						<Typography variant='h4' color='text.secondary' lineHeight='55px' fontWeight={700}>
						{el?.attributes?.header} <br />
							<Typography variant='inherit' color='secondary.main' display='inline'>Promech Academy</Typography> Solutions!
						</Typography>
						<Grid container columns={2} columnSpacing={4} rowGap={4}>
							<Grid item xs={2} md={1}>
								<img alt='solutions'
								
								src={el?.attributes?.imagesection?.data?.attributes?.url?`http://localhost:1337${el?.attributes?.imagesection?.data?.attributes?.url}`:'/home/solutions.jpg'}
								 width='100%' height='auto' style={{ objectFit: 'cover' }} />
							</Grid>
							<Grid item xs={2} md={1} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
								<Typography variant='h5' component='h4' fontWeight={700} lineHeight='42px'>
								{el?.attributes?.subheader}
								</Typography>
								<Typography style={{ 
    maxWidth: "660px", 
    overflowWrap: "break-word", 
    wordWrap: "break-word" 
  }} lineHeight='35px' fontWeight={500} fontSize='18px'>
								{el?.attributes?.descrption}
					
								</Typography>
								<Button variant='text' color='secondary' size='large'
									endIcon={<EastIcon color='secondary' />}
									sx={{ fontWeight: 700, fontSize: '16px', paddingInlineStart: 0, marginTop: 2 }}
								>
									Know more
								</Button>
							</Grid>
						</Grid>
					</Stack>
					<Box component='img' alt='ellipse' src='/home/ellipse3.svg' sx={{ alignSelf: 'flex-start', position: { xs: 'absolute', md: 'block', top: 0, right: 0 } }} />

					<Box component='img' alt='group2' src='/home/group2.svg'
						sx={{
							position: 'absolute', right: 0,
							bottom: { xs: -8*8, md: -10*8, lg: -12*8 }
						}}
					/>

					
				</Container>
				

				{/* <Box component='img' alt='group1' src={el?.attributes?.imagesection?.data?.attributes?.url?`http://localhost:1337${el?.attributes?.imagesection?.data?.attributes?.url}`:''}
					sx={{
						position: 'absolute', left: 0,
						top: { xs: 2*8, sm: 4*8, md: 6*8, lg: 8*8 }
					}}
				/> */}
			</Box>

</>
))}






			















			

			<Box position='relative' bgcolor='#F8FBFF' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
					<Stack alignItems='center' width='100%' gap={2}>
						<Typography variant='h4' color='primary.main' fontWeight={500} lineHeight='normal'>Explore</Typography>
						<Typography variant='h4' fontWeight={700} lineHeight='normal'>Promech Academy Tracks</Typography>
						<Divider variant='middle' sx={{ bgcolor: 'primary.main', width: 100, opacity: 0.3, marginTop: 2 }} />
					</Stack>


					{/* {datatracks&&datatracks?.data&&datatracks?.data.map((el:any,i:any)=>(
						<>
						<h1>

							{el?.attributes?.title}
						</h1>
						</>
					))} */}
					{datatracks&&datatracks?.data&&datatracks?.data.map((track:any, i:any) =>
						<Grid key={track?.id} container border='1px solid #F4F4F4' borderRadius='6px' bgcolor='#FFF' boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.03)' zIndex={1}>
							<Grid item xs={10} md={6} order={tracks[0].imageIsLeft ? 1 : undefined} padding={{ xs: 2, md: 5, lg: 8 }} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
								<Typography marginLeft={3} color='#73A2A4' fontFamily={fonts.poppins} fontWeight={500} fontSize='18px'>Track</Typography>
								<Typography variant='h3' paddingLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1} borderLeft='4px solid' borderColor={tracks[0].iconColor}>
									{track?.attributes?.title}
								</Typography>
								<Typography variant='h3' marginLeft={3} textTransform='capitalize' fontSize={{ xs: '30px', md: '38px'}} color='text.secondary' fontWeight={600} lineHeight={1}>
									{track?.attributes?.subtitle}
								</Typography>
								<Typography variant='h5' marginLeft={3} color='primary.main' fontWeight={500}><Typography variant='inherit' component='span' fontWeight={700}>{track?.attributes?.courses?.data?.length}</Typography> Courses</Typography>
								<Typography marginLeft={3} fontWeight={500} fontSize='18px' lineHeight='35px'>
									{track?.attributes?.description}
								</Typography>
								<Button variant='contained' size='large'
									endIcon={<EastIcon />}
									sx={{ fontWeight: 600, fontSize: '16px',  marginLeft: 3 }}
									component={Link} href={`/tracks/${track?.id}`}
								>
									More Details
								</Button>
							</Grid>
							<Grid item xs={12} md={6} position='relative'
								sx={{
									background: tracks[0].backgroundColor ? 'linear-gradient(#f6f6f6, #f6f6f6)' : undefined,
									backgroundSize: '90% auto',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: i % 2 === 0 ? "right" : "left"
								}}
							>
								<Image
									src={track&&track?.attributes&&track?.attributes?.mainImgSrc&&track?.attributes?.mainImgSrc?.data&&track?.attributes?.mainImgSrc&&track?.attributes?.mainImgSrc?.data?.attributes?.url?`http://localhost:1337${track?.attributes?.mainImgSrc&&track?.attributes?.mainImgSrc?.data?.attributes?.url}`:''}
									alt={track?.attributes?.title}
									width={500} height={500}
									style={{
										width: '100%',
										height: '100%',
									}}
								/>
								{tracks[0].secImg &&
									<Box display={{ xs: 'none', md: 'block' }}>
										<Image
											src={track.secImg.src}
											alt={track.title}
											width={142} height={177}
											style={{
												width: track.secImg.width,
												height: 'auto',
												position: 'absolute',
												top: track.secImg.top, right: track.secImg.right, left: track.secImg.left
											}}
										/>
									</Box>
								}
							</Grid>
						</Grid>
					)}
					
					<Box component='img' alt='group3' src='/home/group3.svg'
						sx={{
							position: 'absolute', top: 10, left: { xs: 0, lg: -50 },
						}}
					/>
					<Box component='img' alt='group3' src='/home/group3.svg'
						sx={{
							position: 'absolute', top: '43%', right: { xs: 0, lg: -100 },
							transform: 'rotate(90deg)'
						}}
					/>
					<Box component='img' alt='group3' src='/home/group3.svg'
						sx={{
							position: 'absolute', top: '64%', left: { xs: 0, lg: -100 },
							transform: 'rotate(-90deg)'
						}}
					/>
					<Box component='img' alt='group3' src='/home/group3.svg'
						sx={{
							position: 'absolute', top: '95%', right: { xs: 0, lg: -100 },
							transform: 'rotate(90deg)'
						}}
					/>
				
					<Box component='img' alt='vector' src='/home/vector.svg'
						sx={{
							position: 'absolute', top: '5%', right: { xs: 0, lg: -160 },
						}}
					/>
					<Box component='img' alt='vector' src='/home/vector.svg'
						sx={{
							position: 'absolute', top: '28%', left: { xs: 0, lg: -200 },
						}}
					/>
					<Box component='img' alt='vector' src='/home/vector.svg'
						sx={{
							position: 'absolute', top: '66%', right: { xs: 0, lg: -160 },
						}}
					/>
					<Box component='img' alt='vector' src='/home/vector.svg'
						sx={{
							position: 'absolute', bottom: '-5%', left: { xs: 0, lg: -160 },
							transform: 'rotate(180deg)'
						}}
					/>
				</Container>
			</Box>

			<Box position='relative' bgcolor='#FAFAFA' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography color='#000' fontWeight={500} fontSize='22px'>Courses</Typography>
					<Typography variant='h2' fontSize={{ xs: '30px', md: '38px'}} color='primary.main' fontWeight={700} display='flex'>
						Most Popular Courses
						<Divider variant='middle' sx={{ bgcolor: 'primary.main', width: 100, opacity: 0.3, alignSelf: 'flex-end', marginY: 1, flexGrow: 1 }} />
					</Typography>
					{/* <Grid container columns={3} columnSpacing={8} rowGap={1} marginTop={2} justifyContent='stretch'>
						{datacourses?.data?.map(el=>
							<Grid item xs={3} md={1} key={course.title}>
								<CourseCard course={course} />
							</Grid>
						):''}
					</Grid> */}
					 <Grid container columns={3} columnSpacing={8} rowGap={1} marginTop={2} justifyContent='stretch'>
					{coursesdata&&coursesdata?.data&&coursesdata?.data.map((el:any,i:any)=>(
							<Grid item xs={3} md={1} key={el.id}>
						                           
														<CourseCard course={el} />
														
														</Grid>

								
								))}
								</Grid>
					<Button variant='contained' size='large'
						endIcon={<EastIcon />}
						sx={{ fontWeight: 600, fontSize: '16px',  marginLeft: 3, marginTop: 4 }}
					>
						View Courses
					</Button>
				</Container>
			</Box>

			{/* <Box position='relative' bgcolor='#FFF' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
					<Typography variant='h6' fontSize='22px' fontWeight={500} color='primary.main' lineHeight='normal'>TESTIMONIALS</Typography>
					<Typography variant='h3' fontWeight={600} color='text.secondary' fontSize={{ xs: '30px', md: '38px'}} lineHeight='normal'>
						Listen from our &nbsp;
						<Typography variant='inherit' component='span' color='secondary.main'>Promech</Typography> &nbsp;
						Students
					</Typography>
					<Students />
				</Container>
				<Box component='img' alt='vector' src='/home/vector.svg'
					sx={{
						position: 'absolute', top: '10%', right: 0,
					}}
				/>
				<Box component='img' alt='vector' src='/home/vector.svg'
					sx={{
						position: 'absolute', bottom: 0, left: 0,
						transform: 'rotate(116deg)'
					}}
				/>
			</Box> */}

			{/* <Box position='relative' bgcolor='#FAFAFA' paddingY={{ xs: 2, sm: 4, md: 6, lg: 8 }} paddingX={{ xs: 1, lg: 0 }}>
				<Container disableGutters maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography variant='h4' color='text.secondary' fontWeight={600}>We loved Sponsor</Typography>
					<img alt='giz' src='/home/giz-red.png' style={{ mixBlendMode: 'darken' }} />

					<Box component='img' alt='group4' src='/home/group4.svg'
						sx={{
							position: 'absolute', top: 10, left: 50,
						}}
					/>
					<Box component='img' alt='group4' src='/home/group4.svg'
						sx={{
							position: 'absolute', bottom: 10, right: 50,
							transform: 'rotate(180deg)'
						}}
					/>
				</Container>
			</Box> */}
		</>
	)
}

export default page;

interface Track {
	title: string;
	subtitle: string;
	coursesCount: number;
	description: string;
	detailsLink: string;
	mainImgSrc: string;
	iconColor: string;
	backgroundColor?: string;
	imageIsLeft?: boolean;
	secImg?: {
		src: string;
		top: string;
		right?: string;
		left?: string;
		width?: string;
	};
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
	daysCount: number;
	hoursCount?: number;
}