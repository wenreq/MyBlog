module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Wsc',
  description: '想要得到你从未拥有过的东西，你必须做些你从没做过的事情。',
  base: '/blog/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'http://124.222.234.238/utils/images/gitPicture.jpg',
    // 导航栏
    navbar: [{
      link: "/",
      text: "首页"
    }, {
      link: "https://github.com/wenreq",
      text: "Github"
    }, {
      text: '相关链接',
      children: [{
        text: 'Vue3',
        link: 'https://v3.cn.vuejs.org/',
      }, {
        text: 'Vue3-new',
        link: 'https://staging-cn.vuejs.org/',
      }, {
        text: 'Vite',
        link: 'https://cn.vitejs.dev/',
      }, {
        text: 'Pinia',
        link: 'https://pinia.vuejs.org/',
      }, {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      }, {
        text: 'JavaScript高级程序设计(第四版)',
        link: 'http://124.222.234.238/utils/PDF/JavaScript高级程序设计(第4版) .pdf',
      }, {
        text: '你不知道的JavaScript上',
        link: 'http://124.222.234.238/utils/PDF/你不知道的JavaScript_上.pdf',
      }, {
        text: '你不知道的JavaScript中',
        link: 'http://124.222.234.238/utils/PDF/你不知道的JavaScript_中.pdf',
      }, {
        text: '你不知道的JavaScript下',
        link: 'http://124.222.234.238/utils/PDF/你不知道的JavaScript_下.pdf',
      }, {
        text: 'JavaScript语言精粹',
        link: 'http://124.222.234.238/utils/PDF/JavaScript语言精粹.pdf',
      }, {
        text: 'JavaScript设计模式与开发实践',
        link: 'http://124.222.234.238/utils/PDF/JavaScript设计模式与开发实践.pdf',
      }, {
        text: 'Css世界',
        link: 'http://124.222.234.238/utils/PDF/css世界.pdf'
      }, {
        text: '图解HTTP',
        link: 'http://124.222.234.238/utils/PDF/图解HTTP.pdf'
      }, {
        text: 'TCP/IP详解卷1：协议',
        link: 'http://124.222.234.238/utils/PDF/TCP-IP详解卷1：协议.pdf'
      }, {
        text: '编译原理(第二版)',
        link: 'http://124.222.234.238/utils/PDF/编译原理_0303.pdf'
      }, {
        text: '图解算法',
        link: 'http://124.222.234.238/utils/PDF/图解算法.pdf'
      }, {
        text: '深入浅出Node.js',
        link: 'http://124.222.234.238/utils/PDF/深入浅出Node.js.pdf'
      }, {
        text: '前端程序员面试秘籍',
        link: 'http://124.222.234.238/utils/PDF/前端程序员面试秘籍.pdf'
      }],
    }],
    // 侧边栏 - 所有页面会使用相同的侧边栏
    sidebar: [
      '/hello',
      {
        text: '里程碑',
        collapsible: true,
        children: [
          '/milestone/2022',
        ]
      },
      '/vue3',
      '/vue2',
      '/typescript',
      {
        text: 'JavaScript',
        collapsible: true,
        children: [
          '/javaScript/base',
          '/javaScript/dom'
        ]
      },
      {
        text: '我的文章',
        collapsible: true,
        children: [
          '/myArticle/githubPage',
          '/myArticle/other'
        ]
      },
      {
        text: '面试题',
        collapsible: true,
        children: [
          '/interview/html',
          '/interview/css',
          '/interview/javascript',
          '/interview/vue'
        ]
      }
    ]
  },

  // 自定义的 favicon
  head: [
    ['link', {
      rel: 'icon',
      href: 'http://124.222.234.238/utils/images/webPicture.png'
    }]
  ],

  // 指定开发服务器的端口号。
  port: '7777',

  // 是否在开发服务器启动后打开浏览器。
  open: false,

}