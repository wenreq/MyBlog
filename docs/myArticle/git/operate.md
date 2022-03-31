---
lang: zh-CN
title: Git 命令行
---

- 基于 dev 分支的源切 feature 分支 `git checkout -b feature-1111 origin/dev`
- 修改提交信息 `git commit --amend -m "新的修改提交信息"`
- 合并某一次提交(某次提交的id) `git cherry-pick 8563870f51483795a47cebbe75563d35643190b7`
- 和远程仓库关联 `git remote add origin https://github.com/wenreq/vue-lazyload.git`
- 删除文件 `git rm 文件路径`
- 修改文件 `git mv 修改前.txt 修改后.txt`
- 恢复到某个版本 `git reset --hard 唯一id`
- 忽略某个add文件 `git reset HEAD 文件路径`
- 文件忽略文件 `.gitignore`
- 提交日志 `git log`
- 创建分支 `git branch dev`
- 切换分支 `git checkout dev`
- 将dev合并到master

  1.切换 master `git checkout master`

  2.`git pull`

  3.`git merge dev`

  4.`git push`

- 删除本地分支 `git branch -d 分支名`
- 删除本地的远程分支 `git branch -r -D origin/BranchName`
- 远程删除git服务器上的分支 `git push origin -d [BranchName]`
- 创建并切换 `git checkout -b dev`
- 文件目录 `ls`
- 打开编辑器 `code .`
- 强制提交 `git push origin master -f`
