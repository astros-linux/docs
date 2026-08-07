// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: 'https://astros-linux.org',
  integrations: [
    starlight({
      plugins: [starlightBlog()],
      title: 'AstrOS',
      logo: {
        src: './src/assets/mark.svg',
      },
      social: [
        { icon: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/r/AstrOS_Linux' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/f38pGadC2a' },
        { icon: 'matrix', label: 'Matrix', href: 'https://matrix.to/#/%23general:astros-linux.org' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/astros-linux/AstrOS' },
        { icon: 'forgejo', label: 'Forgejo', href: 'https://code.astros-linux.org/AstrOS/AstrOS' }
      ],
      editLink: {
        baseUrl: 'https://code.astros-linux.org/AstrOS/docs/_edit/main/',
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
            { slug: "astros/gaming" },
            { slug: "astros/waydroid" },
            { slug: "astros/troubleshooting" },
            { slug: "astros/breaking-changes" },
            { slug: "astros/faq" }
          ]
        },
        {
          label: 'Guides',
          items: [
            { slug: "guides/dualboot-with-windows" }
          ]
        },
        {
          label: 'Developer',
          items: [
            { slug: "dev/building" }
          ]
        },
        {
          label: 'Legal',
          items: [
            { slug: "legal/legal-notice" },
            { slug: "legal/privacy-policy" }
          ]
        }
      ]
    }),
  ],
});
