# 前端性能优化最重要 -- 缓存

- 静态资源缓存
    304 Not Modified

- 第一次访问某站
    200 返回资源  花费时间较长
    走缓存

- node 的理解
    1. 如何返回html 模板？
        硬盘里 fs模块 读出来  字符串
        fs.readerFile 异步的 不会阻塞node 的单线程 node 的 eventloop
        同样硬件的能力下 多让一些用户访问 服务器价格便宜
        index.js  内存 -> fs(I/O) -> 硬盘 -> 回调函数 ->
        第一个参数是err（文件存在，固态硬盘和机械硬盘的区别）, 第二个参数是数据

    2. readFileSync 同步 不太用， 性能不好
    3. 流的概念
        二进制文件的处理思想
        fs.createReadStream()

- 图片格式
    jpg png （透明）
    webp 同样的清晰度， 体积只有1/2 1/3

- 缓存
    1. 服务器端开启缓存 强缓存
        - 返回资源同时， Expires 过期时间 HTTP 1.0  setHeader('expires', 时间)
            本地缓存图片时 Expires 写入
        - 再次请求 /two.png  前端缓存就挡道  有没有缓存
            本地的时钟 和缓存的 Expires时间比较 时间没到，强制走缓存  或走后端
        - 本地的时钟不准确  Expires 不准确
    2. HTTP 1.1 更新 Catch-Control 相对时间
        maxAge  倒计时
    3. 浏览器的本地文件系统


- 强缓存
    expires http 1.0
    catch-control  max-age

- 缓存过期了怎么办？ 一定要重新请求？
    强缓存过期  但是服务器文件 变了 | 没变

- 协商缓存
    Last-modified + If-Modified-Since
    Etag + If-None-Match
