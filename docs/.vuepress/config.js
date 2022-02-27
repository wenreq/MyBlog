module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Wsc',
  description: '敷衍人生，人生也会敷衍你。',
  logo: "http://oss.tianmasport.com/gx/size/2022-02-25/196/946815346529009664.JPG",

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'http://oss.tianmasport.com/gx/size/2022-02-25/196/946815346529009664.JPG',
    navbar: [{
      link: "/",
      text: "首页"
    }, {
      link: "https://github.com/wenreq",
      text: "Github"
    }, {
      text: '相关链接',
      children: ['/guide/vue2/index.md', '/guide/vue3/index.md'],
    }],
  },

  // 自定义的 favicon
  head: [
    ['link', {
      rel: 'icon',
      href: 'http://oss.tianmasport.com/gx/size/2022-02-25/196/946815346529009664.JPG'
    }]
  ],

  // 指定开发服务器的端口号。
  port: '8888',

  // 是否在开发服务器启动后打开浏览器。
  open: false,

}