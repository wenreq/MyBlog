---
title: 1. pnpm + vue3.0 + vite + pinia + vueuse 搭建前端项目
lang: zh-CN
---

## 1.安装 pnpm

使用 npm 安装

```sh
npm install -g pnpm
```

注意：`node` 的版本号。安装 `pnpm`，`node` 的版本号不能小于 `V14.19.0`

查看 `nvm` 现在使用的 `node` 版本号。

```sh
nvm list
```

使用 `nvm` 安装 `node 14.19.0` 版本 `nvm install 14.19.0`，安装完毕之后切换到此版本中`nvm use 14.19.0`，最好关闭之后再切。

## 2.初始化项目

### 按步骤提示初始化

1. 输入 `vite-cli` 命令

```sh
pnpm create vite
```

2. 输入项目名

```sh
? Project name: invoice
```

3. 选择一个框架

```sh
? Select a framework: » - Use arrow-keys. Return to submit.
     vanilla // 原生js
 >   vue     // 默认就是 vue3
     react   // react
     preact  // 轻量化react框架
     lit     // 轻量级web组件
     svelte  // svelte框架
```

4. 使用 typescript

```sh
? Select a variant: › - Use arrow-keys. Return to submit.
     vue
 >   vue-ts
```

5.启动项目

```shell
cd invoice && pnpm install && pnpm run dev
```

### 集成配置

1. 为保证 node 的使用

```sh
pnpm i @types/node --save-dev
```

2. 修改 `vite.config.js`

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [vue()],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8080
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
```

## 3.代码质量风格的统一

### 集成 eslint

1. 安装

```sh
pnpm i eslint eslint-plugin-vue --save-dev
```

2. 创建配置文件： `.eslintrc.js`

```js
// "off" or 0 - 关闭这个规则校验
// "warn" or 1 - 开启这个规则校验，但只是提醒，不会退出
// "error" or 2 - 开启这个规则校验，并退出

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      'jsx': true,
      'modules': true
    },
    parser: 'babel-eslint'
  },

  env: {
    es6: true,
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],

  plugins: ['vue'],

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  rules: {
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-console': 0,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 0,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'],
    'vue/jsx-uses-vars': 2,
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 13,
        'allowFirstLine': false
      }
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'any'
      },
      'svg': 'always',
      'math': 'always'
    }]
  }
}
```

3. 创建忽略文件：`.eslintignore`

```js
node_modules/
dist/
index.html
```

4. 命令行式运行：修改 `package.json`

```json
{
    ...
    "scripts": {
        ...
        "eslint:comment": "使用 ESLint 检查并自动修复 src 目录下所有扩展名为 .js 和 .vue 的文件",
        "eslint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
    }
    ...
}
```

### 集成 prettier

1. 安装

```shell
pnpm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

2. 创建配置文件： `prettier.config.js` 或 `.prettierrc.js`

```js
module.exports = {
    // 一行最多 80 字符
    printWidth: 80,
    // 使用 2 个空格缩进
    tabWidth: 2,
    // 不使用 tab 缩进，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号代替双引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾使用逗号
    trailingComma: 'all',
    // 大括号内的首尾需要空格 { foo: bar }
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'auto'
}
```

3. 修改 `.eslintrc.js` 配置

```js
module.exports = {
    ...
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'prettier',
      'plugin:prettier/recommended'
    ],
    ...
};
```

4. 命令行式运行：修改 `package.json`

```json
{
    ...
    "scripts": {
        ...
        "prettier:comment": "自动格式化当前目录下的所有文件",
        "prettier": "prettier --write"
    }
    ...
}
```

## 4.集成 pinia

