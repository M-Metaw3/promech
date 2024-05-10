

"use client"
// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import UserCourseCard from "@/components/UserCourseCard";
// import PrivateRoute from "../../../components/PrivateRoute";
// import { setAuthTokenCookie, getAuthTokenCookie } from "../../../utils/auth";
// import { useRouter } from "next/navigation";

// const AccountOverview = () => {
//   const [dataapiuser, setdata] = useState<any>({ data: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const { push } = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const tokenString = getAuthTokenCookie();
//         const parsetoken = tokenString && JSON.parse(tokenString);

//         if (!tokenString) {
//           throw new Error("You must log in to access this service");
//         } else {
//           const response = await fetch(`http://promech-backend.addictaco.comapi/bookings?populate[course][populate][imgSrc]=true&populate[course][populate][chapters][populate][lessons]=true&populate[user][populate]=true&filters[isBooking]=true&filters[user]=${parsetoken?.user?.id}`);
//           const datares = await response.json();
//           setdata(datares);
//         }
//       } catch (error) {
//         console.error(error);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   const statistics = [
//     {
//       title: "No. of Courses",
//       count: 2,
//       bgcolor: "primary.main",
//     },
//     {
//       title: "No. of Chapters",
//       count: 8,
//       bgcolor: "primary.main",
//     },
//     {
//       title: "Assigned Tasks",
//       count: 3,
//       bgcolor: "#141522",
//     },
//     {
//       title: "Solve Quizzes",
//       count: 1,
//       bgcolor: "#141522",
//     },
//     {
//       title: "Uploaded Files",
//       count: 9,
//       bgcolor: "#570DE6",
//     },
//     {
//       title: "Uploaded Files",
//       count: 4,
//       bgcolor: "#DB5962",
//     },
//   ];
//   const courses = [
//     {
//       imgSrc: "/home/temp/photo1.jpg",
//       category: {
//         title: "CAD & Reverse Engineering",
//         iconColor: "success.main",
//       },
//       title: "Modelling and Reverse Engineering",
//       user: {
//         imgSrc: "/home/temp/user1.svg",
//         name: "Eng. John Lamiee",
//       },
//       chaptersCount: 7,
//       finishedChaptersCount: 4,
//       daysCount: 5,
//       // hoursCount: 107
//     },
//   ];
//   return (
//     <PrivateRoute>
//       <Stack gap={4}>
//         <Grid
//           container
//           columns={6}
//           columnSpacing={{ xs: "10px", md: "20px" }}
//           rowGap={{ xs: "10px", md: "20px" }}
//         >
//           <Grid key={statistics[0].title} item xs={3} md={2} lg={1}>
//             <Stack
//               gap={3}
//               bgcolor={statistics[0].bgcolor}
//               color="#FFF"
//               borderRadius="10px"
//               padding="20px"
//               paddingBottom="30px"
//             >
//               <Typography fontWeight={600}>{statistics[0].title}</Typography>
//               <Typography variant="h3" fontWeight={500}>
//                 {dataapiuser?.meta?.pagination?.total ?? ""}
//               </Typography>
//             </Stack>
//           </Grid>
//         </Grid>
//         <Stack gap={2}>
//           <Typography variant="h5" fontWeight={500} noWrap>
//             My Courses
//           </Typography>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography>Error occurred while loading courses.</Typography>
//           ) : dataapiuser?.data?.length === 0 ? (
//             <Typography>No courses found.</Typography>
//           ) : (
//             <Grid
//               container
//               columns={3}
//               columnSpacing={8}
//               rowGap={4}
//               marginTop={2}
//               justifyContent="stretch"
//             >
//               {dataapiuser?.data?.map((course: any) => (
//                 <Grid
//                   item
//                   xs={3}
//                   md={1}
//                   key={course.attributes.course.data.attributes.title}
//                 >
//                   <UserCourseCard
//                     id={course.attributes?.course?.data.id}
//                     course={course.attributes?.course?.data.attributes}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Stack>
//       </Stack>
//     </PrivateRoute>
//   );
// };

