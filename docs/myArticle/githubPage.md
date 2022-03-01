---
lang: zh-CN
title: GitHubPages 部署项目
description: GitHubPages 部署项目 相关知识点
---

# GitHubPages 部署项目
在根目录下新建 `.github\workflows\main.yml` 文件。\main.yml 内容如下：
```
name: build and deploy

# 当 master 分支 push 代码的时候触发 workflow
on:
  push:
    branches:
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      # 下载仓库代码
      - name: Checkout
        uses: actions/checkout@v2

      # 安装依赖
      - name: Install and Build
        run: |
          yarn install
          yarn build

      # 发布到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          token: ${{ secrets.ACCESS_TOKEN }} # 访问秘钥
          branch: gh-pages # 推送分支
          folder: docs/.vuepress/dist # 部署目录

```