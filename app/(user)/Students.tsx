'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';
interface ApiResponse {
    data: Instructor[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  interface Instructor {
    id: number;
    attributes: {
      name: string;
      jobTitle: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      displaying: boolean;
      imgSrc: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
              thumbnail: ImageFormat;
              large: ImageFormat;
              medium: ImageFormat;
              small: ImageFormat;
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: any;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
    };
  }
  
  interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
  }
  

  const fetchData = async (): Promise<Instructor[]> => {
    try {
      const response = await axios.get<ApiResponse>('http://promech-backend.addictaco.com/api/outistructors/?populate=imgSrc&filters[displaying]=true');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
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
    const [instructors, setInstructors] = useState<Instructor[]>([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetchData();
        console.log(data)
        setInstructors(data);
      };
  
      getData();
    }, []);
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
                {instructors&&instructors?.map(student =>
                    <SwiperSlide key={student.id}>
                        <Stack  height='100%' gap={1} alignItems='flex-start'>
                            <Image
                                src={student?.attributes&&`http://promech-backend.addictaco.com${student?.attributes?.imgSrc?.data?.attributes?.url}`} alt={student?.attributes?.name}
                                width={420} height={240}
                                style={{ width: '100%', height: 234, objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <Typography variant='h6' fontSize='24px' fontWeight={500}>{student?.attributes?.name}</Typography>
                            <Typography fontSize='14px' fontWeight={600} color='primary.main'>{student?.attributes?.jobTitle}</Typography>
                        </Stack>
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}

export default Students;