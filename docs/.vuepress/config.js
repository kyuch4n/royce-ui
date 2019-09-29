module.exports = {
  title: "RoyceUI",
  base: "/royce-ui/",
  description: "A Vue.js 2.0 Less Used UI Toolkit",
  port: 8000, 
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '主题', link: '/theme/' },
    ],
    sidebar: {
      '/component/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'guide/introduction',
            'guide/guide'
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'basic/button',
            'basic/input',
            'basic/form',
            'basic/notice'
          ]
        },
      ]
    }
  },
  chainWebpack: config => config.module.rule("js").exclude.add(/royce-ui/),
}