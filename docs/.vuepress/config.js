module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '温少昌的博客',
  description: '想要得到你从未拥有过的东西,你必须做些你从没做过的事情。',
  base: '/blog/',

  // 主题和它的配置
  // theme: '@vuepress/theme-default',
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
      link: '/myArticle/markdown'
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
      '/milestone/': [{
        text: '2022',
        collapsible: true,
        children: ['/milestone/2022/03.md', '/milestone/2022/04.md'],
      }],
      '/technology/': [{
          text: 'JavaScript',
          collapsible: true,
          children: [{
              text: "JS高级程序设计第四版",
              collapsible: true,
              children: [
                '/technology/javaScript/programming/introduction.md',
                '/technology/javaScript/programming/01.md',
                '/technology/javaScript/programming/02.md',
                '/technology/javaScript/programming/03.md',
                '/technology/javaScript/programming/04.md',
                '/technology/javaScript/programming/05.md',
                '/technology/javaScript/programming/06.md',
                '/technology/javaScript/programming/07.md',
              ]
            },
            {
              text: "你不知道的JS-上",
              collapsible: true,
              children: [
                '/technology/javaScript/unaware/01.md',
              ]
            }
          ],
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
        },
        {
          text: '前端工程化',
          collapsible: true,
          children: [{
            text: '打包篇',
            collapsible: true,
            children: [{
              text: '第一章: Bundle 基础设施建设',
              collapsible: true,
              children: [
                '/technology/engineering/build/01.md',
                '/technology/engineering/build/02.md',
                '/technology/engineering/build/03.md',
                '/technology/engineering/build/04.md',
                '/technology/engineering/build/05.md',
                '/technology/engineering/build/06.md',
                '/technology/engineering/build/07.md',
                '/technology/engineering/build/08.md',
                '/technology/engineering/build/09.md'
              ]
            }, {
              text: '第二章: 打包体积优化',
              collapsible: true,
              children: [
                '/technology/engineering/build/10.md',
                '/technology/engineering/build/11.md',
                '/technology/engineering/build/12.md',
                '/technology/engineering/build/13.md',
                '/technology/engineering/build/14.md'
              ]
            }, {
              text: '第三章: Bundless 基础设施建设',
              collapsible: true,
              children: [
                '/technology/engineering/build/15.md',
                '/technology/engineering/build/16.md',
                '/technology/engineering/build/17.md'
              ]
            }],
          }, {
            text: '开发篇',
            collapsible: true,
            children: [{
              text: '第四章: npm package 开发',
              collapsible: true,
              children: [
                '/technology/engineering/develop/18.md',
                '/technology/engineering/develop/19.md',
                '/technology/engineering/develop/20.md',
                '/technology/engineering/develop/21.md',
                '/technology/engineering/develop/22.md',
                '/technology/engineering/develop/23.md',
                '/technology/engineering/develop/24.md',
                '/technology/engineering/develop/25.md',
              ]
            }, {
              text: '第五章: 包管理工具',
              collapsible: true,
              children: [
                '/technology/engineering/develop/26.md',
                '/technology/engineering/develop/27.md',
                '/technology/engineering/develop/28.md',
              ]
            }],
          }, {
            text: '运维篇',
            collapsible: true,
            children: [{
              text: '第六章: 前端质量保障',
              collapsible: true,
              children: [
                '/technology/engineering/operation/29.md',
                '/technology/engineering/operation/30.md',
                '/technology/engineering/operation/31.md',
                '/technology/engineering/operation/32.md',
                '/technology/engineering/operation/33.md',
                '/technology/engineering/operation/34.md',
              ]
            }, {
              text: '第七章: 包管理工具',
              collapsible: true,
              children: [
                '/technology/engineering/operation/35.md',
                '/technology/engineering/operation/36.md',
                '/technology/engineering/operation/37.md',
                '/technology/engineering/operation/38.md',
              ]
            }],
          }],
        }
      ],
      '/interview': [{
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
      '/myArticle': [{
          text: 'MarkDown语法',
          link: '/myArticle/markdown'
        }, {
          text: 'git操作',
          link: '/myArticle/git'
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