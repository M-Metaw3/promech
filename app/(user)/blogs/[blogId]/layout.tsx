'use client';

import React, { ReactNode } from 'react';
import PublicPageHeader from '@/components/PublicPageHeader';

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
    const blog = {
        imgSrc: '/blogs/blog.jpg',
        id: '1',
        title: 'How to Do Nothing',
        date: 'Dec 27, 2018',
        min: 9
    };

    return (
        <>
            <PublicPageHeader
                links={[
                    { name: 'Home', href: '/' },
                    { name: 'Blogs', href: '/blogs' },
                ]}
                title={blog.title}
            />
            {children}
        </>
    )
}