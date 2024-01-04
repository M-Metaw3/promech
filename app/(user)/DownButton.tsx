'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

const DownButton = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight-250, behavior: 'smooth' })
	};

    return (
        <Button variant='text' color='inherit'
            onClick={scrollDown}
            sx={{ flexDirection: 'column', gap: 1, textTransform: 'uppercase', fontWeight: 300, zIndex: 1 }}
        >
            <Image alt='scroll' src='/home/switch.gif' width={25} height={40} style={{ objectFit: 'contain', height: 40, width: 'auto' }} />
            Scroll Down
        </Button>
    )
}

export default DownButton;