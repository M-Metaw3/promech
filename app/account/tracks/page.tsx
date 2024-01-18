
"use client"
import React ,{useEffect ,useState } from 'react';
import CardTracks from '@/components/TracksCard';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';



const MyComponent =  () => {
  const [tracks, settracks] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(
        `http://localhost:1337/api/tracks/?populate=mainImgSrc`
      );
      const datares = await response.json();
      console.log(datares?.data)
      settracks(datares?.data)
    };
    fetchData();
  }, []);



  return (
<Grid  container spacing={5}>
 {
tracks?.map((el)=>(

  <Grid  key={el.id}  item xs={4}>
  <CardTracks track={el}/>
  </Grid>

  ))


}     

    </Grid>
  );
};

export default MyComponent;
