'use client';

import React, { ReactNode, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Box, Breadcrumbs, Container, Link as MuiLink, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { userHeaderHeight } from '@/components/ThemeRegistry/variables';
import PublicPageHeader from '@/components/PublicPageHeader';

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const data = useMemo(() => {
        switch(pathname) {
            case '/contact' :
                return {
                    name: 'Contact',
                    title: 'Visit Promech'
                };
            case '/about' :
                return {
                    name: 'About',
                    title: 'About Promech Academy'
                };
            case '/career' :
                return {
                    name: 'Career',
                    title: 'Come and Join Us'
                };
            case '/blogs' :
                return {
                    name: 'Blogs',
                    title: 'Promech Academy Blog'
                };
            default :
                return {
                    name: '',
                    title: ''
                };
        }
    }, [pathname]);

    return (
        <>
            <PublicPageHeader
                links={[
                    { name: 'Home', href: '/' },
                    { name: data.name },
                ]}
                title={data.title}
            />
            {children}
        </>
    )
}