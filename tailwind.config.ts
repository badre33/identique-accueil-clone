
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
				// Nouvelles couleurs du design system
				brand: {
					black: 'var(--brand-black)',
					white: 'var(--brand-white)',
					primary: 'var(--brand-primary)',
					secondary: 'var(--brand-secondary)',
					accent: {
						DEFAULT: 'var(--brand-accent)',
						light: 'var(--brand-accent-light)',
						dark: 'var(--brand-accent-dark)'
					}
				},
				// Couleurs sémantiques
				success: 'var(--color-success)',
				warning: 'var(--color-warning)',
				error: 'var(--color-error)',
				info: 'var(--color-info)',
				// Couleurs neutres étendues
				neutral: {
					50: 'var(--neutral-50)',
					100: 'var(--neutral-100)',
					200: 'var(--neutral-200)',
					300: 'var(--neutral-300)',
					400: 'var(--neutral-400)',
					500: 'var(--neutral-500)',
					600: 'var(--neutral-600)',
					700: 'var(--neutral-700)',
					800: 'var(--neutral-800)',
					900: 'var(--neutral-900)',
					950: 'var(--neutral-950)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				// Ajout des rayons du design system
				'ds-sm': 'var(--radius-sm)',
				'ds-md': 'var(--radius-md)',
				'ds-lg': 'var(--radius-lg)',
				'ds-xl': 'var(--radius-xl)',
				'ds-2xl': 'var(--radius-2xl)',
				'ds-3xl': 'var(--radius-3xl)',
				'ds-full': 'var(--radius-full)'
			},
			fontFamily: {
				// Polices du design system
				'display': 'var(--font-family-display)',
				'body': 'var(--font-family-primary)',
				'mono': 'var(--font-family-mono)',
				// Maintien de la compatibilité
				'sans': 'var(--font-family-primary)',
				'serif': 'var(--font-family-display)'
			},
			fontSize: {
				// Tailles du design system
				'ds-xs': 'var(--text-xs)',
				'ds-sm': 'var(--text-sm)',
				'ds-base': 'var(--text-base)',
				'ds-lg': 'var(--text-lg)',
				'ds-xl': 'var(--text-xl)',
				'ds-2xl': 'var(--text-2xl)',
				'ds-3xl': 'var(--text-3xl)',
				'ds-4xl': 'var(--text-4xl)',
				'ds-5xl': 'var(--text-5xl)',
				'ds-6xl': 'var(--text-6xl)',
				'ds-7xl': 'var(--text-7xl)',
				'ds-8xl': 'var(--text-8xl)',
				'ds-9xl': 'var(--text-9xl)',
				// Tailles typographiques spéciales
				'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
				'section': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }]
			},
			fontWeight: {
				'thin': 'var(--font-weight-thin)',
				'extralight': 'var(--font-weight-extralight)',
				'light': 'var(--font-weight-light)',
				'normal': 'var(--font-weight-normal)',
				'medium': 'var(--font-weight-medium)',
				'semibold': 'var(--font-weight-semibold)',
				'bold': 'var(--font-weight-bold)',
				'extrabold': 'var(--font-weight-extrabold)',
				'black': 'var(--font-weight-black)'
			},
			lineHeight: {
				'none': 'var(--leading-none)',
				'tight': 'var(--leading-tight)',
				'snug': 'var(--leading-snug)',
				'normal': 'var(--leading-normal)',
				'relaxed': 'var(--leading-relaxed)',
				'loose': 'var(--leading-loose)'
			},
			letterSpacing: {
				'tighter': 'var(--tracking-tighter)',
				'tight': 'var(--tracking-tight)',
				'normal': 'var(--tracking-normal)',
				'wide': 'var(--tracking-wide)',
				'wider': 'var(--tracking-wider)',
				'widest': 'var(--tracking-widest)'
			},
			spacing: {
				'ds-1': 'var(--space-1)',
				'ds-2': 'var(--space-2)',
				'ds-3': 'var(--space-3)',
				'ds-4': 'var(--space-4)',
				'ds-5': 'var(--space-5)',
				'ds-6': 'var(--space-6)',
				'ds-8': 'var(--space-8)',
				'ds-10': 'var(--space-10)',
				'ds-12': 'var(--space-12)',
				'ds-16': 'var(--space-16)',
				'ds-20': 'var(--space-20)',
				'ds-24': 'var(--space-24)',
				'ds-32': 'var(--space-32)',
				'ds-40': 'var(--space-40)',
				'ds-48': 'var(--space-48)',
				'ds-56': 'var(--space-56)',
				'ds-64': 'var(--space-64)',
				// Espacement responsive
				'section': 'var(--spacing-3xl)',
				'section-lg': 'var(--spacing-3xl)',
				'content': 'var(--spacing-lg)',
				'content-lg': 'var(--spacing-xl)',
				'tight': 'var(--spacing-sm)'
			},
			boxShadow: {
				'ds-xs': 'var(--shadow-xs)',
				'ds-sm': 'var(--shadow-sm)',
				'ds-md': 'var(--shadow-md)',
				'ds-lg': 'var(--shadow-lg)',
				'ds-xl': 'var(--shadow-xl)',
				'ds-2xl': 'var(--shadow-2xl)',
				'ds-inner': 'var(--shadow-inner)'
			},
			transitionDuration: {
				'75': 'var(--duration-75)',
				'100': 'var(--duration-100)',
				'150': 'var(--duration-150)',
				'200': 'var(--duration-200)',
				'300': 'var(--duration-300)',
				'500': 'var(--duration-500)',
				'700': 'var(--duration-700)',
				'1000': 'var(--duration-1000)'
			},
			transitionTimingFunction: {
				'linear': 'var(--ease-linear)',
				'in': 'var(--ease-in)',
				'out': 'var(--ease-out)',
				'in-out': 'var(--ease-in-out)',
				'in-back': 'var(--ease-in-back)',
				'out-back': 'var(--ease-out-back)',
				'in-out-back': 'var(--ease-in-out-back)',
				'brand': 'var(--ease-brand)'
			},
			backgroundImage: {
				// Gradients du design system
				'gradient-brand': 'var(--gradient-brand)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-overlay': 'var(--gradient-overlay)'
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
				// Animations du design system
				'fadeInUp': {
					'0%': {
						opacity: '0',
						transform: 'translateY(var(--space-8))'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fadeInScale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slideInRight': {
					'0%': {
						opacity: '0',
						transform: 'translateX(var(--space-8))'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Animations du design system
				'fadeInUp': 'fadeInUp var(--duration-700) var(--ease-out) forwards',
				'fadeInScale': 'fadeInScale var(--duration-500) var(--ease-out) forwards',
				'slideInRight': 'slideInRight var(--duration-500) var(--ease-out) forwards',
				'float': 'float 3s var(--ease-in-out) infinite',
				'pulse-subtle': 'pulse-subtle 2s var(--ease-in-out) infinite',
				'shimmer': 'shimmer 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
