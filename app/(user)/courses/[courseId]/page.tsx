
// import React from 'react';
// import CourseDetails from '@/components/CourseDetails';
// import { usePathname } from 'next/navigation';

// const CoursePage = async ({ params }: { params: { courseId: string } }) => {
//     const response = await fetch(`http://promech-backend.addictaco.comapi/courses/${params.courseId}/?populate=imgSrc&populate=chapters&populate=chapters.lessons&populate=userimage`, {
//         next: {
//             revalidate:0
//         }
//     });
//     const data = await response.json();
//     const dataapi = await data?.data?.attributes;
// console.log(dataapi)
//     const course: {
//         imgSrc: string;
//         category: {
//             title: string;
//             iconColor: string;
//         };
//         title: string;
//         user: {
//             imgSrc: string;
//             name: string;
//         };
//         chaptersCount: number;
//         daysCount: number;
//         lessonsCount: number;
//         description: string;
//         chapters: {
//             name: string;
//             lessons: {
//                 name: string;
//             }[];
//         }[];
//     } = {
//         imgSrc: '/home/temp/photo1.jpg',
//         category: {
//             title: 'CAD & Reverse Engineering',
//             iconColor: 'success.main',
//         },
//         title: 'Modelling and Reverse Engineering',
//         user: {
//             imgSrc: '/home/temp/user1.svg',
//             name: 'Eng. John Lamiee'
//         },
//         chaptersCount: 4,
//         daysCount: 5,
//         lessonsCount: 5,
//         description: `The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive.\n \n Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effort. \n \n This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!`,
//         chapters: [
//             {
//                 name: 'Intro',
//                 lessons: [
//                     {
//                         name: 'Introduction to CATIA interface'
//                     },
//                     {
//                         name: 'Sketch'
//                     },
//                     {
//                         name: 'Part Design'
//                     },
//                 ]
//             },
//             {
//                 name: 'Discovery',
//                 lessons: [
//                     {
//                         name: 'Part design (Cont.)'
//                     }
//                 ]
//             },
//             {
//                 name: 'Chapter3: Engaging',
//                 lessons: [
//                     {
//                         name: 'Assembly'
//                     },
//                     {
//                         name: 'Draft'
//                     }
//                 ]
//             },
//             {
//                 name: 'Practical',
//                 lessons: [
//                     {
//                         name: 'Surface Design'
//                     }
//                 ]
//             },
//             {
//                 name: 'Chapter5: Quiz',
//                 lessons: [
//                     {
//                         name: 'Reverse Engingeering'
//                     }
//                 ]
//             },
//         ]
//     };

//     return (
//         <CourseDetails course={dataapi} id={data?.data?.id} />
//     );
// };

// export default CoursePage;


import React, { FC } from 'react';
import CourseDetails from '@/components/CourseDetails';
import { usePathname } from 'next/navigation';

interface CoursePageProps {
    params: {
        courseId: string;
    };
}

const CoursePage: FC<CoursePageProps> = async ({ params }) => {
    const response = await fetch(`http://promech-backend.addictaco.com/api/courses/${params.courseId}/?populate=imgSrc&populate=chapters&populate=chapters.lessons&populate=userimage`, {
        next: {
            revalidate:0
        }
    });
    const data = await response.json();
    const dataapi = await data?.data?.attributes;
    console.log(dataapi);

    interface Course {
        imgSrc: string;
        category: {
            title: string;
            iconColor: string;
        };
        title: string;
        user: {
            imgSrc: string;
            name: string;
        };
        chaptersCount: number;
        daysCount: number;
        lessonsCount: number;
        description: string;
        chapters: {
            name: string;
            lessons: {
                name: string;
            }[];
        }[];
    }

    const course: Course = {
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
        lessonsCount: 5,
        description: `The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive.\n \n Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effort. \n \n This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!`,
        chapters: [
            {
                name: 'Intro',
                lessons: [
                    {
                        name: 'Introduction to CATIA interface'
                    },
                    {
                        name: 'Sketch'
                    },
                    {
                        name: 'Part Design'
                    },
                ]
            },
            {
                name: 'Discovery',
                lessons: [
                    {
                        name: 'Part design (Cont.)'
                    }
                ]
            },
            {
                name: 'Chapter3: Engaging',
                lessons: [
                    {
                        name: 'Assembly'
                    },
                    {
                        name: 'Draft'
                    }
                ]
            },
            {
                name: 'Practical',
                lessons: [
                    {
                        name: 'Surface Design'
                    }
                ]
            },
            {
                name: 'Chapter5: Quiz',
                lessons: [
                    {
                        name: 'Reverse Engingeering'
                    }
                ]
            },
        ]
    };

    return (
        <CourseDetails course={dataapi} id={data?.data?.id} />
    );
};

export default CoursePage;