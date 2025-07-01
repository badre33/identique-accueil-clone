
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
				// Palette de couleurs étendue et raffinée
				brand: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617'
				},
				// Couleurs primaires avec variations subtiles
				royal: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554'
				},
				// Couleurs d'accent sophistiquées
				emerald: {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
					950: '#022c22'
				},
				violet: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065'
				},
				// Couleurs neutres étendues avec plus de nuances
				neutral: {
					25: '#fcfcfd',
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					850: '#1a202c',
					900: '#111827',
					925: '#0d1117',
					950: '#030712'
				},
				// Couleurs sémantiques
				success: {
					50: '#f0fdf4',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d'
				},
				warning: {
					50: '#fffbeb',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309'
				},
				error: {
					50: '#fef2f2',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			// Système d'espacement étendu et cohérent
			spacing: {
				'0.5': '0.125rem',    // 2px
				'1.5': '0.375rem',    // 6px
				'2.5': '0.625rem',    // 10px
				'3.5': '0.875rem',    // 14px
				'4.5': '1.125rem',    // 18px
				'5.5': '1.375rem',    // 22px
				'6.5': '1.625rem',    // 26px
				'7.5': '1.875rem',    // 30px
				'8.5': '2.125rem',    // 34px
				'9.5': '2.375rem',    // 38px
				'15': '3.75rem',      // 60px
				'17': '4.25rem',      // 68px
				'18': '4.5rem',       // 72px
				'19': '4.75rem',      // 76px
				'21': '5.25rem',      // 84px
				'22': '5.5rem',       // 88px
				'26': '6.5rem',       // 104px
				'30': '7.5rem',       // 120px
				'34': '8.5rem',       // 136px
				'38': '9.5rem',       // 152px
				'42': '10.5rem',      // 168px
				'46': '11.5rem',      // 184px
				'50': '12.5rem',      // 200px
				// Espacements pour sections
				'section-xs': '2rem',    // 32px
				'section-sm': '3rem',    // 48px
				'section': '4rem',       // 64px
				'section-lg': '6rem',    // 96px
				'section-xl': '8rem',    // 128px
				'section-2xl': '12rem',  // 192px
				// Espacements pour contenu
				'content-xs': '0.75rem', // 12px
				'content-sm': '1rem',    // 16px
				'content': '1.5rem',     // 24px
				'content-lg': '2rem',    // 32px
				'content-xl': '3rem',    // 48px
			},
			// Typographie enrichie avec Inter
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
				'display': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
				'hero-lg': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
				'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
				'display-lg': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
				'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
				'title': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
				'title-lg': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
				'subtitle': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '500' }],
				'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
				'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
				'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
				'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
			},
			// Hauteurs de ligne cohérentes
			lineHeight: {
				'tight': '1.1',
				'snug': '1.2',
				'normal': '1.4',
				'relaxed': '1.6',
				'loose': '1.8',
			},
			// Espacements de lettres raffinés
			letterSpacing: {
				'tighter': '-0.02em',
				'tight': '-0.01em',
				'normal': '0em',
				'wide': '0.01em',
				'wider': '0.02em',
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
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.02)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.4s ease-out',
				'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
