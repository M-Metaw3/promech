'use client';
// // import { getAuthTokenCookie ,removeAuthTokenCookie} from '../../utils/auth';
import { useRouter } from 'next/navigation'

// // import React, { MouseEvent, useEffect,useState } from 'react';
// // import { usePathname } from 'next/navigation';
// // import Link from 'next/link';
// // import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
// // import NavLink from '../NavLink';
// // import Search from './Search';
import { redirect } from 'next/navigation';

// // const  UserHeader = () => {
// //     const { push } = useRouter();

// //     const [islogin, setislogin] = useState(false);

// //     const [dataapi, setData] = useState([]);
// //     useEffect(() => {
// //         // Check if the user is already authenticated
// //         const authToken = getAuthTokenCookie();
// //         setislogin(authToken)
// //       }, []);
// //     useEffect(() => {
// //       const fetchData = async () => {
// //         try {
// //           const response = await fetch('http://localhost:1337//api/tracks?fields[0]=title');
// //           const data = await response.json()
// //           setData(data.data);
          
// //         //   setData("data.data.attributes");
// //         // console.log(data.data[0])
    
// //         //   console.log(dataapi[0].id)
// //     //   console.log(`http://localhost:1337/${dataapi?.mainImgSrc?.data?.attributes?.url}`)
    
// //         } catch (error:any) {
// //           console.error('Error fetching data:', error);
// //         }
// //       };
    
// //       fetchData();
// //     }, []);
// //     const path = usePathname();


// //     const handleLogout = () => {
// //         // Clear the authentication token from cookies
// //         removeAuthTokenCookie();
    
// //         // Redirect to the login page or any other desired page
// //         push('/login');
// //       };
// //     const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
// // 	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
// // 	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

// // 	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
// // 		setAnchorElNav(event.currentTarget);
// // 	};
// // 	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
// // 		setAnchorElUser(event.currentTarget);
// // 	};

// // 	const handleCloseNavMenu = () => {
// // 		setAnchorElNav(null);
// // 	};

// // 	const handleCloseUserMenu = () => {
// // 		setAnchorElUser(null);
// // 	};



// // 	const pages = [
// // 		{
// // 			name: 'About',
// // 			href: '/about'
// // 		},
// // 		{
// // 			name: 'Blogs',
// // 			href: '/blogs'
// // 		},
// // 		{
// // 			name: 'Career',
// // 			href: '/career'
// // 		},
// // 		{
// // 			name: 'Contact Us',
// // 			href: '/contact'
// // 		}
// // 	];
    
// // 	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// // 	const tracks = [
// // 		{
			
// // 			color: '#bad531',
			
// // 		},
// // 		{
			
// // 			color: '#d38cbd',
	
// // 		},
// // 		{
			
// // 			color: '#4597d1',
// // 		},
// // 		{
// // 			color: '#db5962',
// // 		},
// //         {
// //             color: '#bad531',
// //         }
// // 	]
    
// //     return (
// //         <AppBar elevation={0}
// //             position='fixed'
// //             color='inherit'
// //             sx={{
// //                 boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
// //                 transition: 'background-color 0.3s',
// //                 color: 'text.primary'
// //             }}
            
