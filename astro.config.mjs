import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Mizosu97.github.io',
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
			favicon: '/eye.png',
			social: {
				github: 'https://github.com/mizosu97/',
			},
			sidebar: [
				{
					label: 'Lua Software',
					items: [
						{ label: 'Installation Script', link: '/install/install-script/' },
					],
				},
				{
					label: 'River Frontend',
					items: [
						{ label: 'The Basics', link: '/river/basics/' },
						{ label: 'System Info', link: '/river/displayinfo/' },
						{ label: 'System Configuration', link: '/river/configuration/' },
						{ label: 'Init Systems', link: '/river/initsystems/' },
						{ label: 'Software Management', link: '/river/software/' },
						{ label: 'System Updates', link: '/river/updates/' },
					],
				},
			],

		}),
	],
});
