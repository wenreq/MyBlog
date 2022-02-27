export const data = {
  "key": "v-621e4cee",
  "path": "/guide/hello/",
  "title": "Hello",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Hello",
    "description": "hello-desc"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1645934244000,
    "contributors": [
      {
        "name": "wenreq",
        "email": "294491328@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/hello/index.md"
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