// //         >
// //             <Container maxWidth="lg" disableGutters>
//             //     <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingY: 2 }}>
//             //         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             //             <IconButton
//             //                 size="large"
//             //                 aria-label="account of current user"
//             //                 aria-controls="menu-appbar"
//             //                 aria-haspopup="true"
//             //                 onClick={handleOpenNavMenu}
//             //                 color="inherit"
//             //             >
//             //                 <MenuIcon />
//             //             </IconButton>
//             //             <Drawer
//             //                 id="menu-appbar"
//             //                 // anchorEl={anchorElNav}
//             //                 // anchorOrigin={{
//             //                 //     vertical: 'bottom',
//             //                 //     horizontal: 'left',
//             //                 // }}
//             //                 keepMounted
//             //                 // transformOrigin={{
//             //                 //     vertical: 'top',
//             //                 //     horizontal: 'left',
//             //                 // }}
//             //                 open={Boolean(anchorElNav)}
//             //                 onClose={handleCloseNavMenu}
//             //                 sx={{
//             //                     display: { xs: 'block', md: 'none' },
//             //                 }}
//             //                 PaperProps={{
//             //                     sx: {
//             //                         minWidth: 300,
//             //                     }
//             //                 }}
//             //             >
//             //                 {pages.map((page) => (
//             //                     <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//             //                         <Typography textAlign="center">{page.name}</Typography>
//             //                     </MenuItem>
//             //                 ))}
//             //             </Drawer>
//             //         </Box>
//             //         <Button variant='text' color='inherit' component={Link} href='/' sx={{ gap: 1, alignItems: 'center' }}>
//             //             <img src='/logo/logo-222×321.png' alt='Logo' width='auto' height={62} />
//             //             <img src='/logo/promech-523×163.png' alt='Promech' width='auto' height={47} />
//             //         </Button>
//             //         <Box gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
//             //             <Button
//             //                 variant='text' size='large' color='inherit'
//             //                 onClick={e => setAnchorEl(e.currentTarget)}
//             //                 endIcon={<ArrowDropDownSharpIcon fontSize='large' sx={{ width: 30, height: 30 }} />}
//             //                 sx={{
//             //                     fontWeight: 'bold',
//             //                     fontSize: '18px', letterSpacing: '1px',
//             //                     color: path.includes('/tracks') ? 'primary.main' : 'inherit',
//             //                     '& .MuiButton-endIcon': { marginX: 0 }
//             //                 }}
//             //             >
//             //                 Tracks
//             //             </Button>
//             //             <Menu
//             //                 anchorEl={anchorEl}
//             //                 open={Boolean(anchorEl)}
//             //                 onClose={() => setAnchorEl(null)}
//             //                 MenuListProps={{
//             //                     'aria-labelledby': 'basic-button',
//             //                     sx: { minWidth: 350 }
//             //                 }}
//             //             >
//             //                 {dataapi?dataapi?.map((track, i) =>
//             //                     <div key={track.name}>
//             //                         <MenuItem component={NavLink} href={`/tracks/${track.id}`}
//             //                             onMouseDown={() => setAnchorEl(null)}
//             //                             sx={{
//             //                                 gap: 2, color: '#000', fontWeight: 'bold', fontSize: '1.1rem', paddingY: 1,
//             //                                 '&.active': { color: 'primary.main' }
//             //                             }}
//             //                         >
//             //                             <Box component='i' bgcolor={i<=tracks.length?tracks[i].color:"red"} width={3} height={24} />
//             //                             {track.attributes.title}
//             //                         </MenuItem>
//             //                         {i !== tracks.length-1 && <Divider variant='middle' component="li" />}
//             //                     </div>
//             //                 ):""}
//             //             </Menu>
//             //             {pages.map((page) => (
//             //                 <Button key={page.name}
//             //                     variant='text' size='large' color='inherit'
//             //                     onClick={handleCloseNavMenu}
//             //                     component={NavLink} href={page.href}
//             //                     sx={{
//             //                         color: 'inherit', fontWeight: 'bold',
//             //                         fontSize: '18px', letterSpacing: '1px',
//             //                         '&.active': {
//             //                             color: 'primary.main'
//             //                         }
//             //                     }}
//             //                 >
//             //                     {page.name}
//             //                 </Button>
//             //             ))}
//             //         </Box>

