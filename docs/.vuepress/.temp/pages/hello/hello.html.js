export const data = {
  "key": "v-7b071d9d",
  "path": "/hello/hello.html",
  "title": "Hello",
  "lang": "zh-CN",
  "frontmatter": {},
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
  "filePathRelative": "hello/hello.md"
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
