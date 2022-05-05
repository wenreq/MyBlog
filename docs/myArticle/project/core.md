---
title: 2. vue项目中的一些核心技能
lang: zh-CN
---


很多脚手架搭建的 `vue` 的管理系统项目，其核心模块的处理方式大致上都是一样的。

所以，我结合之前项目，整理了一下重要模块的解决方案。

## 目录

1. `Axios` 拦截器和二次封装
2. `Vuex` 数据持久化
3. 路由守卫和动态路由的挂载
4. 环境变量的配置文件
5. 封装一个按钮级权限的自定义指令

## 1. Axios 拦截器和二次封装

### 1.1 Axios 请求和响应拦截器

```js
// 引入 vue 和 axios 模块
import Vue from 'vue'
import axios from 'axios'
// 环境变量中的请求地址
const baseURL = process.env.VUE_APP_API_BASE_URL

// axios 的配置变量
const config = {
  baseURL: baseURL,
  timeout: 1000 * 60 * 3 // Timeout
}

// 创建 axios 实例
const _axios = axios.create(config)

// axios 的请求拦击器
_axios.interceptors.request.use(
  function (config) {
    // 每发起一次请求时，将本地存储的 token 值添加到请求头中。
    const token = Vue.ls.get(ACCESS_TOKEN)
    config.headers['token'] = token
    // 返回新的配置项
    return config
  },
  // 失败 则返回失败信息
  function (error) {
    return Promise.reject(error)
  }
)

// axios 的响应拦击器
_axios.interceptors.response.use(
  function (response) {
    // 解构出响应对象中的 code 和 msg
    const { code, msg } = response.data
    // 响应头中的 content-type 类型
    const _content_type = response.headers['content-type']
    // 是否为导出
    if (_content_type === _export) {
      return Promise.resolve(response)
    }
    // 匹配 code 值，和后端约定。
    // 0：响应成功-返回响应体；20000：用户token为空 20001：用户信息为空。20002：登录失效，请重新登录。
    switch (code) {
      case 0:
        return Promise.resolve(response)
      case 20000:
      case 20001:
      case 20002:
        router.replace({ path: '/login' })
        return Promise.reject(msg)
      default:
        return msg && Promise.reject(msg)
    }
  },
  // 失败 则返回失败信息
  function (error) {
    return Promise.reject(error.message)
  }
)
```

### 1.2 Axios 二次封装

```js
import notification from 'ant-design-vue/es/notification'

/**
 * GET 方法
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @returns Promise
 */
export function httpGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.warn(err, 'WARN')
        reject(err)
      })
  })
}

/**
 *
 * POST 方法
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @returns Promise
 */
export function httpPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        if (err === undefined || err.__CANCEL__) {
          return false
        }
        notification.error({
          title: '错误',
          message: err
        })
        reject(err)
      })
  })
}
```

## 2. Vuex 的数据持久化

`Vuex` 中的数据在经过页面刷新后，值都会被重制为初始化状态。`Vuex` 的数据持久化，可以保证页面刷新后数据的不变性。

很简单的处理方式。

分析：页面在刷新后，`Vue` 引用重新加载 `main.js` 入口文件，这时也就加载了写入的 js 文件（用来处理重新往 `Vuex` 中的塞值操作）。

```js
// mian.js
import bootstrap from './core/bootstrap'

// ./core/bootstrap.js
import Vue from 'vue'
import store from '@/store/'

export default function Initializer () {
  store.commit('SET_TOKEN', Vue.ls.get('ACCESS_TOKEN'))
  store.commit('SET_MENUS', Vue.ls.get('MENU_LIST'))
  store.commit('SET_USER_BTN', Vue.ls.get('USER_BTN'))
}
```

## 3. 路由守卫和动态路由的挂载

### 3.1 路由守卫

路由守卫，正如其名，`vue-router` 提供的导航守卫主要用来通过**跳转或取消**的方式守卫导航。

你可以使用 `router.beforeEach` 注册一个全局**前置守卫**和 `router.afterEach` 全局**后置钩子**：

```js
import router from '@/router'

import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 进度条开始
  NProgress.start()
  // 判读本地存储中是否由 Token
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === '/login') { // 跳转到 login 放行，然后结束进度条。
      next()
      NProgress.done()
    } else { // 跳转其他
      // 动态路由的挂载，见 3.2 动态路由的挂载
      ...
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

// 全局后置钩子
router.afterEach(() => {
  NProgress.done()
})
```

