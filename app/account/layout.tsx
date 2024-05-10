'use client';

import * as React from 'react';
import Link from 'next/link';
import { AppBar, Avatar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import NavLink from '@/components/NavLink';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { setAuthTokenCookie, getAuthTokenCookie, removeAuthTokenCookie } from '../../utils/auth';

const drawerWidth = 260;

interface Props {

}

export default function UserAccountLayout({ children }: { children: React.ReactNode }) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [username, setusername] = React.useState('');
	const [image, setimage] = React.useState('');

    const handleLogout = () => {
        // Clear the authentication token from cookies
        removeAuthTokenCookie();
        // Redirect to the login page or any other desired page
        push('/login');
    };

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const links = [
		{
			title: 'Overview',
			href: '/account/overview',
			icon: <DashboardOutlinedIcon />
		},
		{
			title: 'Courses',
			href: '/account/courses',
			icon: <AutoStoriesOutlinedIcon />
		},
		{
			title: 'Tracks',
			href: '/account/tracks',
			icon: <InsertChartOutlinedSharpIcon />
		},
		{
			title: 'Certificates',
			href: '/account/certificates',
			icon: <VerifiedOutlinedIcon />
		},
		{
			title: 'Profile',
			href: '/account/profile',
			icon: <PermContactCalendarOutlinedIcon />
		}
	]
	const { push } = useRouter();
React.useLayoutEffect (()=>{
	const tokenString =  getAuthTokenCookie();
	console.log(tokenString)
	if (!tokenString) {
	  toast.error('You must login to take this service');
	  push('/login')
	  return;
	}else{
		const parsetoken = tokenString && JSON.parse(tokenString)
		setusername(parsetoken.user.username)
		
		console.log()
	}
},[])








React.useLayoutEffect(() => {
	const fetchData = async () => {
	  try {
		const tokenString = getAuthTokenCookie();
  
		if (!tokenString) {
		  // Redirect to login if no token is found
		  push('/login');
		  return;
		}
  
		const parsetoken = JSON.parse(tokenString);
		console.log(parsetoken);
  
		const response = await fetch("http://promech-backend.addictaco.com/api/users/me/?populate=profile&populate=resume", {
		  headers: {
			Authorization: `Bearer ${parsetoken.jwt}`,
		  },
		});
		if (!response.ok) {
		  // Handle non-successful response (e.g., unauthorized)
		  console.error(`Fetch failed with status: ${response.status}`);
		  return;
		}
  
		const datares = await response.json();
		console.log(datares)
		setimage(datares?.profile?.url);
	  } catch (error) {
		// Handle any other errors that might occur during the fetch
		console.error("An error occurred during data fetching:", error);
	  }
	};
  
	fetchData();
  }, []);
  


	const drawer = (
		<Stack padding={2} gap='20px'>
			<Button variant='text' color='inherit' component={Link} href='/' sx={{ gap: 1, alignItems: 'center' }}>
				<img src='/logo/logo-white-80×80.png' alt='Logo' width='auto' height={62} />
				<img src='/logo/promech-523×163.png' alt='Promech' width='auto' height={47} />
			</Button>
			<List sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{links.map((link, index) => (
					<ListItem key={link.title} disablePadding
						component={NavLink} href={link.href}
						sx={{
							borderRadius: '10px', color: '#141522',
							'& .MuiListItemIcon-root': { color: '#9C9CA4' },
							'&.active': {
								bgcolor: '#F5F5F7',
								'& .MuiListItemIcon-root': { color: '#141522' }
							}
						}}
					>
						
						<ListItemButton>
							<ListItemIcon>
								{link.icon}
							</ListItemIcon>
							<ListItemText primary={link.title} />
						</ListItemButton>
					</ListItem>
				))}
					<ListItemButton onClick={handleLogout}>
							<ListItemIcon>
							<PermContactCalendarOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary='LogOut' />
						</ListItemButton>
			</List>
		</Stack>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main" bgcolor='#FCFCFC' minHeight='100vh'
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
			<AppBar
				position='relative'
				sx={{
					width: '100%',
					color: 'text.primary',
					bgcolor: 'transparent', border: 'none', boxShadow: 'none'
				}}
			>
				<Toolbar
					sx={{
						display: 'flex', justifyContent: 'space-between'
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						{/* <MenuIcon /> */}
					</IconButton>
					<Typography variant="h4" fontWeight={500} noWrap>
						Hi,{username}
					</Typography>
					<Avatar src={image?`http://promech-backend.addictaco.com${image}`:''} alt={'Salma Hegazy'} sx={{ width: 50, height: 50 }} />
				</Toolbar>
			</AppBar>
			<br />
			{children}
			</Box>
		</Box>
	);
}
