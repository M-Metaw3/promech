"usestate"
import React, { FC, useEffect, useState } from 'react';
import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
  import Typography from '@mui/material/Typography';
  
  import { Box, Container } from '@mui/material';
  
  interface CircularProgressWithLabelProps extends CircularProgressProps {
    value: number;
  }
  
  const CircularProgressWithLabel: FC<CircularProgressWithLabelProps> = (
    props
  ) => {
    return (
      <Box sx={{  position: 'relative',display: 'inline-flex' }}>
        <CircularProgress
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
          size={150}
          variant="determinate"
          {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            fontSize="25px"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  };
  
  interface CircularWithValueLabelProps {
    values: any;
  }
  
  const CircularWithValueLabel: FC<CircularWithValueLabelProps> = ({
    values,
  }) => {
    const [progress, setProgress] = useState<number>(10);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          return newProgress >= 90 ? 90 : newProgress;
        });
      }, 300);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      
        <CircularProgressWithLabel value={values * 100} />
      
    );
  };
  
  export default CircularWithValueLabel;