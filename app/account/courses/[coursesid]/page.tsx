

"use client"
// import React ,{useState,useEffect} from 'react';
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import LinearProgress from "@mui/material/LinearProgress";

// import {
//     Avatar,
   
//     Button,
//     Container,
//     Divider,
//     Grid,
//     Stack,

//     Fragment,
//     Typography,
//   } from '@mui/material';
// //   import TabPanel from '@mui/lab/TabPanel';
  import { useRouter } from 'next/navigation';
//   import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Listcourses from '../../../../components/Listcourses';


  
//   import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
//   import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
// import { setAuthTokenCookie, getAuthTokenCookie } from "../../../../utils/auth";
 
 
//   import axios from 'axios';
//   import { ToastContainer, toast } from 'react-toastify';

// const tracks = ({params}) => {
//     console.log(params.coursesid)
//   const [course, setcourse] = React.useState([]);

 
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };
//   const handleUploadClick = () => {
//     setIsUploading(true);
//     setUploadProgress(0);

//     // Simulating file upload progress
//     const interval = setInterval(() => {
//       setUploadProgress((prevProgress) => {
//         const newProgress = prevProgress + 10;
//         if (newProgress === 100) {
//           clearInterval(interval);
//           setIsUploading(false);
//         }
//         return newProgress;
//       });
//     }, 500);
//   };

  
  
//   // const [uploadProgress, setUploadProgress] = useState<number>(0);

//   const handleSubmit = async (id) => {
//     const tokenString = getAuthTokenCookie();

//     try {
//       if (!tokenString) {
//         toast.error("You must log in to take this service");
//         push("/login");
//         return;
//       }

//       let token;
//       try {
//         token = JSON.parse(tokenString);
//         console.log(token)
//       } catch (error) {
//         toast.error("You must log in to take this service");
//         push("/login");
//         return;
//       }
//       const user =token.user.id
//       try {
//         // Step 1: Post data to the taskanswers API
//         const taskanswerResponse = await axios.post('http://promech-backend.addictaco.com/api/taskanswers', {
//           data: {
//             task: id,
//             users_permissions_user: user, // Make sure to define 'user' appropriately
//           },
//         });

//         const taskanswerData = taskanswerResponse;
// console.log(taskanswerData?.data?.data?.id)
//         if (taskanswerResponse.status === 200 ) {
//           // Step 2: If posting to taskanswers API is successful, upload the file to the upload API
//           if (selectedFile) {
//             const formDataUpload = new FormData();
//             formDataUpload.append('ref', 'api::taskanswer.taskanswer');
//             formDataUpload.append('refId', taskanswerData?.data?.data?.id);
//             formDataUpload.append('field', 'answerfile');
//             formDataUpload.append('files', selectedFile);

//             const uploadResponse = await axios.post('http://promech-backend.addictaco.com/api/upload', formDataUpload, {
//               onUploadProgress: (progressEvent) => {
//                 const progress = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
//                 setUploadProgress(progress);
//               },
//             });

//             const uploadData = uploadResponse.data;
//             console.log('Upload API response:', uploadData);

//             setSelectedFile(null);

//             // Perform any additional actions or show a success message
//           } else {
//             // Handle the case where uploading file is not required or not available
//             console.error('Error: File upload is required but formData.resume or selectedFile is missing.');
//           }
//         } else {
//           // Handle the case where posting to the taskanswers API was not successful
//           console.error('Error posting data to the taskanswers API:', taskanswerData);
//         }
//       } catch (error) {
//         console.error('Error submitting data:', error);
//       } finally {
//         setUploadProgress(0);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }}
  


//     const lessons =
//     course?.attributes?.chapters?.data.reduce(
//       (totalLessons: number, chapter: any) =>
//         totalLessons + (chapter?.attributes?.lessons?.data?.length || 0),
//       0
//     ) || 0;
    
//    React.useEffect(() => {
//         const fetchData = async () => {
//                 const response = await fetch(`
//                 http://promech-backend.addictaco.com/api/courses/${params.coursesid}/?populate=imgSrc&populate=chapters&populate=chapters.lessons&populate=userimage
//             `);
//                 const datares = await response.json()
//     const coursee = await datares?.data;
    
    
//     setcourse(coursee)
// }
// fetchData();
// }, []);



