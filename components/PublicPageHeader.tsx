import React from 'react';
import { Box, Breadcrumbs, Container, Link as MuiLink, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { userHeaderHeight } from '@/components/ThemeRegistry/variables';

type HeaderProps = {
    links: {
        name: string,
        href?: string
    }[];
    title?: string;
}

const PublicPageHeader = ({ links, title }:HeaderProps) => {
    return (
        <Box bgcolor='primary.main' color='#E6E6E6' height={150} marginBottom={6} marginTop={`${userHeaderHeight}px`} zIndex={1} sx={{ borderBottomRightRadius: '100px' }}>
            <Container disableGutters maxWidth='lg' sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', padding: 1 }}>
                <Breadcrumbs aria-label="breadcrumb" color='inherit'
                    separator={<KeyboardArrowRightIcon color='secondary' />}
                >
                    {links.map(link =>
                        link.href
                            ? <MuiLink key={link.name} underline="hover" color="inherit" href={link.href}>
                                {link.name}
                            </MuiLink>
                            : <Typography key={link.name} color="inherit">{link.name}</Typography>
                    )}
                </Breadcrumbs>
                <Typography component='h1' variant='h4' fontSize={{ xs: '30px', md: '38px'}} fontWeight={500} id='BreadcrumbTitle'>{title}</Typography>
            </Container>
        </Box>
    )
}

export default PublicPageHeader;