/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Design Token Components
			colors: {
				colorFont: 'var(--color-font)'
			},
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
