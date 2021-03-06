const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MyConnector Docs',
  tagline: 'Move your data anywhere',
  url: 'https://docs.myconnector.online/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MyConnector Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'https://avatars.githubusercontent.com/u/69260592?s=400&u=d88f187c8fd05ba14490bcfd68d642c403b5a723&v=4',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'About',
        },
        {
          to: '/api',
          position: 'left',
          label: 'Open API docs'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   // {
      //   //   title: 'Docs',
      //   //   items: [
      //   //     {
      //   //       label: 'Tutorial',
      //   //       to: '/docs/intro',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright ?? ${new Date().getFullYear()} My Connector, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editCurrentVersion: false,
          editLocalizedFiles: false
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
            routePath: '/using--url/',
          },
          {
            specUrl: `${process.env.DEPLOY_BASE_URL || '/'}openapi.yaml`,
            routePath: '/api/',
          },
          {
            spec: 'openapi.yaml',
            routePath: '/using-spec-yaml/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
          redocOptions: { hideDownloadButton: false },
        },
      },
    ]
  ],
};
