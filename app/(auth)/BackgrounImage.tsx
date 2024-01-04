'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const BackgrounImage = () => {
    const pathname = usePathname();

    return (
        <Image
            src={pathname==='/login' ? '/auth/bitmap.jpg' : '/auth/signup.jpg'} alt='auth'
            width={750} height={900}
            style={{
                position: 'absolute', top: 0, left: 0, zIndex: -1,
                maxHeight: '100vh', height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top'
            }}
        />
    )
}

export default BackgrounImage;