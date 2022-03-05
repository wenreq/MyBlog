module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '温少昌的博客',
  description: '想要得到你从未拥有过的东西，你必须做些你从没做过的事情。',
  base: '/blog/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'http://124.222.234.238/utils/images/gitPicture.jpg',
    // 导航栏
    navbar: [{
      link: "/",
      text: "主页"
    }, {
      link: '/milestone/',
      text: '逼叨叨',
    }, {
      link: '/technology/',
      text: '精进技术',
    }, {
      text: '面试',
      link: '/interview/'
    }, {
      text: '我的文章',
      link: '/myArticle/githubPage'
    }, {
      text: '📚电子书籍',
      children: [{
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
        text: '编译原理及实践',
        link: 'http://124.222.234.238/utils/PDF/编译原理及实践.pdf'
      }, {
        text: '图解算法',
        link: 'http://124.222.234.238/utils/PDF/图解算法.pdf'
      }, {
        text: '深入浅出Node.js',
        link: 'http://124.222.234.238/utils/PDF/深入浅出Node.js.pdf'
      }, {
        text: '前端程序员面试秘籍',
        link: 'http://124.222.234.238/utils/PDF/前端程序员面试秘籍.pdf'
      }, {
        text: '鸟哥的Linux私房菜基础学习篇.pdf',
        link: 'http://124.222.234.238/utils/PDF/鸟哥的Linux私房菜基础学习篇.pdf'
      }, {
        text: '见识 吴军',
        link: 'http://124.222.234.238/utils/PDF/见识 吴军.pdf'
      }],
    }, {
      link: "https://github.com/wenreq",
      text: "Github"
    }],

    // 侧边栏
    sidebar: {
      '/milestone/': [
        {
          text: '2022',
          collapsible: true,
          children: ['/milestone/2022/03.md', '/milestone/2022/04.md'],
        }
      ],
      '/technology/': [
        {
          text: 'JavaScript',
          collapsible: true,
          children: ['/technology/javaScript/base.md', '/technology/javaScript/dom.md'],
        },
        {
          text: 'Typescript',
          link: '/technology/typescript/'
        },
        {
          text: 'Vue 2',
          link: '/technology/vue2/'
        },
        {
          text: 'Vue 3',
          link: '/technology/vue3/'
        }
      ],
      '/interview': [
        {
          text: '目录',
          link: '/interview/'
        },
        {
          text: 'HTML',
          link: '/interview/html/'
        },
        {
          text: 'CSS',
          link: '/interview/css/'
        },
        {
          text: 'JavaScript',
          link: '/interview/javaScript/'
        },
        {
          text: 'Vue',
          link: '/interview/vue/'
        },
        {
          text: 'Web',
          link: '/interview/web/'
        }
      ],
      '/myArticle': [
        {
          text: 'GithubPage',
          link: '/myArticle/githubPage'
        },
        {
          text: '其他',
          link: '/myArticle/other'
        }
      ]
    }
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