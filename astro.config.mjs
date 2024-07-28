import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Mizosu97.github.io',
	integrations: [
		starlight({
			title: 'The N.I.L.E.',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/cat.css',
			],
			logo: {
				src: './src/assets/eye.png',
			},
			favicon: '/eye.png',
			social: {
				github: 'https://github.com/the-duat/nile',
				discord: 'https://discord.gg/AVSuRZsTXp',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About the NILE', link: '/overview/about/' },
						{ label: 'User Interface', link: '/overview/interface/' },
						{ label: 'The Package Manager', link: '/overview/package-manager/' },
					],
				},
				{
					label: 'Installing the NILE',
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
				{
					label: 'OPMS Repo',
					items: [
						{ label: 'Official', link: '/repo/official/' },
						{ label: 'Community', link: '/repo/community/' },
						{ label: 'Submitting a Package', link: '/repo/submit/' }
					],
				},
			],

		}),
	],
});
