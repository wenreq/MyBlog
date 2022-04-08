---
lang: zh-CN
title: 1. ECMAScript 6 简介
description: ECMAScript 6 简介
---

## 1.1 ECMAScript 和 JavaScript 的关系

ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现。

## 1.2 ES6 和 ECMAScript 2015 的关系

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。

本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指 “下一代 JavaScript 语言”。

## 1.3 语法提案的批准流程

任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。

一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的[官方网站](https://github.com/tc39/ecma262)查看。

## 1.4 ECMAScript 的历史

ES6 从开始制定到最后发布，整整用了 15 年。

ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等大公司。

目前，各大浏览器对 ES6 的支持可以[查看](kangax.github.io/compat-table/es6/)。

Node.js 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能已经实现了，但是默认没有打开。使用下面的命令，可以查看 Node.js 默认没有打开的 ES6 实验性语法。

```shell
// Linux & Mac
$ node --v8-options | grep harmony

// Windows
$ node --v8-options | findstr harmony
```

## 1.5 Babel 转码器

[Babel](https://babeljs.io/) 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行，这个意味着，你可以用 ES6 的方式写程序，又不用担心先有环境是否支持。下面是一个例子。

```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
})
```

上面的原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了。

下面的命令在项目目录中，安装 Babel。

```sh
$ npm install --save-dev @babel/core
```

### 配置文件 .babelrc

Babel 的配置文件是 `.babelrc`，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。

该文件用来设置**转码规则**和**插件**，基本格式如下。

```js
{
  "presets": [],
  "plugins": []
}
```

`presets` 字段设定转码规则，官方提供一下的规则集，你可以根据需要安装。

```shell
# 最新转码
$ npm install --save-dev @babel/preset-env

# react 转码规则
$ npm install --save-dev @babel/preset-react
```

然后，将这些规则假如 `.babelrc`。

```js
{
  "preset": [
    "@babel/env",
    "@babel/preset-react"
  ],
  "plugins": []
}
```

注意，以下所有 Babel 工具和模块的使用，都必须先写好 `.babelrc`。

### 命令行转码

Babel 提供命令行工具 `@babel/cli`，用于命令行转码。

它的安装命令如下。

```sh
$ npm install --save-dev @babel/cli
```

基本用法如下。

```sh
# 转码结果输出到标准输出
$ npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
# 或者
$ npx babel src -d lib

# -s 参数生成 source map 文件
$ npx babel src -d lib -s
```

### babel-node

`@babel/node` 模块的 `babel-node` 命令，提供支持一个 ES6 的 REPL 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。

首先安装这个模块。

```sh
$ npm install --save-dev @babel/node
```

然后，执行 `babel-node` 就进入了 REPL 环境。

```sh
$ npx babel-node
> (x => x * 2)(1)
2
```

`babel-node` 命令可以直接运行在 ES6 脚本。将上面的代码放在 `es6.js` 脚本文件中，然后直接运行。

```sh
# es6.js 的代码
# console.log((x => x * 2)(1));
$ npx babel-node es6.js
2
```

### @babel-register 模块

`@babel/register` 模块改写 `require` 命令，为它加上一个钩子。此后，每当使用 `require` 加载`.js`、.`jsx`、`.es`和.`es6`后缀名的文件，就会先用 Babel 进行转码。

```sh
$ npm install --save-dev @babel/register
```

使用时，必须首先加载 `@babel/register`。

```js
// index.js
require('@babel/register');
require('./es6.js');
```

然后，就不需要手动对 `index.js` 转码了。

```sh
$ node index.js
2
```

需要注意的是，`@babel/register` 只会对 `require` 命令加载的文件转码，而不会对当前文件转码。另外，由于它是**实时转码**，所以**只适合在开发环境使用**。

### polyfill

Babel 默认只转换新得 JavaScript 句法（Syntax），而不转换新的 API，比如 `Iterator`、`Generator`、`Set`、 `Map`、 `Proxy`、 `Reflect`、  `Symbol`、  `Promise` 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

举例来说，ES6 在 `Array` 对象上新增了 `Array.from` 方法。Babel 就不会转码这个方法。如果想让这个方法运行，可以使用 `core-js` 和 `regenerator-runtime` (后者提供 `generator` 函数的转码)，为当前环境提供一个垫片。

安装命令如下。

```sh
$ npm install --save-dev core-js regenerator-runtime
```

然后，在脚本头部，加入如下两行代码。

```js
import 'core-js';
import 'regenerator-runtime/runtime';
// 或者
require('core-js');
require('regenerator-runtime/runtime');
```

Babel 默认不转码的 API 非常多，详细清单可以查看 `babel-plugin-transform-runtime` 模块的[definitions.js](https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/runtime-corejs3-definitions.js)文件。

### 浏览器环境

Babel 也可以用于浏览器环境，使用 `@babel/standalone` 模块提供的浏览器版本，将其插入网页。

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
// Your ES6 code
</script>
```

注意，网页**实时**将 ES6 代码转为 ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本。

Babel 提供一个[REPL 在线编译器](https://babeljs.io/repl/)，可以在线将 ES6 代码转为 ES5 代码。转换后的代码，可以直接作为 ES5 代码插入网页运行。
