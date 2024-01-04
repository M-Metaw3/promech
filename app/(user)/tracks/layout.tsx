import React, { ReactNode } from 'react';
import { Breadcrumbs, Container, Link as MuiLink, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { userHeaderHeight } from '@/components/ThemeRegistry/variables';

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Container disableGutters maxWidth='lg' sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', paddingY: 1, paddingX: { xs: 1, lg: 0 }, marginBottom: 6, marginTop: `${userHeaderHeight}px`, zIndex: 1 }}>
                <Breadcrumbs aria-label="breadcrumb" color='primary'
                    separator={<KeyboardArrowRightIcon color='secondary' />}
                    sx={{ fontSize: '18px', fontWeight: 500 }}
                >
                    <MuiLink underline="hover" color="inherit" href="/">
                        Home
                    </MuiLink>
                    <Typography variant='inherit'>Tracks</Typography>
                </Breadcrumbs>
            </Container>
            {children}
        </>
    )
}