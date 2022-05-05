module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '温少昌的博客',
  description: "Don't pretend to do sth.",
  base: '/blog/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'http://www.wenreq.site/utils/images/gitPicture.jpg',
    // 导航栏
    navbar: [{
      link: "/",
      text: "主页"
    }, {
      link: '/standardDoc/',
      text: '前端规范'

    }, {
      link: '/technology/',
      text: '精进技术',
    }, {
      text: '我的文章',
      link: '/myArticle/markdown'
    }, {
      text: '面试专栏',
      link: '/interview/'
    }, {
      link: '/milestone/',
      text: '逼叨叨',
    }, {
      text: '📚电子书籍',
      children: [{
        text: 'JavaScript高级程序设计(第四版)',
        link: 'http://www.wenreq.site/utils/PDF/JavaScript高级程序设计(第4版) .pdf',
      }, {
        text: '你不知道的JavaScript上',
        link: 'http://www.wenreq.site/utils/PDF/你不知道的JavaScript_上.pdf',
      }, {
        text: '你不知道的JavaScript中',
        link: 'http://www.wenreq.site/utils/PDF/你不知道的JavaScript_中.pdf',
      }, {
        text: '你不知道的JavaScript下',
        link: 'http://www.wenreq.site/utils/PDF/你不知道的JavaScript_下.pdf',
      }, {
        text: 'JavaScript语言精粹',
        link: 'http://www.wenreq.site/utils/PDF/JavaScript语言精粹.pdf',
      }, {
        text: 'JavaScript设计模式与开发实践',
        link: 'http://www.wenreq.site/utils/PDF/JavaScript设计模式与开发实践.pdf',
      }, {
        text: 'Css世界',
        link: 'http://www.wenreq.site/utils/PDF/css世界.pdf'
      }, {
        text: '图解HTTP',
        link: 'http://www.wenreq.site/utils/PDF/图解HTTP.pdf'
      }, {
        text: 'TCP/IP详解卷1：协议',
        link: 'http://www.wenreq.site/utils/PDF/TCP-IP详解卷1：协议.pdf'
      }, {
        text: '编译原理(第二版)',
        link: 'http://www.wenreq.site/utils/PDF/编译原理_0303.pdf'
      }, {
        text: '编译原理及实践',
        link: 'http://www.wenreq.site/utils/PDF/编译原理及实践.pdf'
      }, {
        text: '图解算法',
        link: 'http://www.wenreq.site/utils/PDF/图解算法.pdf'
      }, {
        text: '深入浅出Node.js',
        link: 'http://www.wenreq.site/utils/PDF/深入浅出Node.js.pdf'
      }, {
        text: '前端程序员面试秘籍',
        link: 'http://www.wenreq.site/utils/PDF/前端程序员面试秘籍.pdf'
      }, {
        text: '鸟哥的Linux私房菜基础学习篇.pdf',
        link: 'http://www.wenreq.site/utils/PDF/鸟哥的Linux私房菜基础学习篇.pdf'
      }, {
        text: '见识 吴军',
        link: 'http://www.wenreq.site/utils/PDF/见识 吴军.pdf'
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
        children: [
          '/milestone/2022/03.md',
          '/milestone/2022/04.md',
          '/milestone/2022/05.md'
        ],
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
                '/technology/javaScript/programming/08.md',
                '/technology/javaScript/programming/09.md',
                '/technology/javaScript/programming/10.md',
                '/technology/javaScript/programming/11.md',
                '/technology/javaScript/programming/12.md',
                '/technology/javaScript/programming/13.md',
              ]
            },
            {
              text: "你不知道的JS-上",
              collapsible: true,
              children: [{
                  text: "第一部分 作用域和闭包",
                  collapsible: true,
                  children: [
                    '/technology/javaScript/unaware/01.md',
                    '/technology/javaScript/unaware/02.md',
                    '/technology/javaScript/unaware/03.md',
                    '/technology/javaScript/unaware/04.md',
                    '/technology/javaScript/unaware/05.md',
                    '/technology/javaScript/unaware/1a.md',
                    '/technology/javaScript/unaware/1b.md',
                    '/technology/javaScript/unaware/1c.md',
                  ]
                },
                {
                  text: "第二部分 this和对象原型",
                  collapsible: true,
                  children: [
                    '/technology/javaScript/unaware/06.md',
                    '/technology/javaScript/unaware/07.md',
                    '/technology/javaScript/unaware/08.md',
                    '/technology/javaScript/unaware/09.md',
                    '/technology/javaScript/unaware/10.md',
                    '/technology/javaScript/unaware/11.md',
                    '/technology/javaScript/unaware/2a.md',
                  ]
                }
              ]
            },
            {
              text: "ECMAScript 6 入门",
              collapsible: true,
              children: [
                '/technology/javaScript/es6/introduction.md',
                '/technology/javaScript/es6/01.md',
                '/technology/javaScript/es6/02.md',
                '/technology/javaScript/es6/03.md',
                '/technology/javaScript/es6/04.md',
                '/technology/javaScript/es6/05.md',
                '/technology/javaScript/es6/06.md',
                '/technology/javaScript/es6/07.md',
                '/technology/javaScript/es6/08.md',
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
              text: '第三章: BundLess 基础设施建设',
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
        },
        {
          text: 'Node.js',
          collapsible: true,
          children: [{
            text: "内置模块",
            collapsible: true,
            children: [
              '/technology/node/index.md',
              '/technology/node/01.md',
              '/technology/node/02.md',
              '/technology/node/03.md',
              '/technology/node/04.md'
            ]
          }]
        }
      ],
      '/standardDoc/': [{
          text: '1. 工作流规范',
          collapsible: true,
          children: [
            '/standardDoc/workflow/01.md',
            '/standardDoc/workflow/02.md',
            '/standardDoc/workflow/03.md'
          ]
        },
        {
          text: '2. 技术规范',
          collapsible: true,
          children: [
            '/standardDoc/technologyStack/01.md',
            '/standardDoc/technologyStack/02.md',
            '/standardDoc/technologyStack/03.md',
          ]
        },
        {
          text: '3. 项目组织规范',
          collapsible: true,
          children: [
            '/standardDoc/projectOrg/01.md',
            '/standardDoc/projectOrg/02.md',
            '/standardDoc/projectOrg/03.md',
          ]
        },
        {
          text: '4. 编码规范',
          collapsible: true,
          children: [
            '/standardDoc/codeStyle/01.md',
            '/standardDoc/codeStyle/02.md',
            '/standardDoc/codeStyle/03.md',
            '/standardDoc/codeStyle/04.md',
            '/standardDoc/codeStyle/05.md',
            '/standardDoc/codeStyle/06.md',
            '/standardDoc/codeStyle/07.md',
            '/standardDoc/codeStyle/08.md',
          ]
        },
        {
          text: '5. 前后端协作规范',
          collapsible: true,
          children: [
            '/standardDoc/cooperation/01.md',
            '/standardDoc/cooperation/02.md',
          ]
        },
        {
          text: '6. 培训/知识管理/技术沉淀',
          collapsible: true,
          children: [
            '/standardDoc/knowledge/01.md',
            '/standardDoc/knowledge/02.md',
            '/standardDoc/knowledge/03.md',
          ]
        },
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
          text: 'Git',
          collapsible: true,
          children: [
            '/myArticle/git/operate.md',
            '/myArticle/git/normalize.md',
            '/myArticle/git/github.md'
          ],
        },
        {
          text: 'Web Worker',
          link: '/myArticle/webworker'
        },
        {
          text: '项目',
          collapsible: true,
          children: [
            '/myArticle/project/vue3.md',
            '/myArticle/project/core.md'
          ]
        }
      ]
    }
  },

  // 自定义的 favicon
  head: [
    ['link', {
      rel: 'icon',
      href: 'http://www.wenreq.site/utils/images/webPicture.png'
    }]
  ],

  // 指定开发服务器的端口号。
  port: '7777',

  // 是否在开发服务器启动后打开浏览器。
  open: false,

}