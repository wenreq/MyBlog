---
lang: zh-CN
title: Web Worker
description: Web Worker
---

## 什么是web Worker

我们都知道JS的单线程的，一次只能做一件事情，所以JS才会使用“异步（非阻塞）”的方式做一些网络请求等耗时的任务，因为如果是同步执行网络请求的话情况下，在执行网络请求的过程中，就会终止浏览器主进程的解析，有可能出现页面白屏等情况，造成不好的用户体验。

为了更好的发挥CPU的多核资源，所以我们可以在主线程之外再创建一个线程！利用这个线程去做一些操作！

## 子线程的特点

因为我们使用了多线程，所以必须知道多线程具有的优点：

- 多线程技术使程序的**响应速度更快**，因为用户界面可以在进行其它工作的同时一直处于活动状态;
- 占用大量处理时间的任务使用多线程可以**提高CPU利用率**，即占用大量处理时间的任务可以定期将处理器时间让给其它任务;
- 多线程可以分别设置优先级以优化性能。

以上的内容都是百度的，当然最重要的点都离不开前端非常关键的词：“性能”

## 使用场景

- 解析文本（markdown 转 html）

   曾经做过的一个个人博客，需要将markdown转成html字符串再渲染，当markdown文档**特别大**的时候，这个计算过程就会相对比较久，这个就是使用离我最近的一个使用场景！

- 复杂运算
- 流媒体等操作

   B站的视频有用到这个

## 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Worker</title>
  <script src="index.js"></script>
</head>
<body>
  
</body>
</html>
```

```js
// index.js
const worker = new Worker('worker.js')

// 主线程中，接收到子线程发过来的消息。
worker.onmessage = e => {
  console.log('接收到了子线程发给我的消息了！', e)
}

// 主线程中的宏任务 - setInterval，每隔1s打印一次 setInterval
setInterval(() => {
  console.log('setInterval');
}, 1000)

// 在主线程中给子线程发送消息
worker.postMessage("主线程给子线程的消息！")

// 主线程中的宏任务 - setTimeout，2s 之后打印 理解webWorker了吗？看看控制台！
setTimeout(() => {
  // 2s 之后开启一个阻塞主线程的任务，webworker 子线程并不会被阻塞住
  confirm('理解webWorker了吗？看看控制台！')
}, 2000)


// worker.js
onmessage = e => {
  console.log('子线程接收到了！', e);
}

setInterval(() => {
  console.log('子线程中过了一秒了！')
})

postMessage('俺是子线程！')
```

通过这个简单的例子我就大概能明白web worker的优势了！

注意 本地打开index.html页面会报错，因为worker不能访问本地文件。需要使用 http-server 启动。

## 分析一下

- WEB 主线程：

   1. 通过 `worker = new Worker(url)` 加载一个 JS 文件来创建一个worker，同时返回一个worker实例。
   2. 通过 `worker.postMessage(data)` 方法来向 worker 发送数据。
   3. 绑定 `worker.onmessage` 方法来接收 worker 发送过来的数据。
   4. 使用 `worker.terminate()` 来终止一个worker的执行。

- worker 新线程

   1. 通过 `postMessage(data)` 方法来向主线程发送数据。
   2. 绑定 `onmessage` 方法来接收主线程发送过来的数据。

## web worker 的局限

- **同源限制**（不支持跨域）。分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- **DOM 限制**（不能访问DOM）。Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以使用navigator对象和location对象。
- 通信联系。Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息`Worker.postMessage()`完成。
- **脚本限制**。Worker 线程不能执行`alert()`方法和`confirm()`方法，但可以使用 `XMLHttpRequest` 对象发出 `AJAX` 请求。
- **文件限制**。Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。
