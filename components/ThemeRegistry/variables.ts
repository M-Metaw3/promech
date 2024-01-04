import { Poppins } from 'next/font/google';

export const colors = {
	primary: '#12595C',
	secondary: '#51BD83',
	success: '#CAE2A8'
}

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const fonts = {
	poppins: poppins.style.fontFamily,
}

export const userHeaderHeight = 106