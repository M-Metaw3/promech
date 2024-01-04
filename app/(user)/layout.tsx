import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
import UserFooter from '@/components/UserFooter';
import UserHeader from '@/components/UserHeader';

export default function RootLayout({ children }: { children: ReactNode }) {
  	return (
		<Stack minHeight='100vh'>
			<UserHeader />
			<Stack component='main' flexGrow={1}>
				{children}
			</Stack>
			<UserFooter />
		</Stack>
  	)
}