//       const [value, setValue] = React.useState('1');

//       const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//         setValue(newValue);
//       };

//       const { push } = useRouter();
//       const handelerattendanc = async (id, i, o) => {
//         console.log(id);
//         console.log(i);
//         console.log(o);
      
//         const tokenString = getAuthTokenCookie();

    
//         try {
//           if (!tokenString) {
//             toast.error("You must login to take this service");
//             push("/login");
//             return;
//           }
      
//           let token;
//           try {
//             token = JSON.parse(tokenString);
//           } catch (error) {
//             toast.error("You must login to take this service");
//             push("/login");
//             return;
//           }
          
//           const primarykey=`${i}${o}${id}`
   
//           if (token && token.jwt && token.user && token.user.id) {
//             const course = id;
//             const user = token.user.id;
      
//             console.log(token.user.id);
//             console.log(id);
//             const response = await axios.post(
//               "http://promech-backend.addictaco.com/api/attendaces",
//               {
//                 data: {
//                   user: token.user.id,
//                   course: i,
//                   lesson: id,
//                   chapter: o,
//                   primarykey

//                 },
//               }
//               // {
//               //   headers: {
//               //     Authorization: `Bearer ${token.jwt}`,
//               //   },
//               // }
//             );
      
        
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       };





//       const [isattend, setisattend] = useState([]);

//       useEffect(() => {
//         const fetchData = async () => {
//             const tokenString = getAuthTokenCookie();
  
//             const parsetoken = tokenString && JSON.parse(tokenString)
           
      
//        console.log(parsetoken?.user?.id)
//             if (!tokenString) {
//                 toast.error('You must login to take this service');
//                 push('/login')
//                 return;
//             } else {
      
      
              
//                 const response = await fetch(`
      
//                 http://promech-backend.addictaco.com/api/attendaces/?populate[user][populate]=true&filters[user]=${parsetoken?.user?.id}&filters[attended]=true&[populate][lesson]=true
//                 `);
//                 const datares = await response.json()
//                 setisattend(datares)
//                 console.log(datares.data)
//             }
//         }
//         fetchData();
//       }, []);


//       const [tasks, settasks] = useState([]);

//       useEffect(() => {
//         const fetchData = async () => {
//             const tokenString = getAuthTokenCookie();
  
//             const parsetoken = tokenString && JSON.parse(tokenString)
           
      
//        console.log(parsetoken?.user?.id)
//             if (!tokenString) {
//                 toast.error('You must login to take this service');
//                 push('/login')
//                 return;
//             } else {
      
      
              
//                 const response = await fetch(`
//                 http://promech-backend.addictaco.com/api/tasks/?[populate][chapter][populate][courses]=true&filters[chapter][courses]=${params.coursesid}&[populate][file]=true
          
//                 `);
//                 const datares = await response.json()
//                 settasks(datares.data)
//                 console.log(datares.data)
//             }
//         }
//         fetchData();
//       }, []);


// console.log(tasks)

//       function doesLessonExist(lessonId) {
       
//         // Check if the lessonId exists in the first JSON
//         const lessonInJson1 = course?.attributes?.chapters?.data?.some(chapter => {
//           return chapter?.attributes?.lessons?.data?.some(lesson => lesson?.id === lessonId);
//         });
      
//         // Check if the lessonId exists in the second JSON
//         const lessonInJson2 = isattend?.data?.some(lesson =>lesson?.attributes?.lesson?.data?.id  === lessonId);
      
//         // Return true if the lesson exists in both JSONs
//         return lessonInJson1 && lessonInJson2;
//       }
//       // console.log(doesLessonExist(3))
//       // console.log(isattend)



