---
lang: zh-CN
title: Commit 规范
---

`<type>(<scope>): <subject>` 描述主要修改**类型**和**内容**

- `✨feat:msg` 新功能、新特性
- `🐛fix(issue No):msg` 修改 bug
- `📝docs:msg` 文档修改
- `✂️dx:msg` 分隔
- `🎨style:msg` 代码格式修改, 注意不是 css 修改（例如分号修改）
- `♻️refactor:msg` 重构
- `⏪revert` revert之前的commit
- `⚡️perf` 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- `✅test` 测试用例新增、修改
- `🚧workflow:msg` 工作流相关文件修改
- `🏭build` 影响项目构建或依赖项修改
- `🎉release:msg` 发布新版本
- `🔱ci:msg` 持续集成相关文件修改
- `⏫chore:msg` 构建过程, 辅助工具升级. 如升级依赖, 升级构建工具
- `🌈types` 类型
- `🔧wip:msg` 半成品的
- `🔒 safe`: 修复安全问题
- `🔨develop`: 开发xx模块
- `➕options`: 添加xx下拉数据源
- `🔗link`: 链接的替换
