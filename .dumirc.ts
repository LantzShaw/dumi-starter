import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
  themeConfig: {
    name: 'litecase ui',
    nav: {
      'en-US': [
        { title: 'Guide', link: '/guide' },
        { title: 'Components', link: '/components/foo' },
      ],
      'zh-CN': [{ title: '指南', link: '/zh-CN/guide' }],
    },
    socialLinks: {
      github: 'https://github.com/LantzShaw/litecase-ui',
    },
    footer: 'Copyright © 2023-present | Powered by litecase',
  },
});
