export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "Wsc",
  "description": "敷衍人生，人生也会敷衍你。",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "http://oss.tianmasport.com/gx/size/2022-02-25/196/946815346529009664.JPG"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
