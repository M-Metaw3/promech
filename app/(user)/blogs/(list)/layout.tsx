import React, { ReactNode } from 'react';
import PublicPageHeader from '@/components/PublicPageHeader';

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <PublicPageHeader
                links={[
                    { name: 'Home', href: '/' },
                    { name: 'Blogs' },
                ]}
                title='Promech Academy Blog'
            />
            {children}
        </>
    )
}