`Pinia` 读音：['piːnə]，是 `Vue` 官方团队推荐代替 `Vuex` 的一款轻量级状态管理库。

**Pinia 有如下特点：**

- 完整的 `typescript` 的支持；
- 足够轻量，压缩后的体积只有1.6kb;
- 去除 `mutations`，只有 `state`，`getters`，`actions`（这是我最喜欢的一个特点）；
- actions 支持同步和异步；
- 没有模块嵌套，只有 `store` 的概念，`store` 之间可以自由使用，更好的代码分割；
- 无需手动添加 `store`，`store` 一旦创建便会自动添加；

### 安装

```shell
pnpm i pinia --save
```

### 使用

1. 新建 `src/store` 目录并在其下面创建 `index.js`，导出 `store`

```js
import { createPinia } from 'pinia'

const store = createPinia()

export default store
```

2. 在 `main.js` 中引入并使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 创建vue实例
const app = createApp(App)

// 挂载pinia
app.use(store)

// 挂载实例
app.mount('#app');
```

3. **定义State**： 在 `src/store` 下面创建一个 `user.js`

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三'
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    }
  }
})
```

4. **获取State**： 在 `src/components/usePinia.vue` 中使用

```js
<template>
  <div>{{ userStore.name }}</div>
</template>

<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>
```

5. **修改State：**

```js
// 1. 直接修改 state （不建议）
userStore.name = '李四'

// 2. 通过 actions 去修改
<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
userStore.updateName('李四')
</script>
```

## 5.集成 vue-router4

### 安装

```shell
pnpm i vue-router --save
```

### 使用

1. 新建 src/router 目录并在其下面创建 index.js，导出 router

```js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录',
        keepAlive: true,
        requireAuth: false
    },
    component: () => import('@/pages/login.vue')
  },
  {
      path: '/',
      name: 'Index',
      meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true
      },
      component: () => import('@/pages/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
```

2. 在 main.js 中引入并使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router';

// 创建vue实例
const app = createApp(App);

app.use(router);

// 挂载实例
app.mount('#app');
```

3. 修改 App.vue

```js
<template>
  <RouterView/>
</template>
```

## 6. 集成 vueuse

VueUse 是一个基于 Composition API 的实用函数集合。

### 安装

`pnpm i @vueuse/core`

### 使用

1. 创建一个新的 src/pages/vueUse.vue 页面来做一个简单的 demo

```js
<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<script>
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';

export default defineComponent({
  name: 'VueUse',
  setup() {
    const { x, y } = useMouse();

    return {
      x,
      y,
    };
  },
});
</script>
```

useMouse 只是 vueuse 的一个最基本的函数库，还有许多，总会有一个适合你；

更多函数官方文档：[链接](https://vueuse.org/)

## 7. CSS 的集成

### 方案一：原生 css variable 新特性

原生支持，不需要第三方插件，具体使用文档可 [查看](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)

1. 新建文件 src/styles/index.css

```css
:root {
  --main-bg-color: pink;
}
 
body {
  background-color: var(--main-bg-color);
}
```

注：还可以增加 PostCSS 配置，(任何受 [postcss-load-config](https://github.com/postcss/postcss-load-config) 支持的格式，例如 postcss.config.js )，它将会自动应用于所有已导入的 CSS。

### 方案二：scss或less

1. 安装

```shell
# .scss and .sass
pnpm add -D sass

# .less
pnpm add -D less
```

## 8. 集成 axios

`axios` 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

### 安装

`pnpm i axios`

### 使用

1. 新建 src/utils/axios.js

```js
import axios from 'axios';

const service = axios.create({
  baseURL: 'http://127.0.0.1:7777/',
  timeout: 120000 // request timeout
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // do something
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (response) => {
      // do something
      return response.data
    },
    (error) => {
      // do something
      return Promise.reject(error);
    }
);

export default service;
```

2. 在页面中使用即可

```js
<script lang="ts">
import request from '@/utils/axios';
const requestRes = async () => {
  let result = await request({
    url: '/api/xxx',
    method: 'get'
  });
}
</script>
```

### 封装请求参数和响应数据的所有 api (可选项)

1. 新建 src/api/index.js

```js
import * as login from './module/login';
import * as index from './module/index';

export default Object.assign({}, login, index);
```

2. 新建 src/api/module/login.js 和 src/api/module/index.js

```js
import request from '@/utils/axios';

/**
 * 登录
 */
export const login = (username, password) => {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  });
};
```

3. 在 src/pages/request.vue 页面中使用

```js
<script>
  import API from '@/api';
  
  const requestRes = async () => {
    let result = await API.login('zhangsan', '123456');
  }

