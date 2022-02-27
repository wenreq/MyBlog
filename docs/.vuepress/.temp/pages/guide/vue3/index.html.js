export const data = {
  "key": "v-5a0e00f6",
  "path": "/guide/vue3/",
  "title": "Vue 3",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Vue 3",
    "description": "Vue 3 相关知识点"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "guide/vue3/index.md"
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
