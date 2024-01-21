import React from 'react';
import { Container, Grid,Alert ,Stack} from '@mui/material';
import BlogCard from '@/components/BlogCard';

 const Blogs = async () => {
    const blogs = [
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
        },
        {
            id: '3',
            imgSrc: '/blogs/3.jpg',
            title: 'How to Learn More',
            date: 'Dec 27, 2018',
            min: 9
        },
        {
            id: '4',
            imgSrc: '/blogs/4.jpg',
            title: 'Being Human',
            date: 'Dec 27, 2018',
            min: 9
        },
        {
            id: '5',
            imgSrc: '/blogs/5.jpg',
            title: 'What’s really floating out in space?',
            date: 'Dec 27, 2018',
            min: 9
        },
        {
            id: '6',
            imgSrc: '/blogs/6.jpg',
            title: 'Are we alone in the universe?',
            date: 'Dec 27, 2018',
            min: 9
        },
    ]



    // const response = await fetch(`http://promech-backend.addictaco.com///api/courses/${params.courseId}/?populate=imgSrc&populate=chapters&populate=chapters.lessons&populate=userimage`,{

    // next:{
    //     revalidate: 60
    // }
    // });
    // const data = await response.json()
    // const dataapi=  await data?.data?.attributes

    const response = await fetch(`http://promech-backend.addictaco.com//api/blogs/?populate=thubnail&populate=images`
    ,{

    next:{
        revalidate: 0
    }
    });
    const data = await response.json()
    const dataapi=  await data?.data


    return (
        <Container disableGutters maxWidth='xl'>
            <Grid container columns={2} columnSpacing={4} rowGap={4}>
            {dataapi
          ? dataapi.map((blog: any) => (
              <Grid key={blog.id} item xs={2} md={1}>
                <BlogCard blog={blog} />
              </Grid>
            ))
          
          : 
          <Grid container columns={2} columnSpacing={4} rowGap={4}>

          <Stack sx={{ width: '100%' }} spacing={2}>

          <Alert  severity="info">   this is no courses added!</Alert>
          </Stack>
            </Grid>

      }
            </Grid>
        </Container>
    )
}

export default Blogs;