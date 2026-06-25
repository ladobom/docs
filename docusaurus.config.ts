import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lado Bom Docs',
  tagline: 'Central de conhecimento da Lado Bom Seguros',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ladobom.com',
  baseUrl: '/',
  organizationName: 'ladobom',
  projectName: 'ladobom-docs-docusaurus',

  onBrokenLinks: 'throw',
  trailingSlash: false,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/apple-touch-icon.png',
    metadata: [
      {
        name: 'description',
        content:
          'Central de conhecimento para clientes, parceiros e colaboradores da Lado Bom Seguros.',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Lado Bom Docs',
        src: 'img/ladobom-logo-light.svg',
        srcDark: 'img/ladobom-logo-dark.svg',
      },
      items: [

        {
          href: 'https://wa.me/5548988644179',
          label: 'Suporte',
          position: 'right',
        },
        {
          href: 'https://app.ladobom.com/',
          label: 'Acessar Plataforma',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Produtos',
          items: [
            {label: 'Seguro Fiança', to: '/produtos/seguro-fianca/sobre'},
            {label: 'Seguro Incêndio', to: '/produtos/seguro-incendio/sobre'},
            {label: 'Capitalização', to: '/produtos/capitalizacao/sobre'},
            {
              label: 'Prestamista',
              to: '/produtos/prestamista-capital-vinculado/sobre',
            },
          ],
        },
        {
          title: 'Atendimento',
          items: [
            {label: 'Contato', to: '/contato'},
            {label: 'SLA de Atendimento', to: '/sla-atendimento'},
            {label: 'WhatsApp', href: 'https://wa.me/5548988644179'},
          ],
        },
        {
          title: 'Canais',
          items: [
            {label: 'Portal do Parceiro', href: 'https://app.ladobom.com/'},
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/lado-bom-seguros/',
            },
            {label: 'Instagram', href: 'https://instagram.com/ladobom.seguros'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lado Bom Seguros.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
