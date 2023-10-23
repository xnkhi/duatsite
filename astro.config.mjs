import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://the-duat.github.io',
	integrations: [
		starlight({
			title: 'The Duat',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/cat.css',
			],
			logo: {
				src: './src/assets/eye.png',
			},
			social: {
				github: 'https://github.com/the-duat/mizos',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About mizOS', link: '/overview/about/' },
					],
				},
				{
					label: 'Install',
					items: [
						{ label: 'The Hijack Method', link: '/install/the-hijack-method/' },
						{ label: 'Live ISO', link: '/install/live-iso/' },
					],
				},
			],
		}),
	],
});
