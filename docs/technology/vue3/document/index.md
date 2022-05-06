---
title: 1. 开始
lang: zh-CN
---

[Vue 3 的文档](https://staging-cn.vuejs.org/guide/extras/reactivity-transform.html)

## 1.1 简介

你正在阅读的是 Vue 3 的文档！

### 什么是 Vue？

Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面，无论任务是简单还是复杂。

### 渐进式框架

根据你的需求场景，Vue 可以按不同的方式使用：

- 增强静态的 HTML 而无需构建步骤
- 在任何页面中作为 Web Components 嵌入
- 单页面应用（SPA）
- 全栈 / 服务端渲染（SSR）
- Jamstack / 静态站点生成（SSG）
- 目标为桌面端、移动端、WebGL，甚至是命令行终端

### 单文件组件

单文件组件 (也被称为 `*.vue` 文件，英文缩写为 **SFC**)。顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里。单文件组件时 Vue 的标志性功能。

### API 风格

Vue 的组件可以按两种不同的风格书写：**选项式 API** 和**组合式 API**。

#### 选项式 API

用多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted`。选项所定义的属性都会暴露在函数内部的的 this 上，它会指向当前的组件实例。

#### 组合式 API

使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [script setup](https://staging-cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行转换，来减少使用组合 API 时的样板代码。例如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

```vue
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 声明周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## 1.2 快速开始

### 采用构建工具

```sh
> npm init vue@latest
```

这一指令将会安装并执行 [create vue](https://github.com/vuejs/create-vue)，它是 Vue 官网的项目脚手架工具。

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formating? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

如果不确定是否要开启某个功能，你可以直接按下回车键选择 `No`。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```sh
> cd <your-project-name>
> npm install
> npm run dev
```

当你准备将应用发布到生产环境时，请运行：

```sh
> npm run build
```

### 不使用构建工具

若不想经过构建流程就可以使用 Vue，请直接复制下面的代码到一个 HTML 文件中，并在浏览器中打开它：

```html
<script src="https://unpkg.com/vue@3"></script>

<div id="app">{{ message }}</div>

<script>
  Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

在全局构建版可用的情况下，为保持一致性，在该文档的其余部分我们会主要使用 ES 模块语法。若想通过原生 ES 模块使用 Vue，请使用下面这样的 HTML：

```html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

### 通过 HTTP 提供服务

随着对这份指南的逐步深入，我们可能需要将代码分割成单独的 JavaScript 文件，以便更容易管理。例如：

```html
<!-- index.html -->
<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```

```js
// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>count is {{ count }}</div>`
}
```

为了使其工作，你需要通过 `http://` 协议为你的 HTML 提供服务，而不是 `file://` 协议。想启动一个本地的 HTTP 服务器，请先安装 Node.js，然后从命令行在 HTML 文件所在文件夹下运行 `npx serve`。你也可以使用其他任何可以基于正确的 MIME 类型服务静态文件的 HTTP 服务器。
