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
					label: 'Overview',
					items: [
						{ label: 'About', link: '/overview/about/' },
					],
				},
				{
					label: 'Lua Software',
					items: [
						{ label: 'About', link: '/luasoftware/about/' },
						{ label: 'N.I.L.E.', link: '/luasoftware/nile/' },
						{ label: 'Wedjat', link: '/luasoftware/wedjat/' },
						{ label: 'ThirdEyeSearch', link: '/luasoftware/thirdeyesearch/' },
						{ label: 'Set', link: '/luasoftware/set/' },
					],
				},
				{
					label: 'Other Software',
					items: [
						{ label: 'About', link: '/othersoftware/about/' },
						{ label: 'LimitedsFiend', link: '/othersoftware/limitedsfiend/' },
					],
				},
				{
					label: 'Roblox',
					items: [
						{ label: 'About', link: '/roblox/about/' },
						{ label: 'Pharaohs Landing', link: '/roblox/pharaohslanding/' },
						{ label: 'Prison', link: '/roblox/prison/' },
						{ label: 'Donation Depot', link: '/roblox/donationdepot/' },
						{ label: 'About', link: '/roblox/about/' },
						{ label: 'RayBlox', link: '/roblox/rayblox/' },
						{ label: 'Spelunky Generation', link: '/roblox/spelunkygen/' },
						{ label: 'Tank Game', link: '/roblox/tankgame/' },
					],
				},
			],

		}),
	],
});
