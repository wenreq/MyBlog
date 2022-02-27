import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-fe51d454","/hello/",{"title":"Hello"},["/hello/index.html","/hello/index.md"]],
  ["v-78b3c03d","/interview/css.html",{"title":"CSS"},["/interview/css","/interview/css.md"]],
  ["v-142c0567","/interview/html.html",{"title":"HTML"},["/interview/html","/interview/html.md"]],
  ["v-399bd625","/interview/javascript.html",{"title":"JavaScript"},["/interview/javascript","/interview/javascript.md"]],
  ["v-ff5a9acc","/interview/vue.html",{"title":"Vue"},["/interview/vue","/interview/vue.md"]],
  ["v-d69cbce8","/interview/web.html",{"title":"Web 相关"},["/interview/web","/interview/web.md"]],
  ["v-349d61c2","/javaScript/base.html",{"title":"基础"},["/javaScript/base","/javaScript/base.md"]],
  ["v-e4dee100","/javaScript/dom.html",{"title":"DOM 相关"},["/javaScript/dom","/javaScript/dom.md"]],
  ["v-76c15d23","/milestone/2022.html",{"title":2022},["/milestone/2022","/milestone/2022.md"]],
  ["v-0d3effc9","/myArticle/githubPage.html",{"title":"GitHubPages 部署项目"},["/myArticle/githubPage","/myArticle/githubPage.md"]],
  ["v-5dc60dc7","/myArticle/other.html",{"title":"其它记录"},["/myArticle/other","/myArticle/other.md"]],
  ["v-6da6abb1","/typescript/",{"title":"TypeScript"},["/typescript/index.html","/typescript/index.md"]],
  ["v-157886ea","/vue2/",{"title":"Vue 2"},["/vue2/index.html","/vue2/index.md"]],
  ["v-15788709","/vue3/",{"title":"Vue 3"},["/vue3/index.html","/vue3/index.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
