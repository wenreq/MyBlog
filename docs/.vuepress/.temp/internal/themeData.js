export const themeData = {
  "logo": "http://oss.tianmasport.com/gx/size/2022-02-25/196/946815346529009664.JPG",
  "navbar": [
    {
      "link": "/",
      "text": "首页"
    },
    {
      "link": "https://github.com/wenreq",
      "text": "Github"
    },
    {
      "text": "相关链接",
      "children": [
        "/guide/vue2/index.md",
        "/guide/vue3/index.md"
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
