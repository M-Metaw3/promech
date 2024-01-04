import { Plus_Jakarta_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { colors } from './variables';

const plusJakartaSans = Plus_Jakarta_Sans({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: colors.primary
		},
		secondary: {
			main: colors.secondary
		},
		success: {
			main: colors.success
		},
		text: {
			primary: '#0C0507',
			secondary: '#373F41'
		}
	},
	typography: {
		fontFamily: plusJakartaSans.style.fontFamily,
	},
	components: {
		MuiCssBaseline: {
            styleOverrides: `
                a {
                    text-decoration: none;
                    color: inherit;
                }
			`,
        },
		MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    // borderRadius: 20,
                    minWidth: 0, borderRadius: '6px',
                    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                        borderRadius: "inherit"
                    }
                },
            }
        },
		MuiTextField: {
			styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E8E8E8"
                    },
					'& .MuiInputBase-root': {
						borderRadius: '10px',
					},
					'& .Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderWidth: '1px !important'
					},
					'& input::placeholder': {
						fontSize: '14px',
						color: '#DFDFDF',
						opacity: 1
					},
					'& .MuiFormLabel-root:not(.Mui-focused)': {
						color: '#828282',
						fontSize: '0.95rem'
					},
					'& .MuiInputBase-root:not(.MuiInputBase-sizeSmall) input': {
						padding: '14px'
					},
					'&.MuiTelInput-TextField': {
						'& .MuiTypography-root': {
							fontSize: '14px',
							color: '#373F41'
						},
						'& .MuiFormLabel-root:not(.MuiInputLabel-shrink)': {
							left: 96
						}
					}
                },
            }
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: '#141522'
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'unset'
				}
			}
		}
	},
});

export default theme;