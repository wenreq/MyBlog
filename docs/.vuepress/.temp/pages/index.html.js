export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "http://oss.tianmasport.com/gx/size/2022-02-25/196/946815346529009664.JPG",
    "heroText": "Wen1994",
    "tagline": "敷衍人生，人生也会敷衍你。",
    "actionText": "开始 →",
    "actionLink": "/zh/guide/",
    "features": [
      {
        "title": "里程碑",
        "details": "记录自己的程序员职业开发手册，将日常的开发记录在里程碑中。"
      },
      {
        "title": "JavaScript",
        "details": "主要以 JavaScript 的笔记为主，将日常开发中的各种 API 和一些写法记录在此。"
      },
      {
        "title": "更多技术",
        "details": "除 JS 外，还有一些 Vue、Vue3、TypeScript 和其它技术等最新特性的记录。"
      }
    ],
    "footer": "Wen1994 | 苏ICP备2022044540号-2"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
