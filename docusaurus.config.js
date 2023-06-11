// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Infinigen",
  tagline: "100% Procedural and Open-Source.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "princeton-vl", // Usually your GitHub org/user name.
  projectName: "infinigen", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-documentation",
        path: "docs-documentation",
        routeBasePath: "docs-documentation",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-contributing",
        path: "docs-contributing",
        routeBasePath: "docs-contributing",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "docs-faq",
    //     path: "docs-faq",
    //     routeBasePath: "docs-faq",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //   },
    // ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-get-started",
        path: "docs-get-started",
        routeBasePath: "docs-get-started",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "Infinigen Logo",
          src: "logos/INFINIGEN_White_Background.svg",
          srcDark: "logos/INFINIGEN_Dark_Background.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Get Started",
          },
          {
            to: "/docs-documentation/begin", // ./docs-documentation/Intro.md
            label: "Documentation",
            position: "left",
            activeBaseRegex: `/docs-documentation/`,
          },
          {
            to: "/docs-get-started/gallery", // ./docs-documentation/Intro.md
            label: "Downloads",
            position: "left",
            activeBaseRegex: `/docs-get-started/`,
          },
          { to: "InfGridGallery", label: "Gallery", position: "left" },
          {
            to: "/docs-contributing/begin", // ./docs-documentation/Intro.md
            label: "Community",
            position: "left",
            activeBaseRegex: `/docs-contributing/`,
          },
          { to: "faq", label: "FAQ", position: "left" },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://twitter.com",
            // label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://github.com/princeton-vl",
            // label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Youtube",
                href: "https://google.com",
              },
              {
                label: "Twitter",
                href: "https://google.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://google.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infinigen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
