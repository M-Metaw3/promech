import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Container, Divider, Grid, Icon, Stack, Typography } from '@mui/material';

const UserFooter = () => {
    const soacialMediaLinks = [
        {
            name: 'facebook',
            href: 'https://www.facebook.com/profile.php?id=61551995132621'
        },
        {
            name: 'linkedin',
            href: 'https://www.linkedin.com/company/promech-academy'
        },
        {
            name: 'youtube',
            href: 'https://www.youtube.com'
        },
        {
            name: 'instagram',
            href: 'https://www.instagram.com'
        },
    ];

    // const academy = [
        // {
        //     name: 'All Tracks',
        //     href: 'tracks'
        // },
        // {
        //    name:  'Courses',
        //    href: 'courses'
        // },
        // {
        //     name: 'Admission',
        //     href: 'admission'
        // },
        // {
        //     name: 'How it Works',
        //     href: 'how'
        // }
    // ];

    // const company = [
        // {
        //     name: 'Who We Are',
        //     href: 'who'
        // },
        // {
        //    name:  'About Us',
        //    href: 'about'
        // },
        // {
        //     name: 'Contact Us',
        //     href: 'contact'
        // },
        // {
        //     name: 'FAQ',
        //     href: 'faq'
        // }
    // ]

    return (
        <Stack component='footer' position='relative' color='#FFF' bgcolor='primary.main' paddingY={7} paddingX={{ xs: 1, xl: 0 }} zIndex={1}>
            <Container maxWidth='lg' disableGutters sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Grid container columnSpacing={{ sm: 3, md: 3, lg: 7, xl: 9 }} rowGap={{ md: 3, lg: 7, xl: 9 }}>
                    <Grid item xs={12} sm={6} md={3} display='flex' flexDirection='column' gap={2}>
                        <Button variant='text' color='inherit' component={Link} href='/' sx={{ alignItems: 'center', width: 'fit-content', marginInlineStart: '-34px' }}>
                            <img src='/logo/logo-white-80×80.png' alt='Logo' width='auto' height={80} />
							<img src='/logo/promech-white-168×43.png' alt='Promech' width='auto' height={42} />
                        </Button>
                        <Typography fontSize='16px' textAlign='justify'>
                            Promech Academy provides opportunities for individuals, startups, small and medium-sized companies to learn and develop concepts, skills, and applications related to Industry 4.0 technologies.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2.5} lg={2} display='flex' flexDirection='column' gap={1.5} marginTop='30px'>
                        {/* <Typography fontSize='18px' fontWeight='bold'>Academy</Typography> */}
                        {/* {academy.map(link =>
                            <Button key={link.name} variant='text' color='inherit' size='large'
                                component='a' href={link.href}
                                sx={{ fontSize: '18px', justifyContent: 'flex-start', paddingInlineStart: 0 }}
                            >{link.name}</Button>
                        )} */}
                    </Grid>
                    <Grid item xs={6} sm={6} md={2.5} lg={2} display='flex' flexDirection='column' gap={1.5} marginTop='30px'>
                        {/* <Typography fontSize='18px' fontWeight='bold'>Company</Typography> */}
                        {/* {company.map(link =>
                            <Button key={link.name} variant='text' color='inherit' size='large'
                                component='a' href={link.href}
                                sx={{ fontSize: '18px', justifyContent: 'flex-start', paddingInlineStart: 0 }}
                            >{link.name}</Button>
                        )} */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} component='ul' display='flex' flexDirection='column' gap={2} marginTop='30px'>
                        <Typography fontSize='18px' fontWeight='bold'>Follow us on</Typography>
                        <Stack direction='row' gap={{ xs: 1, lg: 2.5 }}>
                            {soacialMediaLinks.map(link =>
                                <Button key={link.name}
                                    variant='contained' color='inherit'
                                    component='a' href={link.href} target='_blank'
                                    sx={{
                                        width: 50, height: 50, padding: 0,
                                        color: 'primary.main', bgcolor: '#EAEAEA',
                                        borderRadius: '50%',
                                        '&:hover': { color: 'secondary.main' }
                                    }}
                                >
                                    <img src={`/contact/${link.name}.svg`} alt={link.name} />
                                </Button>
                            )}
                        </Stack>
                        <Stack>
                            <Stack direction='row'>
                                <img src='/contact/mail.svg' alt='mail' />
                                <Button variant='text' color='inherit' size='large' component='a' href='mailto:Marketing@promech-eg.com' sx={{ fontSize: '16px', fontWeight: 400 }}>Marketing@promech-eg.com</Button>
                            </Stack>
                            <Stack direction='row'>
                                <img src='/contact/phone.svg' alt='phone' />
                                <Button variant='text' color='inherit' size='large' component='a' href='tel:+201022844834' sx={{ fontSize: '16px', fontWeight: 400 }}>+2 01022844834</Button>
                            </Stack>
                        </Stack>
                        <Divider sx={{ bgcolor: '#FFF' }} />
                        <Typography fontSize='16px'>
                            All rights reserved 2023 © PROMECHACADEMY
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}

export default UserFooter;