### 3.2 动态路由的挂载

动态路由的挂载的逻辑也是在“全局前置守卫”中进行的处理。

```js
if (Vue.ls.get(ACCESS_TOKEN)) {
  if (to.path === '/login') {
    next()
    NProgress.done()
  } else { // 跳转其他
    // 判读 vuex store 中 has 的变量标识
    const has = store.getters.has
    // 没有 has 变量，动态的添加路由
    if (!has) {
      // 获取本地存储中的后端路由数据
      const menus = Vue.ls.get(MENU_LIST)
      // 调用 Vuex 中的 GenerateRoutes 异步方法将路由数据进行追加处理
      store
        .dispatch('GenerateRoutes', menus)
        .then(res => {
          // 追加挂载处理
          router.addRoutes(store.getters.addRouters)
          // decodeURIComponent 将已编码 URI 中所有能识别的转义序列转换成原字符。
          const redirect = decodeURIComponent(to.path)
          if (to.path === redirect) {
            // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            next({ ...to, replace: true })
          } else {
            // 跳转到目的路由
            next({ path: redirect })
          }
        })
        .catch(() => {
          // 错误处理
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重新登录'
          })
          next('/login')
        })
    } else { // 有 has 变量，放行，跳转。
      next()
    }
  }
}
```

## 4. 环境变量的配置文件

生产环境和开发环境用的服务器地址、端口号都不一样，这时我们需要配置环境变量的文件，以在不同环境使用对应的请求地址。

文件一般分为 `.env` 和 `.env.development` 文件。

- `.env`：是生产环境读取的环境变量文件。
- `.env.development`：是开发环境读取的环境变量文件。

也可以根据不同环境定制文件。如：`.env.test217` 文件。

相应的需要在 `package.json` 文件中配置对应的命令，在 `CI` 过程中注意修改下指令的名称即可。

```json
// package.json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "test217": "vue-cli-service build --mode test217",
},
```

* `npm run serve` 命令读取的是 `.env.development` 文件中的环境变量
* `npm run build` 命令读取的是 `.env` 文件中的环境变量
* `npm run test217` 命令读取的是 `.env.test217` 文件中的环境变量

```env
// .env
NODE_ENV = 'production'
VUE_APP_FLAG = 'pro'
VUE_APP_API_BASE_URL='https://xx.ss.com/api'
```

```env
// .env.development
NODE_ENV = 'development'
VUE_APP_FLAG = 'dev'
VUE_APP_API_BASE_URL='http://127.0.0.1:80/api'
```

```env
// .env.test217
NODE_ENV = 'production'
VUE_APP_FLAG = 'dev'
VUE_APP_API_BASE_URL='http://127.0.0.1:8087/api'
```

`axios` 中的 `config` 中的 `baseURL` 变量就可以这样根据不同的环境设置了。`process.env` 是全局变量，可以直接访问 `.env` 文件中的变量。

```js
const baseURL = process.env.VUE_APP_API_BASE_URL
```

## 5. 封装一个按钮级权限的自定义指令

1. 在入口文件 `main.js` 中引入自定义指令的文件。

```js
// main.js 
import './directives/action'
```

2. Code feature

```js
// 引入 Vue 和 store
import Vue from 'vue'
import store from '@/store'

/*
* 定义一个函数表达式
* action - 指令名称
* inserted - 被绑定的元素插入父节点的时候调用(父节点存在即可调用，不必存在document中)
*/ 
const action = Vue.directive('action', {
  inserted: function (el, binding, vnode) {
    const actionName = binding.arg
    // Vuex Store 中的 userBtn 数据
    const userBtn = store.getters.userBtn
    // 当前路由中的 menuId
    const menuId = vnode.context.$route.meta.menuId
    // 过滤出按钮的 list
    const btnList = userBtn.filter(item => item.pId === menuId && item.mType === 2)
    // 判读值是否在 btnList 中，在返回 false，否则返回 true。
    function _has (value) {
      let isExist = true
      for (let i = 0; i < btnList.length; i++) {
        if (btnList[i].identifier && btnList[i].identifier === value) {
          isExist = false
        }
      }
      return isExist
    }
    // 判断按钮是否在btnList中，不在就删除或移除改按钮 DOM。
    if (_has(actionName)) {
      el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
    }
  }
})

// 导出默认这个函数表达式
export default action
```