</script>
```

## 9. css 的 UI 样式库

> 可选很多，根据自己项目的需求去进行选择即可

**注意：UI 库一般需要按需引入（下面以 element-plus 为例）**

1. 安装 `vite-plugin-style-import`

```sh
pnpm i vite-plugin-style-import --save-dev
```

2. 修改 vite.config.js

```js
...
import styleImport from 'vite-plugin-style-import'


export default defineConfig({
    ...
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                    ensureStyleFile: true // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
                }
            ]
        })
    ],
    ...
})
```

## 10. 使用 commitizen 规范git提交

为了使团队多人协作更加的规范，所以需要每次在 git 提交的时候，做一次硬性规范提交，规范 git 的提交信息

### 安装 commitizen (交互式提交 + 自定义提示文案 + Commit规范)

1. 安装

```sh
pnpm install -D commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable
```

2. 配置 `package.json`

```js
{
  ...
  "scripts": {
    "commit:comment": "引导设置规范化的提交信息",
    "commit":"git-cz",
  },

  "config": {
      "commitizen": {
        "path": "./node_modules/cz-customizable"
      }
  },
  ...
}
```

3. 新增配置 `commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature', // 新功能（feature）
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'fix', // 修补bug
        'ui', // 更新 ui
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'perf', // 性能优化
        'release', // 发布
        'deploy', // 部署
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
        'build', // 打包
      ],
    ],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <scope> 范围不能为空
    'scope-empty': [2, 'never'],
    // <scope> 范围格式
    'scope-case': [0],
    // <subject> 主要 message 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以什么为结束标志，禁用
    'subject-full-stop': [0, 'never'],
    // <subject> 格式，禁用
    'subject-case': [0, 'never'],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    'header-max-length': [0, 'always', 72],
  },
};js
```

4. 自定义提示则添加 `.cz-config.js`

```js
module.exports = {
  types: [{
      value: 'feature',
      name: 'feature:  增加新功能'
    },
    {
      value: 'bug',
      name: 'bug:      测试反馈bug列表中的bug号'
    },
    {
      value: 'fix',
      name: 'fix:      修复bug'
    },
    {
      value: 'ui',
      name: 'ui:       更新UI'
    },
    {
      value: 'docs',
      name: 'docs:     文档变更'
    },
    {
      value: 'style',
      name: 'style:    代码格式(不影响代码运行的变动)'
    },
    {
      value: 'perf',
      name: 'perf:     性能优化'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    {
      value: 'release',
      name: 'release:  发布'
    },
    {
      value: 'deploy',
      name: 'deploy:   部署'
    },
    {
      value: 'test',
      name: 'test:     增加测试'
    },
    {
      value: 'chore',
      name: 'chore:    构建过程或辅助工具的变动(更改配置文件)'
    },
    {
      value: 'revert',
      name: 'revert:   回退'
    },
    {
      value: 'build',
      name: 'build:    打包'
    }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72
};
```

5. 交互界面测试

![commit.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2784cc1c8314545a304141a4367fd40~tplv-k3u1fbpfcp-watermark.image?)

- 到目前只是规范了 git 的提交信息，我们对提交前代码的检查还没有做到位，例如 ESLint、Prettier，毕竟谁都会有疏忽的时候，
- 那么现在我们的 husky 就闪亮登场了

### 安装 husky

1. 安装

```shell
# 1.安装
pnpm i husky lint-staged -D

# 2.生成 .husky 的文件夹
npx husky install

# 3.添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
npx husky add .husky/pre-commit "npx --no-install lint-staged"

# 4.添加 commit-msg
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# 5. 使用 `git commit -m "message"` 就会看到 hook 生效了。
```

2. 添加配置 `package.json`

```json
{
  ...
  "lint-staged": {
    "*.{js,ts}": [
        "npm run eslint",
        "npm run prettier"
    ]
  }
  ...
}
```

## 11. 项目传送门

[Vue3.0 + Vite + Pinia搭建的前端项目](https://github.com/wenreq/invoice_web)