// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AstrOS Docs',
      logo: {
        src: `./src/assets/mark.svg`
      },
			social: [
        { icon: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/r/AstrOS_Linux' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/f38pGadC2a' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/astros-linux/AstrOS' }
      ],
      editLink: {
        baseUrl: 'https://github.com/astros-linux/docs/edit/main/',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'AstrOS',
          items: [
            { slug: "astros" },
            { slug: "astros/installation" },
            { slug: "astros/updating" },
            { slug: "astros/installing-software" },
            { slug: "astros/faq" }
          ]
        },
        {
          label: 'Developer',
          items: [
            { slug: "dev/building" }
          ]
        }
      ]
		}),
	],
});
