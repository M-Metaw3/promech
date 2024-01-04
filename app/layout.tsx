
import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './globals.css';


export const metadata: Metadata = {
	title: 'PROMECH',
	description: 'PROMECH is your learning gate to leap from ordinary to EXTRA-ordinary',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					{children}
				</ThemeRegistry>
			</body>
		</html>
	)
}
