import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aosPB-Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Source Changelog', link: '/src/changelog/changelog.md' },
          { text: 'Officially Supported Devices', link: '/src/devices/devices.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aosPB-Project' }
    ]
  }
})
