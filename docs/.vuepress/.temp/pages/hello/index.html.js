export const data = {
  "key": "v-fe51d454",
  "path": "/hello/",
  "title": "Hello",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Hello",
    "description": "hello-desc"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Welcome to my blog",
      "slug": "welcome-to-my-blog",
      "children": [
        {
          "level": 3,
          "title": "Hi there,I'm WSC",
          "slug": "hi-there-i-m-wsc",
          "children": []
        },
        {
          "level": 3,
          "title": "技术",
          "slug": "技术",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "高效开发",
      "slug": "高效开发",
      "children": []
    },
    {
      "level": 2,
      "title": "推荐给你",
      "slug": "推荐给你",
      "children": [
        {
          "level": 3,
          "title": "安装🔧",
          "slug": "安装",
          "children": []
        },
        {
          "level": 3,
          "title": "快速上手🔑",
          "slug": "快速上手",
          "children": []
        },
        {
          "level": 3,
          "title": "npm 链接🔗",
          "slug": "npm-链接",
          "children": []
        },
        {
          "level": 3,
          "title": "贡献者👋",
          "slug": "贡献者👋",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "hello/index.md"
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
