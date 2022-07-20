---
lang: zh-CN
title: 精进技术
description: 精进技术
---

## JavaScript

### JavaScript 高级程序设计第四版

1. [语言基础](./javaScript/programming/01.md)
2. [变量、作用域、内存](./javaScript/programming/02.md)
3. [基本引用类型](./javaScript/programming/03.md)
4. [集合引用类型](./javaScript/programming/04.md)
5. [迭代器与生成器](./javaScript/programming/05.md)
6. [对象、类与面向对象编程](./javaScript/programming/06.md)
7. [代理与反射](./javaScript/programming/07.md)
8. [函数](./javaScript/programming/08.md)
9. [期约与异步函数](./javaScript/programming/09.md)
10. [BOM](./javaScript/programming/10.md)
11. [客户端检测能力](./javaScript/programming/11.md)
12. [DOM - MutationObserver](./javaScript/programming/12.md)
13. [网络请求与远程资源](./javaScript/programming/13.md)

### 你不知道的 JavaScript 上

#### 作用域和闭包

1. [作用域是什么](./javaScript/unaware/01.md)
2. [词法作用域](./javaScript/unaware/02.md)
3. [函数作用域和块作用域](./javaScript/unaware/03.md)
4. [提升](./javaScript/unaware/04.md)
5. [作用域闭包](./javaScript/unaware/05.md)
6. [附 A: 动态作用域](./javaScript/unaware/1a.md)
7. [附 B: 块作用域的方案](./javaScript/unaware/1b.md)
8. [附 C: this 词法](./javaScript/unaware/1c.md)

#### this 和对象原型

1. [关于 this](./javaScript/unaware/06.md)
2. [this 全面解析](./javaScript/unaware/07.md)
3. [对象](./javaScript/unaware/08.md)
4. [混合对象-类](./javaScript/unaware/09.md)
5. [原型](./javaScript/unaware/10.md)
6. [行为委托](./javaScript/unaware/11.md)
7. [附 A: ES 中的 Class](./javaScript/unaware/2a.md)

### ECMAScript 6 入门

1. [ECMAScript 6 简介](./javaScript/es6/introduction.md)
2. [let 和 const 命令](./javaScript/es6/01.md)
3. [变量的解构赋值](./javaScript/es6/02.md)
4. [字符串的扩展](./javaScript/es6/03.md)
5. [字符串的新增方法](./javaScript/es6/04.md)
6. [正则的扩展](./javaScript/es6/05.md)
7. [数值的扩展](./javaScript/es6/06.md)
8. [函数的扩展](./javaScript/es6/07.md)
9. [数组的扩展](./javaScript/es6/08.md)

## TypeScript

### 拉钩

1. [开篇词](./typescript/lagou/01.md)
2. [模块一：TypeScript 入门](./typescript/lagou/02.md)
3. [模块二：TypeScript 进阶](./typescript/lagou/12.md)

## Vue 2

### 剖析 Vue.js 内部运行机制

1. [Vue.js 运行机制全局概览](./vue2/sourceCode/01.md)
2. [响应式系统的基本原理](./vue2/sourceCode/02.md)
3. [响应式的依赖收集追踪原理](./vue2/sourceCode/03.md)
4. [实现 Virtual DOM 下的一个 VNode 节点](./vue2/sourceCode/04.md)
5. [template 模版是怎么通过 Compiler 编译的](./vue2/sourceCode/05.md)
6. [数据状态更新时的差异 diff 以及 patch 机制](./vue2/sourceCode/06.md)
7. [批量异步更新策略及 nextTick 原理](./vue2/sourceCode/07.md)
8. [Vuex 状态管理的工作原理](./vue2/sourceCode/08.md)

## Vue 3

### 文档

1. [开始](./vue3/document/index.md)
2. [基础](./vue3/document/basic/01.md)
3. [深入组件](./vue3/document/further/01.md)
4. [可重用性](./vue3/document/reusing/01.md)
5. [内置模块](./vue3/document/builtIn/01.md)
6. [升级规模](./vue3/document/upgrade/01.md)
7. [最佳实践](./vue3/document/best/01.md)
8. [TypeScript](./vue3/document/TypeScript/01.md)
9. [进阶主题](./vue3/document/advance/01.md)

## Css

## Node

1. [初识 Node.js](./node/01.md)
2. [fs 文件系统模块](./node/02.md)
3. [path 路径模块](./node/03.md)
4. [http 模块](./node/04.md)
5. [模块化和包](./node/05.md)
6. [express](./node/06.md)

## 前端工程化

### 专题一：Bundle 基础设施建设

1. [模块化方案](./engineering/build/01.md)
2. [AST 及其应用](./engineering/build/02.md)
3. [原理与运行时](./engineering/build/03.md)
4. [运行时 Chunk 加载分析](./engineering/build/04.md)
5. [加载非 JS 资源: JSON 与图片](./engineering/build/05.md)
6. [加载非 JS 资源: Style](./engineering/build/06.md)
7. [将脚本注入 HTML 的处理](./engineering/build/07.md)
8. [Hot Module Reload](./engineering/build/08.md)
9. [构建优化](./engineering/build/09.md)

### 专题二：打包体积性能优化

10. [打包体积分析](./engineering/build/10.md)
11. [JavaScript 压缩](./engineering/build/11.md)
12. [Tree Shaking](./engineering/build/12.md)
13. [Polyfill: core.js](./engineering/build/13.md)
14. [browserslist 垫片体积控制](./engineering/build/14.md)

### 专题三：Bundless 基础设施建设

15. [原理与浏览器中的 ESM](./engineering/build/15.md)
16. [CommonJS To ESM](./engineering/build/16.md)
17. [Bundless 与生产环境](./engineering/build/17.md)

### 专题四：npm package 开发

18. [semver 与版本管理](./engineering/develop/18.md)
19. [main/module/export 入口](./engineering//develop/19.md)
20. [dep/devDep 的区别](./engineering/develop/20.md)
21. [engines 宿主环境控制](./engineering/develop/21.md)
22. [script hooks 及其风险](./engineering/develop/22.md)
23. [npm publish 发布第一个包](./engineering/develop/23.md)
24. [lockfile 以及影响](./engineering/develop/24.md)
25. [package 中的 lockfile](./engineering/develop/25.md)

### 专题五：包管理工具

26. [npm cache](./engineering/develop/26.md)
27. [node_modules 拓扑结构](./engineering/develop/27.md)
28. [pnpm 的优势](./engineering/develop/28.md)

### 专题六：前端质量保障

29. [CICD](./engineering/operation/29.md)
30. [Git Hooks](./engineering/operation/30.md)
31. [Audit](./engineering/operation/31.md)
32. [Upgrade](./engineering/operation/32.md)
33. [ESLint](./engineering/operation/33.md)
34. [Package Patch](./engineering/operation/34.md)

### 专题七：前端服务部署

35. [Long Term Cache](./engineering/operation/35.md)
36. [Chunk Spliting 与缓存优化](./engineering/operation/36.md)
37. [Docker 部署](./engineering/operation/37.md)
38. [Docker Preview 部署](./engineering/operation/38.md)

## HTTP

## TCP/IP

....