//             //         <Stack direction='row' gap={2} alignItems='stretch' minWidth={{ xs: 0, md: 312 }} sx={{ flexGrow: 0 }}>
//             //             {/* <Tooltip title="Open settings">
//             //                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             //                     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//             //                 </IconButton>
//             //             </Tooltip> */}
//             //    {!islogin?<Button variant='contained' size='large'
//             //                 component={Link} href='/login'
//             //                 sx={{ fontWeight: 600, fontSize: '16px', height: 42, whiteSpace: 'nowrap' }}
//             //             >Sign In</Button>:<Button variant='contained' size='large'
//             //             // component={Link} href='/login'
//             //             onClick={handleLogout}
//             //             sx={{ fontWeight: 600, fontSize: '16px', height: 42, whiteSpace: 'nowrap' }}
//             //         >logout</Button>}
//             //             <Search />
//             //             <Menu
//             //                 sx={{ mt: '45px' }}
//             //                 id="menu-appbar"
//             //                 anchorEl={anchorElUser}
//             //                 anchorOrigin={{
//             //                     vertical: 'top',
//             //                     horizontal: 'right',
//             //                 }}
//             //                 keepMounted
//             //                 transformOrigin={{
//             //                     vertical: 'top',
//             //                     horizontal: 'right',
//             //                 }}
//             //                 open={Boolean(anchorElUser)}
//             //                 onClose={handleCloseUserMenu}
//             //             >
//             //                 {settings.map((setting) => (
//             //                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//             //                         <Typography textAlign="center">{setting}</Typography>
//             //                     </MenuItem>
//             //                 ))}
//             //             </Menu>
//             //         </Stack>
// //                 </Toolbar>
// //             </Container>
// //         </AppBar>
// //     )
// // }

// // export default UserHeader;


// import React, { MouseEvent, useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   Divider,
//   Drawer,
//   IconButton,
//   Menu,
//   MenuItem,
//   Stack,
//   Toolbar,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
// import NavLink from '../NavLink';
// import Search from './Search';
// // import { useRouter } from 'next/router'; // Fixed import

// import { getAuthTokenCookie, removeAuthTokenCookie } from '../../utils/auth';

// const UserHeader: React.FC = () => {
//   const { push } = useRouter();

//   const [islogin, setislogin] = useState(false);

//   const [dataapi, setData] = useState<any[]>([]);

//   useEffect(() => {
//     // Check if the user is already authenticated
//     const authToken = getAuthTokenCookie();
//     setislogin(!!authToken);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:1337//api/tracks?fields[0]=title');
//         const data = await response.json();
//         setData(data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const path = usePathname();

//   const handleLogout = () => {
//     // Clear the authentication token from cookies
//     removeAuthTokenCookie();

//     // Redirect to the login page or any other desired page
//     push('/login');
//   };

//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const pages = [
//     {
//       name: 'About',
//       href: '/about',
//     },
//     {
//       name: 'Blogs',
//       href: '/blogs',
//     },
//     {
//       name: 'Career',
//       href: '/career',
//     },
//     {
//       name: 'Contact Us',
//       href: '/contact',
//     },
//   ];

//   const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//   const tracks = [
//     {
//       color: '#bad531',
//     },
//     {
//       color: '#d38cbd',
//     },
//     {
//       color: '#4597d1',
//     },
//     {
//       color: '#db5962',
//     },
//     {
//       color: '#bad531',
//     },
//   ];

//   return (
//     <AppBar
//       elevation={0}
//       position="fixed"
//       color="inherit"
//       sx={{
//         boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
//         transition: 'background-color 0.3s',
//         color: 'text.primary',
//       }}
//     >
//       <Container maxWidth="lg" disableGutters>
//         <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingY: 2 }}>
      
