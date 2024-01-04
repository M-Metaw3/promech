import React from 'react';
import Image from 'next/image';
import { Container, Grid, Link as MuiLink, Stack, Typography } from '@mui/material';
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <Container disableGutters maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 1 }}>
            <Grid container alignItems='stretch' borderRadius='20px' overflow='hidden'>
                <Grid item xs={12} md={5} maxHeight={512} borderRadius={{ xs: '20px', md: 0 }} overflow='hidden'>
                    <Image
                        src='/company.jpg' alt='company'
                        width={600} height={512}
                        style={{
                            height: '100%', width: '100%', objectFit: 'cover'
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={7} bgcolor='#F3FBFB' display='flex' flexDirection='column' gap={3} justifyContent='center' padding={{ xs: 1, md: 5, lg: 7 }}>
                    <Stack gap={2}>
                        <Typography component='h2' variant='h4' fontWeight={600}>Come to our office,</Typography>
                        <Typography color='text.secondary' fontSize='18px' lineHeight='40px'>
                            93 (2nd Area, 2nd District – Fifth Settlement, New Cairo – Cairo Government – Egypt).
                        </Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' flexWrap='wrap'>
                        <Typography fontSize='18px' lineHeight='40px'>
                            New Cairo, <br />
                            Fifth Settlement <br />
                            Cairo, Egypt <br />
                        </Typography>
                        <Stack gap={1}>
                            <Typography fontSize='18px' lineHeight='40px' fontWeight={500} color='#676767'>
                                Tel: &nbsp;
                                <MuiLink underline='hover' color='inherit' fontWeight={400} component='a' href='tel:+21022844834'>+2 1022 844834</MuiLink>
                            </Typography>
                            <MuiLink color='primary.main' fontSize='20px' fontWeight={400} component='a' href='mailto:Marketing@promech-eg.com'>Marketing@promech-eg.com</MuiLink>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Stack gap={2}>
                <Typography component='h2' variant='h3' fontWeight={500}>Get Connected</Typography>
                <Typography color='#676767' lineHeight='28px' fontSize='18px'>
                    Get Intouch NOW with our team members in just ONE Working Day.  <br />
                    You can book your appointment NOW for your upcoming call or visit through:
                </Typography>
            </Stack>
            <Grid container columns={2} alignItems='stretch' columnSpacing={6} rowGap={4}>
                <Grid item xs={2} md={1}>
                    <ContactForm />
                </Grid>
                <Grid item xs={2} md={1}>
                    <iframe
                        src={`https://maps.google.com/?q=Promech&ll=30.30,30.30&z=15&output=embed`}
                        width="100%" height="100%"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.10)', borderRadius: '17px' }}
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Grid>
            </Grid>
            <br/><br/><br/>
        </Container>
    )
}

export default ContactPage;