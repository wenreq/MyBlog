---
lang: zh-CN
title: git
---

- 基于 dev 分支的源切 feature 分支

`git checkout -b feature-1111 origin/dev`

- 修改提交信息

`git commit --amend -m "新的修改提交信息"`

- 合并某一次提交(某次提交的id)

`git cherry-pick 8563870f51483795a47cebbe75563d35643190b7`

- 和远程仓库关联

`git remote add origin https://github.com/wenreq/vue-lazyload.git`

- 删除文件

`git rm 文件路径`

- 修改文件

`git mv 修改前.txt 修改后.txt`

- 恢复到某个版本

`git reset --hard 唯一id`

- 忽略某个add文件  

`git reset HEAD 文件路径`

- 文件忽略文件 

`.gitignore`

- 提交日志

`git log`

- 创建分支

`git branch dev`

- 切换分支

`git checkout dev`

- 将dev合并到master

  1.切换 master `git checkout master`

  2.`git pull`

  3.`git merge dev`

  4.`git push`

- 删除本地分支

`git branch -d 分支名`

- 删除本地的远程分支

`git branch -r -D origin/BranchName`

- 远程删除git服务器上的分支

`git push origin -d [BranchName]`

- 创建并切换

`git checkout -b dev`

- 文件目录 `ls`
- 打开编辑器 `code .`

#### 生成密钥 ssh-keygen.exe

```sh
git config --global user.name 'wenshaochang'
git config --global user.email '294491320@qq.com'
```

#### fatal: unable to access 'https://github.com/wenreq/best-utils.git/': OpenSSL SSL_read: Connection was reset, errno 10054

1. 解除ssl验证后，再次git即可

```sh
git config --global http.sslVerify "false"
```

2 .取消代理

```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### 强制提交

```sh
git push origin master -f
```

### commit规范

`<type>(<scope>): <subject>` 描述主要修改类型和内容

`feat:msg` 新功能、新特性

`fix(issue No):msg` 修改 bug

`docs:msg` 文档修改

`dx:msg` 分隔

`style:msg` 代码格式修改, 注意不是 css 修改（例如分号修改）

`refactor:msg` 重构

`revert` 恢复上一次提交

`perf` 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）

`test` 测试用例新增、修改

`workflow:msg` 工作流相关文件修改

`build` 影响项目构建或依赖项修改

`ci:msg` 持续集成相关文件修改

`chore:msg` 其他修改

`types` 类型

`wip:msg` 半成品的

`release:msg` 发布新版本
