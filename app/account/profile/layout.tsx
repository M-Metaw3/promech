'use client';

import * as React from 'react';
import Link from 'next/link';
import { AppBar, Avatar, Grid,Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Profile from '@/components/Profile'
import NavLink from '@/components/NavLink';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
const drawerWidth = 260;

interface Props {

}

export default function UserAccountLayout({ children }: { children: React.ReactNode }) {






	return (
        <Grid container >
        <Grid item xs={4}>
       
            <Profile />
      </Grid>
      <Grid  xs={4}>
      {children}
  </Grid>
            </Grid>
        );
        }
