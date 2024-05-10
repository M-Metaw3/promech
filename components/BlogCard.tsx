import React from 'react';import Link from 'next/link';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';
import moment from"moment"
type BlogProps = {
    blog: any;
}

const BlogCard = ({ blog }:BlogProps) => {

console.log(blog.attributes)


    return (
        <Stack component={Link} href={`/blogs/${blog.id}`}
            borderRadius='10px' overflow='hidden'
            sx={{
                textDecoration: 'none', transition: '0.2s',
                '&:hover': {
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    '& img': { transform: 'scale(1.02)' }
                }
            }}
        >
            <Image
                src={blog&&blog?.attributes&&blog?.attributes?.thubnail&&blog?.attributes?.thubnail?.data&&blog?.attributes?.thubnail?.data?.attributes?.url?`http://promech-backend.addictaco.com${blog?.attributes?.thubnail?.data?.attributes?.url}`:''} alt={blog?.attributes?.title}
                width={700} height={400}
                style={{
                    width: '100%', height: 377,
                    objectFit: 'cover', transition: '0.2s'
                }}
            />
            <Stack bgcolor='#F6F6F6' padding={4} gap={3}>
                <Typography variant='h5' fontSize='24px' fontWeight={600} color='text.primary'>{blog?.attributes?.title}</Typography>
                <Typography component='span' fontSize='12px' fontWeight={600} color='#676767'>
                    {blog?.attributes?.details} &nbsp; &nbsp; .  &nbsp; &nbsp;  {moment.duration(moment().diff(moment(blog?.attributes?.createdAt))).humanize()} ago
                   
                </Typography>
            </Stack>

        </Stack>
    )
}

export default BlogCard;