//                     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Drawer
//                             id="menu-appbar"
//                             // anchorEl={anchorElNav}
//                             // anchorOrigin={{
//                             //     vertical: 'bottom',
//                             //     horizontal: 'left',
//                             // }}
//                             keepMounted
//                             // transformOrigin={{
//                             //     vertical: 'top',
//                             //     horizontal: 'left',
//                             // }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                             PaperProps={{
//                                 sx: {
//                                     minWidth: 300,
//                                 }
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page.name}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Drawer>
//                     </Box>
//                     <Button variant='text' color='inherit' component={Link} href='/' sx={{ gap: 1, alignItems: 'center' }}>
//                         <img src='/logo/logo-222×321.png' alt='Logo' width='auto' height={62} />
//                         <img src='/logo/promech-523×163.png' alt='Promech' width='auto' height={47} />
//                     </Button>
//                     <Box gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
//                         <Button
//                             variant='text' size='large' color='inherit'
//                             onClick={e => setAnchorEl(e.currentTarget)}
//                             endIcon={<ArrowDropDownSharpIcon fontSize='large' sx={{ width: 30, height: 30 }} />}
//                             sx={{
//                                 fontWeight: 'bold',
//                                 fontSize: '18px', letterSpacing: '1px',
//                                 color: path.includes('/tracks') ? 'primary.main' : 'inherit',
//                                 '& .MuiButton-endIcon': { marginX: 0 }
//                             }}
//                         >
//                             Tracks
//                         </Button>
//                         <Menu
//                             anchorEl={anchorEl}
//                             open={Boolean(anchorEl)}
//                             onClose={() => setAnchorEl(null)}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                                 sx: { minWidth: 350 }
//                             }}
//                         >
//                             {dataapi?dataapi?.map((track, i) =>
//                                 <div key={track.name}>
//                                     <MenuItem component={NavLink} href={`/tracks/${track.id}`}
//                                         onMouseDown={() => setAnchorEl(null)}
//                                         sx={{
//                                             gap: 2, color: '#000', fontWeight: 'bold', fontSize: '1.1rem', paddingY: 1,
//                                             '&.active': { color: 'primary.main' }
//                                         }}
//                                     >
//                                         <Box component='i' bgcolor={i<=tracks.length?tracks[i].color:"red"} width={3} height={24} />
//                                         {track.attributes.title}
//                                     </MenuItem>
//                                     {i !== tracks.length-1 && <Divider variant='middle' component="li" />}
//                                 </div>
//                             ):""}
//                         </Menu>
//                         {pages.map((page) => (
//                             <Button key={page.name}
//                                 variant='text' size='large' color='inherit'
//                                 onClick={handleCloseNavMenu}
//                                 component={NavLink} href={page.href}
//                                 sx={{
//                                     color: 'inherit', fontWeight: 'bold',
//                                     fontSize: '18px', letterSpacing: '1px',
//                                     '&.active': {
//                                         color: 'primary.main'
//                                     }
//                                 }}
//                             >
//                                 {page.name}
//                             </Button>
//                         ))}
//                     </Box>

