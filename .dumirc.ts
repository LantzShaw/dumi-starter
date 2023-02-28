import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  // NOTE: 设置此项可以在编写.md demo时，可以直接使用最终发布的npm包模式，e.g. import { Button } 'litecase-ui'
  alias: {
    'litecase-ui': path.resolve(__dirname, './packages'),
  },
  resolve: {
    // NOTE: 有时候配置这个可能是.md文件中import会报错 例如: import { Foo } from 'litecase-ui'
    atomDirs: [{ type: 'component', dir: 'packages/ui/src/components' }],
  },
  themeConfig: {
    name: 'litecase ui',
    nav: {
      'en-US': [
        { title: 'Guide', link: '/guide' },
        { title: 'Components', link: '/components' },
      ],
      'zh-CN': [{ title: '指南', link: '/zh-CN/guide' }],
    },
    socialLinks: {
      github: 'https://github.com/LantzShaw/litecase-ui',
    },
    footer: false,
    // footer: 'Copyright © 2023-present | Powered by litecase',
  },
});
