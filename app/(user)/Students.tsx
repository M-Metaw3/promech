'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box, Grid, Stack, Typography } from '@mui/material';

const Students = () => {
    const students = [
		{
			name: 'Omar Majed',
			jobTitle: 'Organizational Dev. & Rewards Manager',
			imgSrc: '/home/temp/student1.jpg'
		},
		{
			name: 'Salman Zayan',
			jobTitle: 'Business Developer Manager',
			imgSrc: '/home/temp/student2.jpg'
		},
		{
			name: 'Noman Kazi',
			jobTitle: 'Solution Manager',
			imgSrc: '/home/temp/student3.jpg'
		},
		{
			name: 'Ahmed Majed',
			jobTitle: 'Organizational Dev. & Rewards Manager',
			imgSrc: '/home/temp/student1.jpg'
		},
		{
			name: 'Omar Zayan',
			jobTitle: 'Business Developer Manager',
			imgSrc: '/home/temp/student2.jpg'
		},
		{
			name: 'Zain Kazi',
			jobTitle: 'Solution Manager',
			imgSrc: '/home/temp/student3.jpg'
		}
	];

    return (
        <Box width='100%'
            sx={{
                '& .swiper-pagination': {
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', marginTop: 5,
                    '& .swiper-pagination-bullet': {
                        background: 'transparent', width: 10, height: 10,
                        border: '1px solid', borderColor: 'primary.main',
                        '&.swiper-pagination-bullet-active': {
                            bgcolor: 'primary.main', width: 14, height: 14,
                        }
                    }
                }
            }}
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                style={{
                    width: '100%'
                }}
                breakpoints={{
                    // when window width is >= 768px
                    600: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    960: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                }}
            >
                {students.map(student =>
                    <SwiperSlide key={student.name}>
                        <Stack key={student.name} height='100%' gap={1} alignItems='flex-start'>
                            <Image
                                src={student.imgSrc} alt={student.name}
                                width={420} height={240}
                                style={{ width: '100%', height: 234, objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <Typography variant='h6' fontSize='24px' fontWeight={500}>{student.name}</Typography>
                            <Typography fontSize='14px' fontWeight={600} color='primary.main'>{student.jobTitle}</Typography>
                        </Stack>
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}

export default Students;