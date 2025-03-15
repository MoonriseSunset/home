// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://moonrisesunset.github.io',
  base: '/home',
  integrations: [	
    starlight({
      title: "virtual house",
			customCss:[
				'./src/styles/starlight.css',

				'@fontsource-variable/cabin',
				'@fontsource-variable/baloo-bhaina-2',
			],
			social: {
				github: 'https://github.com/MoonriseSunset',
			},
			favicon: './assets/starlightfavicon.png',
      		logo: {src:'./src/assets/Logo.png',},
			sidebar: [
				{
					label: 'Start Here',
					items:[
						{label: 'Landing Page',link: '/'},
						{label: 'Changelog',link: '/changelog/'},
					
					],
					collapsed: false,
				},
			],
		}),
  ],
});