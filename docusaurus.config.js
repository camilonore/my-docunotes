// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Notes',
  tagline: 'Dinosaurs are cool',
  url: 'https://camilonore.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'camilonore', 
  projectName: 'my-docunotes', 
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
          {
            type: 'doc',
            docId: '/category/development',
            position: 'left',
            label: 'Development',
          },
          {
            type: 'doc',
            docId: '/category/learning',
            position: 'left',
            label: 'Learning',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Networks',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/camilonore',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/camilo-nore/',
              },
              {
                label: 'Gmail',
                href: 'mailto:caminore22@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                href: 'https://portfolio-rouge-one.vercel.app/',
              },
            ],
          },
        ],
        copyright: `Built with ❤ by Camilo Nore with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