//   const handleUpload = (taskId) => {
//     // Handle upload logic for the specific task
//     console.log("Upload to Task:", taskId);
//   };
      


   
//     return (
//         <>
//         <Container disableGutters maxWidth="lg">
//           <Grid container columns={3} columnSpacing={5} rowGap={3}>
//             <Grid item xs={3} md={2} display='flex' flexDirection='column' gap='30px'>
//               <Box component='iframe' border='none'
//                 borderRadius='10px 10px 0px 0px'
//                 width="100%" height={500} src={`https://www.youtube.com/embed/O8mdH2M7MKU`}
//               />
//               <Stack gap='20px'>
//                 <Typography variant='h4' fontWeight={700}>{course?.title}</Typography>
//                 <Stack direction='row' gap={2} alignItems='center'>
//                   <Avatar
//                     src={
//                       course?.attributes?.userimage?.data &&
//                       course?.attributes?.userimage.data?.attributes.url
//                         ? `http://promech-backend.addictaco.com${course.attributes?.userimage.data?.attributes.url}`
//                         : ""
//                     }
//                     alt={course?.user?.name}
//                     sx={{ width: 30, height: 30 }}
//                   />
//                   <Typography variant='body2'>{course?.attributes?.user}</Typography>
//                   <Divider orientation="vertical" variant="middle" flexItem />
//                   <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
//                     <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
//                     <Typography variant='inherit' component='span' fontWeight={700}>{course?.attributes?.chapters?.data?.length}</Typography> Chapters
//                   </Typography>
//                   <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
//                     <NoteOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4', transform: 'rotate(-90deg)' }} />
//                     <Typography variant='inherit' component='span' fontWeight={700}>{lessons}</Typography> Lessons
//                   </Typography>
//                 </Stack>
//               </Stack>
//               <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="attendance" value="2" />
//             <Tab label="tasks" value="3" />
//             <Tab label="Files&Documents" value="4" />
//             <Tab label="Rate" value="5" />


//           </TabList>
//         </Box>
//         <TabPanel value="1">
//         <div>
//                 <Typography variant='h5' fontWeight={500} marginBottom='20px'>Description</Typography>
//                 <Typography color='#141522' whiteSpace='pre-wrap'>
//                   {course?.attributes?.description}
//                 </Typography>
//      </div>
//         </TabPanel>
//         <TabPanel value="3">
// <div>
//         {tasks.map((task) => (
//         <Card key={task.id} sx={{ marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h6">
//               Task Details: {task.attributes.details}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Created At: {task.attributes.createdAt}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Updated At: {task.attributes.updatedAt}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Published At: {task.attributes.publishedAt}
//             </Typography>
//             <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
//               Chapter Details:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Name: {task.attributes.chapter.data.attributes.name}
//             </Typography>
//             <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
//               File Details:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Name: {task.attributes.file.data.attributes.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               URL: {task.attributes.file.data.attributes.url}
//             </Typography>
//           </CardContent>
//           <div>
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//               id={`file-input-${task.id}`}
//             />
//             <label htmlFor={`file-input-${task.id}`}>
//               <Button
//                 variant="contained"
//                 component="span"
//                 color="primary"
//                 sx={{ marginBottom: 2 }}
//               >
//                 Select File
//               </Button>
//             </label>
            
//             {selectedFile && (
//               <div>
//                 <LinearProgress
//                   variant="determinate"
//                   value={uploadProgress}
//                   sx={{ marginBottom: 2 }}
//                 />
//                 {isUploading ? (
//                   <Typography variant="body2">
//                     Uploading: {uploadProgress}%
//                   </Typography>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={()=>handleSubmit(task.id)}
//                     sx={{ marginBottom: 2 }}
//                   >
//                     Submit
//                   </Button>
//                 )}
//               </div>
//             )}
//           </div>
//         </Card>
//       ))}
//     </div>


//         </TabPanel>
//         {/* <TabPanel value="3"><>
        
//         {course?.chapters?.data.map((el)=>(

// <h1>{el.attributes.name}</h1>

//         ))}
        
//         </> </TabPanel> */}
//             <TabPanel value="2">
//       {course?.attributes?.chapters?.data.map((chapter,i) => (
//         <div key={chapter.id}>
           
//           <Typography variant="h6">
//           <Typography variant="h5">
//            {i+1}
//           </Typography>
//             {chapter.attributes.name || "Chapter Name Not Available"}
//           </Typography>
//           {/* <Typography>
//             Created At: {chapter.attributes.createdAt || "Not Available"}
//           </Typography>
//           <Typography>
//             Updated At: {chapter.attributes.updatedAt || "Not Available"}
//           </Typography>
//           <Typography>
//             Published At: {chapter.attributes.publishedAt || "Not Available"}
//           </Typography> */}
//               <Typography>
//             Published At: {chapter.attributes.publishedAt || "Not Available"}
//           </Typography>

