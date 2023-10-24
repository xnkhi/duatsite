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
						{ label: 'User Interface', link: '/overview/interface/' },
						{ label: 'The Package Manager', link: '/overview/package-manager/' },
					],
				},
				{
					label: 'Installing mizOS',
					items: [
						{ label: 'The Hijack Method', link: '/install/the-hijack-method/' },
						{ label: 'Live ISO', link: '/install/live-iso/' },
					],
				},
				{
					label: 'miz Frontend',
					items: [
						{ label: 'The Basics', link: '/miz/basics/' },
						{ label: 'System Info', link: '/miz/displayinfo/' },
						{ label: 'System Configuration', link: '/miz/configuration/' },
					],
				},
			],
		}),
	],
});
