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
          { text: 'Changelog Placeholder', link: '/src/changelog' },
          { text: 'Devices Placeholder', link: '/devices/devices' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aosPB-Project' }
    ]
  }
})
