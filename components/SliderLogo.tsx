"use client"
import React ,{useState,useEffect} from 'react';
// @ts-ignore
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image';
import { Avatar, Box, Button, Container, Divider, Grid, Icon, Stack, Typography } from '@mui/material';

import axios from 'axios';

interface Logo {
  id: number;
  attributes: {
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
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

interface ApiResponse {
  data: Logo[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
const SliderLogo: React.FC = () => {


    const [logos, setLogos] = useState<Logo[]>([]);

    useEffect(() => {
      const fetchLogos = async () => {
        try {
          const response = await axios.get<ApiResponse>('http://promech-backend.addictaco.com/api/logos/?populate=logo');
          setLogos(response?.data?.data);
          console.log(response.data.data)
        } catch (error) {
          console.error('Error fetching logos:', error);
        }
      };
  
      fetchLogos();
    }, []);

    return (
        <Box width="100%"
        mt={"25px"}
        >
        <Slider
         
         slideContainerStyle={{ width: '100%' }}
            duration={5}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >

{logos && logos.map((el) => (
  <Slider.Slide key={el?.id}>
    <img
      src={`http://promech-backend.addictaco.com${el?.attributes?.logo?.data?.attributes?.url ?? ''}`}
      alt={el?.attributes?.logo?.data?.attributes?.alternativeText ?? ''}
      style={{ width: '100%', padding: '25px' }}
    />
    {/* <p>{el.attributes.text}</p> */}
  </Slider.Slide>
))}


          
        </Slider>
        </Box>
    )
}              

export default SliderLogo

