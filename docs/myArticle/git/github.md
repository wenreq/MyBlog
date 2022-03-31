---
lang: zh-CN
title: GitHub 
---

## 不翻墙完美访问 GitHub

- [fastgit](https://hub.fastgit.xyz/)
- [fastgithub](https://github.com/dotnetcore/FastGithub)
- github加速下载 - 浏览器插件

## fatal: OpenSSL SSL_read

fatal: unable to access 'https://github.com/wenreq/best-utils.git/': OpenSSL SSL_read: Connection was reset, errno 10054

1. 解除ssl验证后，再次git即可

```sh
git config --global http.sslVerify "false"
```

2. 取消代理

```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```
