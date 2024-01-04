import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { fonts } from '@/components/ThemeRegistry/variables';
import Executives from './Executives';

const AboutPage = () => {
    const executives = [
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team10.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team1.png'
		},
		{
			name: 'Salman Zayan',
			position: 'Founder and CEO',
			imgSrc: '/team/team2.png'
		},
		{
			name: 'Noman Kazi',
			position: 'Founder and CEO',
			imgSrc: '/team/team3.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team4.png'
		},
		{
			name: 'Salman Zayan',
			position: 'Founder and CEO',
			imgSrc: '/team/team5.png'
		},
		{
			name: 'Noman Kazi',
			position: 'Founder and CEO',
			imgSrc: '/team/team6.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team7.png'
		},
		{
			name: 'Salman Zayan',
			position: 'Founder and CEO',
			imgSrc: '/team/team8.png'
		},
		{
			name: 'Noman Kazi',
			position: 'Founder and CEO',
			imgSrc: '/team/team9.png'
		},
		{
			name: 'Salman Zayan',
			position: 'Founder and CEO',
			imgSrc: '/team/team11.png'
		},
		{
			name: 'Noman Kazi',
			position: 'Founder and CEO',
			imgSrc: '/team/team12.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team13.png'
		},
		{
			name: 'Salman Zayan',
			position: 'Founder and CEO',
			imgSrc: '/team/team14.png'
		},
		{
			name: 'Noman Kazi',
			position: 'Founder and CEO',
			imgSrc: '/team/team15.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team16.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team17.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team18.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team19.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team20.png'
		},
		{
			name: 'Khaled Abo El-Fetouh',
			position: 'Founder and CEO',
			imgSrc: '/team/team21.png'
		}
	];

    return (
        <>
        <Box position='relative' bgcolor='#F3FBFB' marginTop={-20} paddingTop={20} paddingBottom={4}>
            <Container disableGutters maxWidth='lg' sx={{ position: 'relative', paddingX: 1, paddingY: { xs: 1, md: 5, lg: 7 }, zIndex: 1 }}>
                <Grid container columnSpacing={4} rowGap={2}>
                    <Grid item xs={12} md={7}>
                        <Typography typography={{ xs: 'h4', sm: 'h3' }} fontWeight='600 !important' color='text.secondary' marginBottom={3}>
                            Who is &nbsp;
                            <Typography variant='inherit' display='inline' color='primary.main' component='small'>Promech Academy?</Typography>
                        </Typography>
                        <Typography color='#000' fontWeight={700} fontSize='18px' textAlign='justify' lineHeight='45px'>
                            Promech Academy provides opportunities for individuals, startups, small and medium-sized companies to learn and develop concepts, skills, and applications related to Industry 4.0 technologies. The academy also focuses on teaching students these technologies to create job opportunities and promote industrial engineering innovations while enhancing the capabilities of industrial companies and encouraging the local industrial economy. The courses are divided into several tracks: Mechanical and Reverse Engineering, Fabrication, and Sheet Metal.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} display='flex' alignItems='center' justifyContent='center' position='relative' overflow={{ xs: 'hidden', lg: 'unset' }}>
                        <Image
                            src='/about/academy.jpg' alt='company'
                            width={400} height={400}
                            style={{
                                objectFit: 'cover', zIndex: 1,
                                borderRadius: '50%',
                                width: '100%', maxWidth: 400, height: '100%', maxHeight: 400,
                            }}
                        />
                        <Box component='img' alt='ellipse' src='/about/ellipse1.svg'
                            sx={{
                                position: 'absolute', bottom: '50%', top: '50%', left: '50%', marginY: 'auto'
                            }}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" style={{ position: 'absolute', top: -10, left: '69.5%' }}>
                            <circle cx="5.01484" cy="4.53193" r="4.43818" fill="#151517"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" style={{ position: 'absolute', bottom: -10, left: '69.5%' }}>
                            <circle cx="5.01484" cy="4.53193" r="4.43818" fill="#151517"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" style={{ position: 'absolute', top: -60, left: '85.5%' }}>
                            <circle cx="5.01484" cy="4.53193" r="4.43818" fill="#151517"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" style={{ position: 'absolute', bottom: -60, left: '85.5%' }}>
                            <circle cx="5.01484" cy="4.53193" r="4.43818" fill="#151517"/>
                        </svg>
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <Box position='relative' paddingY={7}>
            <Container disableGutters maxWidth='lg' sx={{ position: 'relative', paddingX: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Grid container alignItems='center' columnSpacing={{ md: 4, lg: 8, xl: 12 }} rowGap={2}>
                    <Grid item xs={12} md={6} display='flex' flexDirection='column' gap={6}>
                        <Box component='img' alt='ellipse' src='/home/ellipse3.svg'
                            width='fit-content'
                            sx={{ transform: 'scaleX(-1)' }}
                        />
                        <Stack gap={3} >
                            <Typography variant='h3' fontWeight={600} color='primary.main'>What do we do?</Typography>
                            {/* <Typography variant='h5' fontWeight={500} color='primary.main'>Endorsements on All Career Levels</Typography> */}
                            <Typography component='div' lineHeight='35px' color='#000n' textAlign='justify'>
                                We empower Egyptian and Arab manufacturers to revolutionize the manufacturing industry in the Middle East and prosper our economies and communities by training and educating individuals and entities on the world’s top manufacturing technologies.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center' position='relative'>
                        <Image
                            src='/about/mission.jpg' alt='mission'
                            width={470} height={470}
                            style={{
                                objectFit: 'cover', zIndex: 1,
                                width: '100%', height: 'auto',
                            }}
                        />
                    </Grid>
                </Grid>
                <Box component='img' alt='ellipse' src='/home/ellipse3.svg'
                    width='fit-content'
                    sx={{ transform: 'scaleX(-1)' }}
                />
                <Grid container alignItems='center' columnSpacing={{ md: 4, lg: 8, xl: 12 }} rowGap={2}>
                    <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center' position='relative'>
                        <Image
                            src='/about/vision.jpg' alt='vision'
                            width={470} height={470}
                            style={{
                                objectFit: 'cover', zIndex: 1,
                                width: '100%', height: 'auto',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' flexDirection='column' gap={6}>
                        <Stack gap={3} >
                            <Typography variant='h3' fontWeight={600} color='primary.main'>How do we do it?</Typography>
                            {/* <Typography variant='h5' fontWeight={500} color='primary.main'>A lifelong Fellow in Your Career Journey</Typography> */}
                            <Typography component='div' lineHeight='35px' color='#000n' textAlign='justify'>
                                By having skilled and experienced mentors to train and guide our candidates on the world’s latest manufacturing technologies through providing customized and condensed training tracks in different manufacturing fields like:
                                <ol>
                                    <Typography component='li' variant='inherit'>CAD & Reverse Engineering</Typography>
                                    <Typography component='li' variant='inherit'>Additive Manufacturing (3D Printing)</Typography>
                                    <Typography component='li' variant='inherit'>Simulation (FEA & CFD)</Typography>
                                    <Typography component='li' variant='inherit'>CAM & CNC Manufacturing Fundamentals</Typography>
                                    <Typography component='li' variant='inherit'>3D Scanning and Inspection</Typography>
                                </ol>
                            </Typography>
                        </Stack>
                        <Box component='img' alt='ellipse' src='/home/ellipse3.svg'
                            width='fit-content' alignSelf='flex-end'
                            sx={{ transform: 'scaleX(-1)' }}
                        />
                    </Grid>
                </Grid>
                {/* <Stack gap={3} fontFamily={fonts.poppins} alignSelf='flex-start' marginTop={{ xs: 4, md: 8, lg: 10 }}>
                    <Typography variant='h3' fontWeight={600} color='text.secondary' fontFamily='inherit'>Meet The Executives</Typography>
                    <Typography fontWeight={500} color='#676767' fontSize='18px' fontFamily='inherit'>Promech Academy Your Ultimate Accreditation Gateway</Typography>
                </Stack> */}
            </Container>

            <Box component='img' alt='ellipse' src='/about/vector.svg'
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    position: 'absolute', top: '21%', right: 0, zIndex: 1
                }}
            />
            <Box component='img' alt='ellipse' src='/about/vector.svg'
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    position: 'absolute', bottom: '21%', left: 0, zIndex: 1
                }}
            />
        </Box>

        {/* <Box position='relative' minHeight={500} maxHeight={840} overflow='hidden'>
            <Executives executives={executives} />
            <Stack direction='row' flexWrap='wrap' 
                sx={{ background: '#00000070', filter: 'blur(6px)' }}
            >
                {executives.map(team =>
                    <Image
                        key={team.imgSrc} src={team.imgSrc}
                        alt={team.name} 
                        width={222} height={280}
                        style={{ objectFit: 'cover' }}
                    />
                )}
            </Stack>
        </Box> */}

        </>
    )
}

export default AboutPage;