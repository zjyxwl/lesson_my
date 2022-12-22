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

- 盒子模型计算公式
    box-sizing   更改计算方式  标准盒子模型  IE  盒子模型 
    box-sizing: border-box;  切换到IE盒子模型的方式  w = 内容 +
    padding + border

    现代浏览器  默认启用标准盒模型  chrome
    360 如果本地安装了chrome webkit  ， IE老版本 ， ie
    edge 不再是老的IE   任然使用标准盒模型
    IE6/7/8  老的  退出历史舞台  IE盒模型

    IE盒模型  移动端动态分配内容，  padding border 的列布局中
    相当简单

    没有小数点px 物理原件， 发光源 1px = 1个发光源

    标准盒模型的盒子大小计算方式 = 内容wh（设置的width， height）+
    padding + border

    IE盒模型的盒子大小计算方式（设置的width, height) = 内容wh（
    width-padding-border） + padding + border