//           {chapter.attributes.lessons?.data.map((lesson) => (
//             <div key={lesson.id}>
//               <Typography variant="h6">
//                 {lesson?.attributes?.name || "Lesson Name Not Available"}
//               </Typography>

//               {doesLessonExist(lesson.id)&&doesLessonExist(lesson.id)?<Button variant="contained" disabled color='success'>attended</Button>:  <Button onClick={()=>handelerattendanc(lesson?.id,course?.id,chapter.id)}  variant="contained">attended</Button> } 
           
//               {/* <Typography>
//                 Lesson Created At: {lesson.attributes.createdAt || "Not Available"}
//               </Typography>
//               <Typography>
//                 Lesson Updated At: {lesson.attributes.updatedAt || "Not Available"}
//               </Typography>
//               <Typography>
//                 Lesson Published At: {lesson.attributes.publishedAt || "Not Available"}
//               </Typography> */}
//               {/* Add any other information you want to display for each lesson */}
//             </div>
//           ))}
//         </div>
//       ))}
//     </TabPanel>
//         <TabPanel value="4">Item Three</TabPanel>
//         <TabPanel value="5">Course </TabPanel>
//       </TabContext>
//     </Box>
          
        
//             </Grid>
//             <Grid item xs={3} md={1}>
//               <Stack gap='30px' border='1px solid #DCDCDC' borderRadius={4} padding='30px' bgcolor='#FBFBFB' alignItems='center'>
//                 <Typography variant='h6' fontSize='18px' color='primary.main' fontWeight={700}>Course Chapters</Typography>
//                 {/* {course?.chapters?.data?.map((chapter: any, i: number) =>
//                   <Fragment key={i}>
//                     <Typography fontSize='16px' fontWeight={700}>{`${chapter.attributes.name}`}</Typography>
//                     {chapter?.attributes?.lessons?.data?.map((lesson: any, j: number) =>
//                       <Typography key={j} fontSize='14px' fontWeight={500} alignSelf='flex-start' display='flex' alignItems='center' gap='20px'>
//                         <Typography component='span' variant='inherit' padding='5px 10px' borderRadius={2} bgcolor='#F5F5F7'>{j + 1}</Typography>
//                         {lesson?.attributes?.name}
//                       </Typography>
//                     )}
//                   </Fragment>
//                 )} */}
//                 {/* {
//                     course.chapters.data.map((el)=>{


// <h1>{el.attributes.name}</h1>

//                     })
//                 } */}
             
//               </Stack>
//             </Grid>
//           </Grid>
//           <Box marginTop={12}>
         
//           </Box>
//           <ToastContainer />
//           <br /><br /><br />
//         </Container>
//         </>
//       );
// }

// export default tracks;









import React, { useState, useEffect,Fragment } from 'react';
import ProgressBarCourse from "@/components/ProgressBarCourse";

import Card from "@mui/material/Card";
import moment from 'moment';
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Link from 'next/link';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
 
  Typography,
} from '@mui/material';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import { styled } from '@mui/material/styles';
import { setAuthTokenCookie, getAuthTokenCookie } from "../../../../utils/auth";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { LensSharp } from '@mui/icons-material';
import MyComponent from './../../tracks/page';
interface Attendance {
  data: [
    {
      id: number;
      attributes: {
        attended: boolean;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        primarykey: string;
        user: {
          data: {
            id: number;
            attributes: {
              username: string;
              email: string;
              provider: string;
              confirmed: boolean;
              blocked: boolean;
              createdAt: string;
              updatedAt: string;
              phonenumber: string;
              accept: boolean;
              jobstatus: boolean;
              bio: string;
            };
          };
        };
        lesson: {
          data: {
            id: number;
            attributes: {
              name: string;
              createdAt: string;
              updatedAt: string;
              publishedAt: string;
            };
          };
        };
      };
    }
  ];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}



