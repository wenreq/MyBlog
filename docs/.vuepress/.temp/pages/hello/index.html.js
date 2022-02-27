export const data = {
  "key": "v-fe51d454",
  "path": "/hello/",
  "title": "页面的标题",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "页面的标题",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Welcome to my Blog",
      "slug": "welcome-to-my-blog",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "hello/README.md"
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
