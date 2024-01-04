import React, { ReactNode } from 'react';
import PublicPageHeader from '@/components/PublicPageHeader';

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
    const course = {
        imgSrc: '/home/temp/photo1.jpg',
        category: {
            title: 'CAD & Reverse Engineering',
            iconColor: 'success.main',
        },
        title: 'Modelling and Reverse Engineering',
        user: {
            imgSrc: '/home/temp/user1.svg',
            name: 'Eng. John Lamiee'
        },
        chaptersCount: 4,
        daysCount: 5,
        // hoursCount: 107
    };

    return (
        <>
            <PublicPageHeader
                links={[
                    { name: 'Home', href: '/' },
                    { name: 'Tracks' },
                ]}
                title={course.title}
            />
            {children}
        </>
    )
}