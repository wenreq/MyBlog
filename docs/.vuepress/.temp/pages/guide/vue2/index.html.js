export const data = {
  "key": "v-5a0e00d7",
  "path": "/guide/vue2/",
  "title": "Vue 2",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Vue 2",
    "description": "Vue 2相关知识点"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "guide/vue2/index.md"
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
