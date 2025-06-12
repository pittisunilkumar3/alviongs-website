
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// Animation delay utilities
			animationDelay: {
				'100': '100ms',
				'200': '200ms',
				'300': '300ms',
				'400': '400ms',
				'500': '500ms',
				'600': '600ms',
				'700': '700ms',
				'800': '800ms',
				'900': '900ms',
				'1000': '1000ms',
				'1500': '1500ms',
				'2000': '2000ms',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// ALVION brand colors - EXACT logo matches
				alvionred: {
					50: '#FFEBEE',
					100: '#FFCDD2',
					200: '#EF9A9A',
					300: '#E57373',
					400: '#EF5350',
					500: '#F44336',
					600: '#E53935',
					700: '#D32F2F',
					800: '#C62828', // EXACT ALVION text color
					900: '#B71C1C',
					DEFAULT: '#C62828',
					light: '#D32F2F',
					dark: '#B71C1C',
				},
				alvionblue: {
					50: '#E3F2FD',
					100: '#BBDEFB',
					200: '#90CAF9',
					300: '#64B5F6',
					400: '#42A5F5',
					500: '#2196F3',
					600: '#1E88E5',
					700: '#1976D2',
					800: '#1565C0', // EXACT blue flame color
					900: '#0D47A1',
					DEFAULT: '#1565C0',
					light: '#1976D2',
					dark: '#0D47A1',
				},
				alvionyellow: {
					50: '#FFFDE7',
					100: '#FFF9C4',
					200: '#FFF59D',
					300: '#FFF176',
					400: '#FFEE58',
					500: '#FFEB3B',
					600: '#FDD835',
					700: '#FBC02D',
					800: '#F9A825', // WCAG AA compliant dark yellow
					900: '#FFD600', // EXACT yellow flame color
					DEFAULT: '#FFD600',
					light: '#FFEB3B',
					dark: '#F9A825', // WCAG AA compliant
				},
				alviongreen: {
					50: '#E8F5E8',
					100: '#C8E6C9',
					200: '#A5D6A7',
					300: '#81C784',
					400: '#66BB6A',
					500: '#4CAF50',
					600: '#43A047',
					700: '#388E3C',
					800: '#2E7D32', // EXACT green flame color
					900: '#1B5E20',
					DEFAULT: '#2E7D32',
					light: '#388E3C',
					dark: '#1B5E20',
				},
				// Legacy color names for backward compatibility - BALANCED SYSTEM
				cyberpink: {
					light: '#1976D2',
					DEFAULT: '#1565C0', // ALVION Blue (was red, now blue for balance)
					dark: '#0D47A1',
				},
				cyberpurple: {
					light: '#388E3C',
					DEFAULT: '#2E7D32', // ALVION Green (was blue, now green for balance)
					dark: '#1B5E20',
				},
				cyberorange: {
					light: '#FFEB3B',
					DEFAULT: '#FFD600', // ALVION Yellow (unchanged)
					dark: '#F9A825',
				},
				cybergreen: {
					light: '#388E3C',
					DEFAULT: '#2E7D32', // ALVION Green (unchanged)
					dark: '#1B5E20',
				},
				cybergradient: {
					start: '#1565C0', // ALVION Blue (Primary)
					middle: '#2E7D32', // ALVION Green
					tertiary: '#FFD600', // ALVION Yellow
					end: '#C62828', // ALVION Red (Accent)
				},
				cyberdark: {
					DEFAULT: '#2C3E50',
					light: '#34495E',
				},
				cybergray: '#ECF0F1',
				// AI Platform specific colors
				aiblue: {
					light: '#4299E1',
					DEFAULT: '#3182CE',
					dark: '#2B6CB0'
				},
				aipurple: {
					light: '#9F7AEA',
					DEFAULT: '#805AD5',
					dark: '#6B46C1'
				},
				aigreen: {
					light: '#68D391',
					DEFAULT: '#48BB78',
					dark: '#38A169'
				},
				aiorange: {
					light: '#FBD38D',
					DEFAULT: '#ED8936',
					dark: '#DD6B20'
				},
				aicyan: {
					light: '#76E4F7',
					DEFAULT: '#0BC5EA',
					dark: '#0987A0'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '0.3' },
				},
				'scale-slow': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-horizontal': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(10px)' },
				},
				'fade': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(3deg)' },
					'75%': { transform: 'rotate(-3deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				'bounce-vertical': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-flow': 'gradient-flow 3s ease infinite',
				'float': 'float 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'scale-slow': 'scale-slow 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'bounce-horizontal': 'bounce-horizontal 2s ease-in-out infinite',
				'fade': 'fade 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'slide-left': 'slide-left 0.5s ease-out',
				'slide-right': 'slide-right 0.5s ease-out',
				'rotate': 'rotate 6s ease-in-out infinite',
				'bounce-vertical': 'bounce-vertical 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities, theme }) {
			const animationDelayUtilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
				return {
					[`.animation-delay-${key}`]: {
						'animation-delay': value
					}
				};
			});
			addUtilities(animationDelayUtilities);
		}
	],
} satisfies Config;
