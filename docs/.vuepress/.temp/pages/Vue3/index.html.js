export const data = {
  "key": "v-15788709",
  "path": "/vue3/",
  "title": "Vue 3",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Vue 3",
    "description": "Vue 3 相关知识点"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "vue3/index.md"
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
