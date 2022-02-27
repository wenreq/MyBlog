import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-621e4cee","/guide/hello/",{"title":"Hello"},["/guide/hello/index.html","/guide/hello/index.md"]],
  ["v-77f07450","/guide/milestone/2022.html",{"title":"里程碑"},["/guide/milestone/2022","/guide/milestone/2022.md"]],
  ["v-5a0e00f6","/guide/vue3/",{"title":"Vue 3"},["/guide/vue3/index.html","/guide/vue3/index.md"]],
  ["v-5a0e00d7","/guide/vue2/",{"title":"Vue 2"},["/guide/vue2/index.html","/guide/vue2/index.md"]],
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