// export default AccountOverview;
import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import UserCourseCard from "@/components/UserCourseCard";
import PrivateRoute from "../../../components/PrivateRoute";
import { setAuthTokenCookie, getAuthTokenCookie } from "../../../utils/auth";
import { useRouter } from "next/navigation";

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
  finishedChaptersCount: number;
  daysCount: number;
  // hoursCount: number;
}

interface Statistics {
  title: string;
  count: number;
  bgcolor: string;
}

const AccountOverview = (): JSX.Element => {
  const [dataapiuser, setdata] = useState<any>({ data: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { push } = useRouter();

  React.useLayoutEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const tokenString: string | null = getAuthTokenCookie();
        const parsetoken: any = tokenString && JSON.parse(tokenString);

        if (!tokenString) {
          throw new Error("You must log in to access this service");
        } else {
          const response = await fetch(`http://promech-backend.addictaco.com/api/bookings?populate[course][populate][imgSrc]=true&populate[course][populate][chapters][populate][lessons]=true&populate[user][populate]=true&filters[isBooking]=true&filters[user]=${parsetoken?.user?.id}&populate[course][populate][userimage]=true`);
          const datares = await response.json();
          setdata(datares);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const statistics: Statistics[] = [
    {
      title: "No. of Courses",
      count: 2,
      bgcolor: "primary.main",
    },
    {
      title: "No. of Chapters",
      count: 8,
      bgcolor: "primary.main",
    },
    {
      title: "Assigned Tasks",
      count: 3,
      bgcolor: "#141522",
    },
    {
      title: "Solve Quizzes",
      count: 1,
      bgcolor: "#141522",
    },
    {
      title: "Uploaded Files",
      count: 9,
      bgcolor: "#570DE6",
    },
    {
      title: "Uploaded Files",
      count: 4,
      bgcolor: "#DB5962",
    },
  ];
  const courses: Course[] = [
    {
      imgSrc: "/home/temp/photo1.jpg",
      category: {
        title: "CAD & Reverse Engineering",
        iconColor: "success.main",
      },
      title: "Modelling and Reverse Engineering",
      user: {
        imgSrc: "/home/temp/user1.svg",
        name: "Eng. John Lamiee",
      },
      chaptersCount: 7,
      finishedChaptersCount: 4,
      daysCount: 5,
      // hoursCount: 107
    },
  ];
  return (
    <PrivateRoute>
      <Stack gap={4}>
        <Grid
          container
          columns={6}
          columnSpacing={{ xs: "10px", md: "20px" }}
          rowGap={{ xs: "10px", md: "20px" }}
        >
          <Grid key={statistics[0].title} item xs={3} md={2} lg={1}>
            <Stack
              gap={3}
              bgcolor={statistics[0].bgcolor}
              color="#FFF"
              borderRadius="10px"
              padding="20px"
              paddingBottom="30px"
            >
              <Typography fontWeight={600}>{statistics[0].title}</Typography>
              <Typography variant="h3" fontWeight={500}>
                {dataapiuser?.meta?.pagination?.total ?? ""}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack gap={2}>
          <Typography variant="h5" fontWeight={500} noWrap>
            My Courses
          </Typography>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography>Error occurred while loading courses.</Typography>
          ) : dataapiuser?.data?.length === 0 ? (
            <Typography>No courses found.</Typography>
          ) : (
            <Grid
              container
              columns={3}
              columnSpacing={8}
              rowGap={4}
              marginTop={2}
              justifyContent="stretch"
            >
              {dataapiuser?.data?.map((course: any) => (
                <Grid
                  item
                  xs={3}
                  md={1}
                  key={course.attributes.course.data.attributes.title}
                >
                  <UserCourseCard
                    id={course.attributes?.course?.data.id}
                    course={course.attributes?.course?.data.attributes}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Stack>
      </Stack>
    </PrivateRoute>
  );
};

export default AccountOverview;