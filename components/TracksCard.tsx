import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';

interface Track {
  id: string;
  attributes: {
    mainImgSrc: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    title: string;
    subtitle: string;
  };
}

interface MultiActionAreaCardProps {
  track: Track;
}

export default function MultiActionAreaCard({ track }: MultiActionAreaCardProps) {
  return (
    <Card sx={{display: 'flex',flexWrap: 'wrap',maxWidth: 345 }} component={Link} href={`/tracks/${track.id}`} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={track?.attributes?.mainImgSrc?.data?.attributes?.url ? `http://promech-backend.addictaco.com${track.attributes.mainImgSrc.data.attributes.url}` : ''}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {track && track.attributes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {track && track.attributes.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}