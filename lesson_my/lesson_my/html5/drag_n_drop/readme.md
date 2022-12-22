# html5 拖拽效果

    - github提供 拖拽提交代码
        drag 文件
        drag over  元素或区域上空
        drag end 放开

    - 资源加载的顺序
        1. css 放在头部， js 放置在尾部
            DOM 树 + css OM  下载并执行 生成 渲染树  快速显示页面
            优先
        2. js  执行会修改 DOM document.write
            下载和执行  阻塞 document.createElment
        3. script 又可以放在 head defer/async

        - 浏览器（css + java）  不是js js 只是浏览器的一部分
            js是单线程
            defer 后台加载js 启用了多线程 不会阻塞文本下载
            async 推迟
    - js 要尽快执行， 页面可以最快速度进入可交互状态
        DOMContentLoaded 比 onload 更适合 img video 资源下载 onload

        async 和 defer 都不会影响静态页面的渲染， 但是 defer 会很好的解决执行顺序问 题，依赖问题
        async 如果不依赖， 文件的交互更快实现
