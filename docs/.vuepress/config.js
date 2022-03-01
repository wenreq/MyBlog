module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Wsc',
  description: '敷衍人生，人生也会敷衍你。',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947467063817928704.jpg',
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
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947494355466190848.pdf',
      }, {
        text: '你不知道的JavaScript上',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947495118225539072.pdf',
      }, {
        text: '你不知道的JavaScript中',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947497536531202048.pdf',
      }, {
        text: '你不知道的JavaScript下',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947495385331400704.pdf',
      }, {
        text: 'JavaScript语言精粹',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947498714778304512.pdf',
      }, {
        text: 'JavaScript设计模式与开发实践',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947505246383374336.pdf',
      }, {
        text: 'Css世界',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947499017846128640.pdf'
      }, {
        text: '图解HTTP',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947499404539985920.pdf'
      }, {
        text: 'TCP/IP详解卷1：协议',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947499557262983168.pdf'
      }, {
        text: '编译原理(第二版)',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947504512862519296.pdf'
      }, {
        text: '图解算法',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947500714517594112.pdf'
      }, {
        text: '深入浅出Node.js',
        link: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947499017846128640.pdf'
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
      href: 'http://oss.tianmasport.com/gx/size/2022-02-27/196/947466858800349184.png'
    }]
  ],

  // 指定开发服务器的端口号。
  port: '7777',

  // 是否在开发服务器启动后打开浏览器。
  open: false,

}