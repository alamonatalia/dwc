/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Design Token Components
			colors: {
				ftnText: 'var(--color-font)',
				ftnBg: 'var(--color-bg-body)',
				ftnTextNav: 'var(--color-)'
			},
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
			},
			backgroundImage: {
				'hero': 'url("../assets/images/hero.jpg")'
			},
			animation: {
				zoom: 'zoomBg 10s ease-in-out infinite',
			  },
			  keyframes: {
				zoomBg: {
				  '0%': { transform: 'scale(1)' },
				  '50%': { transform: 'scale(1.1)' },
				  '100%': { transform: 'scale(1)' },
				},
			  },
		},
	},
	plugins: [],
}
