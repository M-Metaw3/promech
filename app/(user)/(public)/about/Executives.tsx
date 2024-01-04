'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { fonts } from '@/components/ThemeRegistry/variables';

type Props = {
    executives: {
        name: string;
        position: string;
        imgSrc: string;
    }[];
}

const Executives = ({ executives }:Props) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <Swiper
            navigation={{
                enabled: true,
                nextEl: '#nextBtn', prevEl: '#prevBtn',
            }}
            onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
            modules={[Navigation]}
            style={{
                width: '100%', height: '100%',
                position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
        >
            
            <Stack color='#FFF' direction='row' gap={2}
                zIndex={1} alignItems='center'
                position='absolute' top={{ xs: '11.5%', sm: '56%' }} left={{ xs: 8, md: '8%', lg: '12%', xl: '22%' }}
                sx={{
                    '& .swiper-button-disabled:hover': { bgcolor: 'none' },
                    '& .swiper-button-disabled .MuiSvgIcon-root, & .Mui-disabled .MuiSvgIcon-root': { fontSize: '40px', color: '#FFF' }
                }}
            >
                <IconButton id='prevBtn' size='small' disabled={activeIndex === 0}>
                    <ArrowRightAltSharpIcon color='secondary' fontSize='large' sx={{ fontSize: '60px', transform: 'scaleX(-1)' }} />
                </IconButton>
                <IconButton id='nextBtn' size='small' disabled={activeIndex === executives.length-1}>
                    <ArrowRightAltSharpIcon color='secondary' fontSize='large' sx={{ fontSize: '60px' }} />
                </IconButton>
            </Stack>
            {executives.map((executive, index) =>
                <SwiperSlide key={executive.imgSrc} style={{ display: 'flex' }}>
                    <Container disableGutters maxWidth='lg'
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: 2 }}
                    >
                        <Grid container columns={2} columnSpacing={{ sm: 0, md: 4 }} rowGap={2} alignItems='center'>
                            <Grid item xs={2} sm={1} display='flex' flexDirection='column' gap={2} color='#FFF' fontFamily={fonts.poppins}>
                                <Typography variant='h4' fontWeight={600} fontFamily='inherit'>{executive.name}</Typography>
                                <Typography fontSize='18px' fontFamily='inherit'>{executive.position}</Typography>
                                <br />
                            </Grid>
                            <Grid item xs={2} sm={1}>
                                <Image
                                    src={executive.imgSrc} alt={executive.name}
                                    width={420} height={240}
                                    style={{
                                        width: '100%', height: 'auto',
                                        maxWidth: 540, maxHeight: 682,
                                        objectFit: 'cover', borderRadius: '20px',
                                        backgroundColor: '#FFF',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Executives;