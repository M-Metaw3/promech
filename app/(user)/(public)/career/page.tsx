import React from 'react';
import Image from 'next/image';
import { Container, Stack, Typography } from '@mui/material';
import JoinForm from './JoinForm';

const ContactPage = () => {
    return (
        <Container disableGutters maxWidth='lg'>
            <Stack borderRadius='10px' overflow='hidden'>
                <Image
                    src='/career.jpg' alt='Join us'
                    width={1000} height={333}
                    style={{
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Stack gap={4} alignItems='center' textAlign='center' bgcolor='#F8FBFF'  paddingY={4} paddingX={{ xs: 1, sm:3 , md: 6 }}>
                    <Typography color='#676767' lineHeight='32px' fontSize='19px'>
                        Well since I'm on a role, guess I'll make another thread. I was back to my deck making antics which always end up in failure. For the third time, I was trying to build a deck around Recoup, Burning Wish, and Ruby Medallion. However, just like last time, I realized there aren't ANY good red sorcery targets with the sole exception of Void which is marginal at best. However, browsing through sorceries.
                    </Typography>
                    <Typography variant='h4' color='#151517' fontSize='34px' fontWeight={500}>
                        Become one of Promech Team
                    </Typography>
                    <JoinForm />
                </Stack>
            </Stack>
            
            <br/><br/><br/>
        </Container>
    )
}

export default ContactPage;