//                     <Stack direction='row' gap={2} alignItems='stretch' minWidth={{ xs: 0, md: 312 }} sx={{ flexGrow: 0 }}>
//                         {/* <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip> */}
//                {!islogin?<Button variant='contained' size='large'
//                             component={Link} href='/login'
//                             sx={{ fontWeight: 600, fontSize: '16px', height: 42, whiteSpace: 'nowrap' }}
//                         >Sign In</Button>:<Button variant='contained' size='large'
//                         // component={Link} href='/login'
//                         onClick={handleLogout}
//                         sx={{ fontWeight: 600, fontSize: '16px', height: 42, whiteSpace: 'nowrap' }}
//                     >logout</Button>}
//                         <Search />
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Stack>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default UserHeader;
///////////////////////////////////////////////////////////////////////////
import React, { MouseEvent, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import NavLink from '../NavLink';
import Search from './Search';
import { getAuthTokenCookie, removeAuthTokenCookie } from '../../utils/auth';

const UserHeader: React.FC = () => {
  const { push } = useRouter();
  const [islogin, setislogin] = useState(false);
  const [dataapi, setData] = useState<any[]>([]);
  
  useEffect(() => {
    // Check if the user is already authenticated
    const authToken = getAuthTokenCookie();
    setislogin(!!authToken);
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/tracks?fields[0]=title');
        
        const data = await response.json();
        setData(data.data);
      } catch (error:any) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const path = usePathname();
  
  const handleLogout = () => {
    // Clear the authentication token from cookies
    removeAuthTokenCookie();
    // Redirect to the login page or any other desired page
    push('/login');
  };
  
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const pages = [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Blogs',
      href: '/blogs',
    },
    {
      name: 'Career',
      href: '/career',
    },
    {
      name: 'Contact Us',
      href: '/contact',
    },
  ];
  
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  const tracks = [
    {
      color: '#bad531',
    },
    {
      color: '#d38cbd',
    },
    {
      color: '#4597d1',
    },
    {
      color: '#db5962',
    },
    {
      color: '#bad531',
    },
  ];
  
  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="inherit"
      sx={{
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
        transition: 'background-color 0.3s',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingY: 2 }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{
                sx: {
                  minWidth: 300,
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          <Button variant='text' color='inherit' component={Link} href='/' sx={{ gap: 1, alignItems: 'center' }}>
            <img src='/logo/logo-222×321.png' alt='Logo' width='auto' height={62} />
            <img src='/logo/promech-523×163.png' alt='Promech' width='auto' height={47} />
          </Button>
          <Box gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant='text' size='large' color='inherit'
              onClick={e => setAnchorEl(e.currentTarget)}
              endIcon={<ArrowDropDownSharpIcon fontSize='large' sx={{ width: 30, height: 30 }} />}
              sx={{
                fontWeight: 'bold',
                fontSize: '18px', letterSpacing: '1px',
                color: path.includes('/tracks') ? 'primary.main' : 'inherit',
                '& .MuiButton-endIcon': { marginX: 0 }
              }}
            >
              Tracks
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
                sx: { minWidth: 350 }
              }}
            >
              {dataapi ? dataapi?.map((track, i) =>
                <div key={track.name}>
                  <MenuItem component={NavLink} href={`/tracks/${track.id}`}
                    onMouseDown={() => setAnchorEl(null)}
                    sx={{
                      gap: 2, color: '#000', fontWeight: 'bold', fontSize: '1.1rem', paddingY: 1,
                      '&.active': { color: 'primary.main' }
                    }}
                  >
                    <Box component='i' bgcolor={i <= tracks.length ? tracks[i].color : "red"} width={3} height={24} />
                    {track.attributes.title}
                  </MenuItem>
                  {i !== tracks.length - 1 && <Divider variant='middle' component="li" />}
                </div>
              ) : ""}
            </Menu>
            {pages.map((page) => (
              <Button key={page.name}
                variant='text' size='large' color='inherit'
                onClick={handleCloseNavMenu}
                component={NavLink} href={page.href}
                sx={{
                  color: 'inherit', fontWeight: 'bold',
                  fontSize: '18px', letterSpacing: '1px',
                  '&.active': {
                    color: 'primary.main'
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Stack direction='row' gap={2} alignItems='stretch' minWidth={{ xs: 0, md: 312 }} sx={{ flexGrow: 0 }}>
          {!islogin ? (
  <Button
    variant='contained'
    size='large'
    component={Link}
    href='/login'
    sx={{ fontWeight: 600, fontSize: '16px', height: 42, whiteSpace: 'nowrap' }}
  >
    Sign In
  </Button>
) : (
  <div >
    <Button
  
      variant='contained'
      size='large'
      onClick={handleLogout}
      sx={{ fontWeight: 600, fontSize: '16px', height: 42, whiteSpace: 'nowrap' }}
    >
      Logout
    </Button>
    <Button
    component={Link}
    href='/account/overview'
    color='success'   size='large' variant="contained">
      Dashboard
    </Button>
  </div>
)}

            {/* <Search /> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserHeader;


