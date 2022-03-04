---
lang: zh-CN
title: About
description: hello-desc 
---

# About
### 👋 Hi there,I'm WSC 
温少昌，就职于江苏天马网络科技有限公司，投身开源，函数库[realize-utils](https://github.com/wenreq/realize-utils)作者(不知名的库，厚着脸皮写的哦😂)。坚持学习，精进技术。你可以在这里找到我：[github](https://github.com/wenreq)、[博客](http://124.222.234.238/blog/)

![](https://visitor-badge.glitch.me/badge?page_id=wenreq.wenreq)

- 😄 职位：前端开发工程师
- 💬 加个微信：W15371491296
- 📫 个人博客：[博客](http://124.222.234.238/blog/)
- ⚡ 想要得到你从未拥有过的东西，你必须做些你从没做过的事情。

## 🌱 技术

这些是我使用的一些技术和工具:

![Vue](https://img.shields.io/badge/-Vue-339933?style=flat-square&logo=vue.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)
![VSCode](https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=wenreq&show_icons=true&theme=cobalt)](https://github.com/anuraghazra/github-readme-stats)

## 🚋 高效开发
现在前端开发系统，重在高效开发。使用`Vue-cli`、`Vite`等脚手架就能快速搭建出来前端整个项目的架构。开发中会经常用到一些常见且公用的函数，所以为了避免不同项目多次复制粘贴的麻烦，这里给你推荐一个封装好的工具库[realize-utils](https://github.com/wenreq/realize-utils)。也希望你可以来支持～也很需要你在 [Github](https://github.com/wenreq/realize-utils) 上一个小小的 Star :star:。

## :beginner: 推荐给你
[![realize-utils](http://124.222.234.238/utils/images/realize.png)](https://github.com/wenreq/realize-utils)

[![npm version](https://img.shields.io/static/v1?label=npm&message=v1.1.5&color=blue)](https://www.npmjs.com/package/realize-utils) [![license](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://www.npmjs.com/package/realize-utils) [![coverage](https://img.shields.io/static/v1?label=coverage&message=80.71%&color=ff69b4)](https://github.com/wenreq/realize-utils/tree/master/test)

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交 pr。

### :wrench: 安装
#### 浏览器
直接下载`dist`目录下的[realize-utils.js](https://github.com/wenreq/realize-utils/blob/master/dist/realize-utils.js)使用，支持 UMD 通用模块规范

```js
  <script src="realize-utils.js"></script>
  <script>
      var newArr = utils.uniqueArray([1, 3, 5, 1, 2, 3, 5])
      console.log(newArr) // [1, 3, 5, 2]

      var bFlag = utils.equalityArray([1, 2, 3], [1, 2, 3])
      console.log(bFlag) // true
  </script>
```

#### npm
使用 npm 安装
```shell
npm i realize-utils -D
```

### :key: 快速上手

```js
import { setStorage, getStorage, uniqueArray } from "realize-utils";
setStorage("name", "wen");
let name = getStorage("name");
console.log(name); // wen

let arr = [1, 3, 5, 1, 2, 3, 5];
let uniqueArr = uniqueArray(arr);
console.log(uniqueArr); // [1, 3, 5, 2]
```

### :link: npm 链接
[npm](https://www.npmjs.com/package/realize-utils)

### :two_men_holding_hands: 贡献者
<div style="display: flex; align-items: center;">
  <img style=" float: left;" height="60px" src="http://124.222.234.238/utils/images/gitPicture.jpg">
  <h4 style="display: inline-block;"> wenreq</h4>
  
</div>
<div style="display: flex; align-items: center;">
  <img style=" float: left;" height="60px" src="https://avatars.githubusercontent.com/u/73180970?v=4">
  <h4 style="display: inline-block;"> Tyh2001</h4>
</div>
