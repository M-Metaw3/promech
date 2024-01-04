// import React from 'react';
// import Image from 'next/image';
// import { Container, Grid, Typography, Link as MuiLink, Divider } from '@mui/material';
// import BlogCard from '@/components/BlogCard';

// const BlogDetails = async({params}) => {

//     console.log(params?.blogId)
//     const blog = {
//         imgSrc: '/blogs/blog.jpg',
//         id: '1',
//         title: 'How to Do Nothing',
//         date: 'Dec 27, 2018',
//         min: 9
//     };

//     const categories = [
//         {
//             name: 'Business Talks',
//             active: false
//         },
//         {
//             name: 'Mechatronics',
//             active: true
//         },
//         {
//             name: 'Webinars',
//             active: false
//         },
//         {
//             name: 'Tutorials',
//             active: false
//         },
//     ]

//     const otherBlogs = [
//         {
//             id: '1',
//             imgSrc: '/blogs/1.jpg',
//             title: 'How to Do Nothing',
//             date: 'Dec 27, 2018',
//             min: 9
//         },
//         {
//             id: '2',
//             imgSrc: '/blogs/2.jpg',
//             title: 'How Great Leaders Inspire Action ',
//             date: 'Dec 27, 2018',
//             min: 9
//         }
//     ]
    
//     const response = await fetch(`http://localhost:1337/api/blogs/${params?.blogId}?populate=images`
//     ,{

//     next:{
//         revalidate: 60
//     }
//     });
//     const data = await response.json()
//     const dataapi=  await data?.data


//     return (
//         <>
//             <Container disableGutters maxWidth='lg'>
//                 <Grid container columnSpacing={3} rowGap={3}>
//                     <Grid item xs={12} md={10} display='flex' flexDirection='column' gap={4}>
//                         <Image
//                            src={dataapi?.attributes?.images?.data[0]?.attributes?.url?`http://localhost:1337${dataapi?.attributes?.images?.data[0]?.attributes?.url}`:''}alt={blog.title}
//                             width={900} height={400}
//                             style={{
//                                 width: '100%', height: 333,
//                                 objectFit: 'cover', borderRadius: '10px 10px 0px 0px'
//                             }}
//                         />
//                         <Typography color='#575757' fontSize='18px' whiteSpace='pre-wrap' textAlign='justify'>
// {dataapi.attributes.description?dataapi.attributes?.description:"no description"}
// </Typography>
//                     </Grid>
//                     <Grid item xs={12} md={2} display='flex' flexDirection='column' gap={4}>
//                         <Typography variant='h5' fontWeight={700}>Categories</Typography>
//                         {categories.map(category =>
//                             <MuiLink key={category.name} fontSize='14px' paddingX={2}
//                                 color={category.active ? 'text.primary' : '#828282'}
//                                 fontWeight={category.active ? 500 : 400}
//                                 borderLeft={category.active ? '4px solid' : 'none'}
//                                 borderColor='primary.main' underline='hover'
//                             >{category.name}</MuiLink>
//                         )}
//                     </Grid>
//                 </Grid>
//                 <br /> <br />
//                 <Divider variant='fullWidth' sx={{ bgcolor: '#4597D1', borderColor: '#4597D1' }} />
//                 <br /> <br />
//                 <Typography variant='h5' fontWeight={500}>You migh also like</Typography>
//                 <br /> <br />
//                 <Grid container columns={2} columnSpacing={4} rowGap={4}>
//                     {otherBlogs.map(blog =>
//                         <Grid key={blog.id} item xs={2} md={1}>
//                             <BlogCard blog={blog} />
//                         </Grid>
//                     )}
//                 </Grid>
//             </Container>
//             <br /> <br />
//             <br /> <br />
//         </>
//     )
// }

// export default BlogDetails;

/////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Image from 'next/image';
import { Container, Grid, Typography, Link as MuiLink, Divider } from '@mui/material';
import BlogCard from '@/components/BlogCard';

const BlogDetails = async({params}: {params: {blogId?: string}}) => {
    console.log(params?.blogId)
    const blog = {
        imgSrc: '/blogs/blog.jpg',
        id: '1',
        title: 'How to Do Nothing',
        date: 'Dec 27, 2018',
        min: 9
    };
    const categories = [
        {
            name: 'Business Talks',
            active: false
        },
        {
            name: 'Mechatronics',
            active: true
        },
        {
            name: 'Webinars',
            active: false
        },
        {
            name: 'Tutorials',
            active: false
        },
    ]
    const otherBlogs = [
        {
            id: '1',
            imgSrc: '/blogs/1.jpg',
            title: 'How to Do Nothing',
            date: 'Dec 27, 2018',
            min: 9
        },
        {
            id: '2',
            imgSrc: '/blogs/2.jpg',
            title: 'How Great Leaders Inspire Action ',
            date: 'Dec 27, 2018',
            min: 9
        }
    ]
    const response = await fetch(`http://localhost:1337/api/blogs/${params?.blogId}?populate=images`
    ,{
    next:{
        revalidate: 60
    }
    });
    const data = await response.json()
    const dataapi=  await data?.data
    return (
        <>
            <Container disableGutters maxWidth='lg'>
                <Grid container columnSpacing={3} rowGap={3}>
                    <Grid item xs={12} md={10} display='flex' flexDirection='column' gap={4}>
                        <Image
                           src={dataapi?.attributes?.images?.data[0]?.attributes?.url?`http://localhost:1337${dataapi?.attributes?.images?.data[0]?.attributes?.url}`:''}alt={blog.title}
                            width={900} height={400}
                            style={{
                                width: '100%', height: 333,
                                objectFit: 'cover', borderRadius: '10px 10px 0px 0px'
                            }}
                        />
                        <Typography color='#575757' fontSize='18px' whiteSpace='pre-wrap' textAlign='justify'>
                            {dataapi.attributes.description?dataapi.attributes?.description:"no description"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display='flex' flexDirection='column' gap={4}>
                        <Typography variant='h5' fontWeight={700}>Categories</Typography>
                        {categories.map(category =>
                            <MuiLink key={category.name} fontSize='14px' paddingX={2}
                                color={category.active ? 'text.primary' : '#828282'}
                                fontWeight={category.active ? 500 : 400}
                                borderLeft={category.active ? '4px solid' : 'none'}
                                borderColor='primary.main' underline='hover'
                            >{category.name}</MuiLink>
                        )}
                    </Grid>
                </Grid>
                <br /> <br />
                <Divider variant='fullWidth' sx={{ bgcolor: '#4597D1', borderColor: '#4597D1' }} />
                <br /> <br />
                <Typography variant='h5' fontWeight={500}>You migh also like</Typography>
                <br /> <br />
                <Grid container columns={2} columnSpacing={4} rowGap={4}>
                    {otherBlogs.map(blog =>
                        <Grid key={blog.id} item xs={2} md={1}>
                            <BlogCard blog={blog} />
                        </Grid>
                    )}
                </Grid>
            </Container>
            <br /> <br />
            <br /> <br />
        </>
    )
}

export default BlogDetails;


