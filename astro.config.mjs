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
					label: 'Roblox Commissions',
					items: [
						{ label: 'About', link: '/robloxcommissions/about/' },
						{ label: 'Donation Depot', link: '/robloxcommissions/donationdepot/' },
					],
				},
				{
					label: 'Roblox Games',
					items: [
						{ label: 'About', link: '/robloxgames/about/' },
						{ label: 'Pharaohs Landing', link: '/robloxgames/pharaohslanding/' },
						{ label: 'Prison', link: '/robloxgames/prison/' },
					],
				},
				{
					label: 'Roblox Prototypes',
					items: [
						{ label: 'About', link: '/robloxprototypes/about/' },
						{ label: 'RayBlox', link: '/robloxprototypes/rayblox/' },
						{ label: 'Spelunky Generation', link: '/robloxprototypes/spelunkygen/' },
						{ label: 'Tank Game', link: '/robloxprototypes/tankgame/' },
					],
				},
			],

		}),
	],
});
