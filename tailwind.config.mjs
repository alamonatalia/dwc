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
			}
		},
	},
	plugins: [],
}
