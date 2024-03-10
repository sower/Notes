import { defineConfig } from 'vitepress';
import { description, version } from '../../package.json';
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
  lastUpdated: false,
  lang: "zh-CN",
  ignoreDeadLinks: true,

  // 主题配置
  themeConfig: {
    logo: logoUrl,
    //   头部导航
    nav: nav(),
    search: {
      provider: 'local'
    },

    outline: [1, 4],
    outlineTitle: '⚔ TOC',

    //   侧边导航
    sidebar,

    socialLinks: [
      { icon: { svg: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 3L3 10.53v.97l6.84 2.66L12.5 21h.96L21 3Z"/></svg>' }, link: 'https://ravigation.netlify.app' },
      { icon: { svg: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.84 14.5c-.26-.17-.62-.61-.79-.82C17.24 12 19 8.87 19 5c0-1.95-.74-3-2-3c-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5c0 3.87 1.76 7 2.95 8.68c-.17.21-.53.65-.79.82c-.5.43-1.66 1.39-1.66 3c0 2.21 1.79 4 4 4c1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4c0-1.61-1.16-2.57-1.66-3m-7.49-2.3C8.34 10.7 7 8.12 7 5c0-.5.06-.8.12-.97c.94.31 3.24 2.71 3.38 7.64c-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5s1 .22 1 .5s-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64c.06.17.12.47.12.97c0 3.12-1.34 5.7-2.35 7.2c-.31-.23-.68-.41-1.15-.53Z"/></svg>', }, link: 'https://cfai.netlify.app' },
      { icon: 'github', link: 'https://github.com/sower/Notes' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ylem'
    },

    editLink: {
      pattern: 'https://github.com/sower/Notes/tree/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    lastUpdatedText: 'Updated Date'
  },

  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
    toc: {
      level: [1, 2, 3, 4]
    },
    // highlight: await highlight(),
    // config: (md) => {
    // }
  }
});


function nav() {
  return [
    { text: 'Contents', link: '/Contents', activeMatch: '/Contents' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sower/Notes/commits'
        },
        {
          text: 'Netlify',
          link: 'https://ylem-notes.netlify.app'
        },
        {
          text: 'Vercel',
          link: 'https://ylem-notes.vercel.app'
        },
      ],
    },
  ]
}
