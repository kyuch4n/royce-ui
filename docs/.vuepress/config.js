module.exports = {
  title: "RoyceUI",
  base: "/royce-ui/",
  description: "A Vue.js 2.0 Less Used UI Toolkit",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/Royce.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/Royce.png"}],
    ['link', { rel: "shortcut icon", href: "/Royce.ico"}],
  ],
  port: 8000,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/components/guide/introduction" },
      { text: "更新日志", link: "/change-log/v1/versions" },
    ],
    sidebar: {
      "/components/": [
        {
          title: "开发指南",
          collapsable: false,
          children: ["guide/introduction", "guide/installation", "guide/quickstart", "guide/custom-theme"],
        },
        {
          title: "组件",
          collapsable: false,
          children: ["basic/resize-box"],
        },
      ],
      "/change-log/": [
        {
          title: "更新日志",
          collapsable: false,
          children: ["v1/versions"],
        },
      ],
    },
  },
  chainWebpack: config => config.module.rule("js").exclude.add(/royce-ui/),
};