interface Course {
  id: string;
  title: string;
  attributes: {
    description: string;
    chapters: {
      data: Chapter[];
    };
    userimage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    user: string;
  };
}

interface Chapter {
  id: string;
  attributes: {
    name: string;
    lessons: {
      data: Lesson[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// interface Lesson {
//   id: string;
//   attributes: {
//     name: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//   };
// }
interface ResponseType {
  data?: Lesson[];
}
interface Lesson {
  attributes?: {
    lesson?: {
      data?: {
        id: any; // replace 'any' with the proper type for 'id'
      }
    }
  }
}
interface Task {
  id: string;
  attributes: {
    details: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    chapter: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    file: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
}

interface UserData {
  id: number;
  attributes: {
    username: string;
    email: string;
    // Other user attributes...
  };
}

interface TaskData {
  id: number;
  attributes: {
    details: string;
    // Other task attributes...
  };
}
interface TaskResponse {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    finished: boolean | null;
    users_permissions_user: {
      data: {
        id: number;
        attributes: {
          username: string;
          email: string;
          // Other user attributes...
        };
      };
    };
    task: {
      data: {
        id: number;
        attributes: {
          details: string;
          // Other task attributes...
        };
      };
    };
  };
}

interface ApiResponse {
  data: TaskResponse[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const Tracks = ({ params }: { params: { coursesid: string } }) => {
  console.log(params.coursesid)
  const [course, setcourse] = useState<any>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [value, setValue] = useState<string>('1');
  // const [isattend, setisattend] = useState<Attendance[]>([]);
  // const [isattend, setisattend] = useState<Attendance>({});
  const [isattend, setisattend] = useState<Attendance | null>(null);

  const [tasks, settasks] = useState<Task[]>([]);
  const [lessoncount, setlessoncount] = useState<any>(0);
  const [lessonattendance, setlessonattendance] = useState<any>(0);
  const [taskanswer, settaskanswer] = useState<any>([]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

    const lessons =
    course?.attributes?.chapters?.data.reduce(
      (totalLessons: number, chapter: any) =>
        totalLessons + (chapter?.attributes?.lessons?.data?.length || 0),
      0
    ) || 0;
  const handleUploadClick = () => {
    setIsUploading(true);
    setUploadProgress(0);

    // Simulating file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
          setIsUploading(false);
        }
        return newProgress;
      });
    }, 500);
  };

  const handleSubmit = async (id: string) => {
    const tokenString = getAuthTokenCookie();

    try {
      if (!tokenString) {
        toast.error("You must log in to take this service");
        push("/login");
        return;
      }

      let token;
      try {
        token = JSON.parse(tokenString);
        console.log(token)
      } catch (error) {
        toast.error("You must log in to take this service");
        push("/login");
        return;
      }
      const user = token.user.id;
      try {
        // Step 1: Post data to the taskanswers API
        const taskanswerResponse = await axios.post('http://promech-backend.addictaco.com/api/taskanswers', {
          data: {
            task: id,
            users_permissions_user: user,
            finished:isChecked,
          },
        });

        const taskanswerData = taskanswerResponse;
        console.log(taskanswerData?.data?.data?.id)

        if (taskanswerResponse.status === 200) {
        alert("thank you for solving the task")
window.location.reload();
       
          if (selectedFile) {
            const formDataUpload = new FormData();
            formDataUpload.append('ref', 'api::taskanswer.taskanswer');
            formDataUpload.append('refId', taskanswerData?.data?.data?.id);
            formDataUpload.append('field', 'answerfile');
            formDataUpload.append('files', selectedFile);

            const uploadResponse = await axios.post('http://promech-backend.addictaco.com/api/upload', formDataUpload, {
              onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
                setUploadProgress(progress);
              },
            });

            const uploadData = uploadResponse.data;
            console.log('Upload API response:', uploadData);

            setSelectedFile(null);

            // Perform any additional actions or show a success message
          } else {
            // Handle the case where uploading file is not required or not available
            console.error('Error: File upload is required but formData.resume or selectedFile is missing.');
          }
        } else {
          // Handle the case where posting to the taskanswers API was not successful
          console.error('Error posting data to the taskanswers API:', taskanswerData);
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      } finally {
        setUploadProgress(0);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const lessonData: Attendance | null = isattend;
  const { push } = useRouter();
  const handelerattendanc = async (id: string, i: string, o: string) => {
    console.log(id);
    console.log(i);
    console.log(o);

    const tokenString = getAuthTokenCookie();

    try {
      if (!tokenString) {
        toast.error("You must login to take this service");
        push("/login");
        return;
      }

      let token;
      try {
        token = JSON.parse(tokenString);
      } catch (error) {
        toast.error("You must login to take this service");
        push("/login");
        return;
      }

      const primarykey = `${i}${o}${id}`

      if (token && token.jwt && token.user && token.user.id) {
        const course = id;
        const user = token.user.id;

        console.log(token.user.id);
        console.log(id);
        const response = await axios.post(
          "http://promech-backend.addictaco.com/api/attendaces",
          {
            data: {
              user: token.user.id,
              course: i,
              lesson: id,
              chapter: o,
              primarykey

            },
          },
          {
          headers: {
                              Authorization: `Bearer ${token.jwt}`,
                            }},
       
        );
if(response.status==200){
alert("thank you for atteding the instructor will verify your attendance")
window.location.reload();
}

      }
    } catch (error) {
      console.error(error);
    }
  };

  

// console.log(isattend)
const doesLessonExist = (lessonId: string) => {
  // Check if the lessonId exists in the first JSON
  let totalLessons = 0;
  let attendedLessons = 0;
  const lessonInJson1 = course?.attributes?.chapters?.data?.some((chapter: any) => {
    totalLessons++;
    return chapter?.attributes?.lessons?.data?.some((lesson: any) => lesson?.id === lessonId);
  });

  // Check if the lessonId exists in the second JSON
  const lessonInJson2 = (isattend as any)?.data?.some(
    (lesson: Lesson) => lesson.attributes?.lesson?.data?.id === lessonId
  );
  
  const lessonIndex = (isattend as any)?.data?.findIndex(
    (lesson: Lesson) => lesson.attributes?.lesson?.data?.id === lessonId
  );
  console.log(lessonIndex)
  if (lessonInJson1 && lessonInJson2 && isattend?.data[lessonIndex]?.attributes?.attended === true) {
    
    attendedLessons++;
   
    return 1;
  }
  
  if (lessonInJson1 && lessonInJson2 && isattend?.data[lessonIndex]?.attributes?.attended === false) {
    return 2;
  }
  console.log()
  return false;
}

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`
        http://promech-backend.addictaco.com/api/courses/${params.coursesid}/?populate=imgSrc&populate=chapters&populate=chapters.lessons&populate=userimage
      `);
      const datares = await response.json()
      const coursee = await datares?.data;

      setcourse(coursee)
    }
    fetchData();
  }, []);
console.log(course?.attributes?.chapters?.data)
  useEffect(() => {
    const fetchData = async () => {
      const tokenString = getAuthTokenCookie();

      const parsetoken = tokenString && JSON.parse(tokenString)

      console.log(parsetoken?.user?.id)
      if (!tokenString) {
        toast.error('You must login to take this service');
        push('/login')
        return;
      } else {
        const response = await fetch(`
          http://promech-backend.addictaco.com/api/attendaces/?populate[user][populate]=true&filters[user]=${parsetoken?.user?.id}&[populate][lesson]=true
        `);
        const datares = await response.json()
        setisattend(datares)
        console.log(datares.data)
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const tokenString = getAuthTokenCookie();

      const parsetoken = tokenString && JSON.parse(tokenString)

      console.log(parsetoken?.user?.id)
      if (!tokenString) {
        toast.error('You must login to take this service');
        push('/login')
        return;
      } else {
        const response = await fetch(`
          http://promech-backend.addictaco.com/api/tasks/?[populate][chapter][populate][courses]=true&filters[chapter][courses]=${params.coursesid}&[populate][file]=true
        `);
        const datares = await response.json()
        settasks(datares.data)
        console.log(datares.data)
      }
    }
    fetchData();
  }, []);

  console.log(tasks)

  const handleUpload = (taskId: string) => {
    // Handle upload logic for the specific task
    console.log("Upload to Task:", taskId);
  };



  useEffect(() => {
    const fetchData = async () => {
      const tokenString = getAuthTokenCookie();

      const parsetoken = tokenString && JSON.parse(tokenString)

      console.log(parsetoken?.user?.id)
      if (!tokenString) {
        toast.error('You must login to take this service');
        push('/login')
        return;
      } else {
        const response = await fetch(`
        http://promech-backend.addictaco.com/api/taskanswers/?populate[users_permissions_user][populate]=true&filters[users_permissions_user]=${parsetoken?.user?.id}&populate[task][populate]=true
        `);
        const datares = await response.json()
       settaskanswer(datares)
        
      }
    }
    fetchData();
  }, []);

  function isTaskFinished(taskId: number): boolean | null {

    const task = taskanswer?.data?.find((item:TaskResponse) => item?.attributes?.task?.data?.id === taskId);
  console.log(task)
    if (task) {
      return task.attributes.finished;
    }
  
    return null; // Task not found
  }
 

  return (
    <>
      <Container disableGutters maxWidth="lg">
        <Grid container columns={3} columnSpacing={5} rowGap={3}>
          <Grid item xs={3} md={2} display='flex' flexDirection='column' gap='30px'>
            <Box component='iframe' border='none'
              borderRadius='10px 10px 0px 0px'
              width="100%" height={500} src={`https://www.youtube.com/embed/O8mdH2M7MKU`}
            />
            <Stack gap='20px'>
              <Typography variant='h4' fontWeight={700}>{course?.title}</Typography>
              <Stack direction='row' gap={2} alignItems='center'>
                <Avatar
                  src={
                    course?.attributes?.userimage?.data &&
                    course?.attributes?.userimage.data?.attributes.url
                      ? `http://promech-backend.addictaco.com${course.attributes?.userimage.data?.attributes.url}`
                      : ""
                  }
                  alt={course?.user?.name}
                  sx={{ width: 30, height: 30 }}
                />
                <Typography variant='body2'>{course?.attributes?.user}</Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
                  <ArticleOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4' }} />
                  <Typography variant='inherit' component='span' fontWeight={700}>{course?.attributes?.chapters?.data?.length}</Typography> Chapters
                </Typography>
                <Typography fontSize='14px' display='flex' alignItems='center' gap={0.5}>
                  <NoteOutlinedIcon fontSize='small' sx={{ fill: '#9C9CA4', transform: 'rotate(-90deg)' }} />
                  <Typography variant='inherit' component='span' fontWeight={700}>{lessons}</Typography> Lessons
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="attendance" value="2" />
                    <Tab label="tasks" value="3" />
                    <Tab label="Progress" value="4" />
                    <Tab label="Rate" value="5" />
                  </TabList>
                </Box>
                
                <TabPanel value="1">
                  <div>
                    <Typography variant='h5' fontWeight={500} marginBottom='20px'>Description</Typography>
                    <Typography color='#141522' whiteSpace='pre-wrap'>
                      {course?.attributes?.description}
                    </Typography>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div>
                    {tasks?.map((task) => (
                      
                      <Card key={task.id} sx={{ marginBottom: 2 }}>
                         <FormGroup>
                         {isTaskFinished(parseInt(task.id))?(<>
                         
                          <FormControlLabel
      control={<Checkbox disabled checked={true} onChange={handleCheckboxChange} />}
      label="submited"
    />
                         </>):(

<FormControlLabel
control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
label="Attend"
/>
                         )} 
  
                        </FormGroup>
                        <CardContent>
                          <Typography variant="h6">
                            Task Details: {task.attributes.details}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Created At: {moment(task.attributes.createdAt).fromNow()}
                          </Typography>
                    
                          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                            Chapter Details:
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Name: {task?.attributes?.chapter?.data?.attributes.name}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                            File Details:
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Name: {task?.attributes?.file?.data?.attributes?.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            
                            <Button  component={Link} href={`http://promech-backend.addictaco.com${task?.attributes?.file?.data?.attributes?.url}`} color="secondary"  startIcon={<CloudDownloadIcon />}>
                              
      Download pdf quize
      <VisuallyHiddenInput type="file" />
    </Button>
                          </Typography>
                        </CardContent>
                        <div>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            id={`file-input-${task.id}`}
                          />
<label htmlFor={`file-input-${task.id}`}>
{!isTaskFinished(parseInt(task.id))?(
  <>
    <Button
    variant="contained"
    component="span"
    color="primary"
    sx={{ marginBottom: 2 }}
    startIcon={<CloudUploadIcon />}
  >
    Select File
  </Button>
  
  </>
):''}


</label>




{isTaskFinished(parseInt(task?.id))?"":(

                          <>
 { isUploading?   ( 
 <>
 <LinearProgress
      variant="determinate"
      value={uploadProgress}
      sx={{ marginBottom: 2 }}
    />
   
      <Typography variant="body2">
        Uploading: {uploadProgress}%
      </Typography>
      </>):''}

        <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit(task.id)}
        sx={{ marginBottom: 2 }}
      >
        Submit
      </Button>
      </>         )} 




                        </div>
                      </Card>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  {course?.attributes?.chapters?.data.map((chapter:any, i:any) => (
                    <div  key={chapter.id}>
                      <div style={{display:"flex"}}>
                     
                        <Typography sx={{color:"#12595C",pading:"15px"}}  variant="h3">
                          {i + 1} :
                        </Typography >
                      <Typography variant="h3" sx={{color:"#12595C",fontWeight:"500"}}>
                        {chapter?.attributes?.name || "Chapter Name Not Available"}
                      </Typography>
                      
                      </div>
                      {chapter.attributes.lessons?.data.map((lesson: any ,i:any) => (
    <div style={{display:"flex",justifyContent:"space-between", margin:"15px"}}  key={lesson.id}>
         <Typography  sx={{color:"#28AFB0"}} variant="h5">
        {i+1} :
      </Typography>
      <Typography sx={{color:"#28AFB0"}} variant="h6">
        {lesson?.attributes?.name || "Lesson Name Not Available"}
      </Typography>

      {doesLessonExist(lesson.id) === 1 ? (
        <Button variant="contained" disabled color='success'>you attended</Button>
      ) : doesLessonExist(lesson.id) === 2 ? (
        <Button sx={{backgroundColor:'grey' }} variant="contained">pending</Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => handelerattendanc(lesson?.id, course?.id, chapter.id)}
          color='success'
        >
          attended
        </Button>
      )}
    </div>
  ))}




                    </div>
                  ))}
                </TabPanel>
                <TabPanel value="4">



{/* <ProgressBarCourse courseData={  course }  lessonData={ isattend}/> */}
<ProgressBarCourse courseData={course} lessonData={lessonData} />
{/* <ProgressBarCourse lessoncount={  lessoncount }  attendance={  lessonattendance}/> */}







                </TabPanel>
                <TabPanel value="5">Course </TabPanel>
              </TabContext>
            </Box>
          </Grid>
          <Grid item xs={3} md={1}>
            <Stack gap='30px' border='1px solid #DCDCDC' borderRadius={4} padding='30px' bgcolor='#FBFBFB' alignItems='center'>
              <Typography variant='h6' fontSize='18px' color='primary.main' fontWeight={700}>Course Chapters</Typography>
              {course?.attributes?.chapters?.data?.map((chapter: any, i: number) => (
              <Fragment key={i}>
                <Typography fontSize="16px" fontWeight={700}>{`${chapter.attributes.name}`}</Typography>
                {chapter?.attributes?.lessons?.data?.map((lesson: any, j: number) => (
                  <Typography key={j} fontSize="14px" fontWeight={500} alignSelf="flex-start" display="flex" alignItems="center" gap="20px">
                    <Typography component="span" variant="inherit" padding="5px 10px" borderRadius={2} bgcolor="#F5F5F7">
                      {j + 1}
                    </Typography>
                    {lesson?.attributes?.name}
                  </Typography>
                ))}
              </Fragment>
            ))}
            </Stack>
     
          </Grid>
        </Grid>
        <Box marginTop={12}>
        </Box>
        <ToastContainer />
        <br /><br /><br />
      </Container>
    </>
  );
}

export default Tracks;
