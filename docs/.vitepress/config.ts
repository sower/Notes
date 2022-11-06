import { defineConfig } from 'vitepress';
import { description, version } from '../../package.json';
import { highlight } from './highlight';
import sidebar from './sidebar.json';

const logoUrl = '/ylem.svg';

export default async () => defineConfig({

  title: "Ylem's Notes",
  description,
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: logoUrl }
    ]
  ],
  base: "/",
  // srcDir: "./docs",
  appearance: true,
  lastUpdated: true,
  lang: "zh-CN",
  ignoreDeadLinks: true,

  // 主题配置
  themeConfig: {
    logo: logoUrl,
    //   头部导航
    nav: nav(),

    outline: [1, 4],
    outlineTitle: 'TOC',

    //   侧边导航
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sower/Notes' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ylem'
    },

    editLink: {
      pattern: 'https://github.com/sower/Notes/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdatedText: 'Updated Date'
  },

  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
    toc: {
      level: [1, 2, 3, 4]
    },
    highlight: await highlight(),
    // config: (md) => {
    // }
  }
});


function nav() {
  return [
    { text: 'Contents', link: '/Contents', activeMatch: '/Contents' },
    { text: 'Ravi', link: 'https://ravigation.netlify.app' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sower/Notes/commits'
        }
      ],
    },
  ]
}
