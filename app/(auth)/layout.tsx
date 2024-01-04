import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Button, Grid, Stack, Typography } from '@mui/material';
import BackgrounImage from './BackgrounImage';

export default function UserAuthLayout({ children }: { children: ReactNode }) {
    return (
        <Grid container columns={2} height='100vh' overflow='auto' alignItems='stretch'>
            <Grid item xs={2} md={1}
                position='relative' color='#FFF' padding={10}
                display={{ xs: 'none', md: 'flex' }} flexDirection='column' justifyContent='flex-end' alignItems='flex-start' gap={4}
                sx={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)' }}
            >
                <Button variant='text' color='inherit' component={Link} href='/' sx={{ gap: 1, alignItems: 'center' }}>
                    <img src='/logo/logo-white-80×80.png' alt='Logo' width={57} height={57} />
                    <img src='/logo/promech-white-168×43.png' alt='Promech' width='auto' height={30} />
                </Button>
                <Stack gap={2} marginBottom={4}>
                    <Typography variant='h4' component='h2' fontWeight={500} maxWidth={600} lineHeight='150%'>
                        Improve your skill with Promech Academy!
                    </Typography>
                    <Typography>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
                    </Typography>
                </Stack>
                <BackgrounImage />
            </Grid>
            <Grid item xs={2} md={1} display='flex' alignItems='center' justifyContent='center'>
                {children}
            </Grid>
        </Grid>
    )
}