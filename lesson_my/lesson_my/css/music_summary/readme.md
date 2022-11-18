# 大厂HTML5 作品赏析

- html5 标签
    audio   网易云音乐
    video   爱奇艺 B站

- background-size
    1. 移动端rem w h 是多变的
    2. 移动端 retina 3倍retina
        40X40  80X80 120X120
        200X200
    3. backgroun-size：cover（裁剪图片）背景图片大小
        等比例缩放背景图片 填满容器
        超出则剪裁
        contain 

- 库文件引入的位置
    1. css 放到head 里
        css 应该尽早地参与网页的渲染
    2. js 放在body 的最下面 会阻塞页面渲染

- swiper 滑动组件库的使用
    1. 引入swiper 组件库
        css js
    2. 固定的html结构
        .swiper-container(滑动区域大小)>.swiper-wrapper>.swiper-slide
    3. new Swiper(selector,{
        direction:''
    })

- ranslate3d(-50%,0,0)  3D   启动3D加速器  GPU渲染
    ranslate(-50%,0)    2D
    效果一样

- 使用linear-gradient 生成背景图片
    1. 颜色渐变的图片， #f8ddd1,#faece5 73%,#fad2c0
        colorStop
    2. 性能优化， 图片下载比较大
        css 写的   不需要而外下载
        img src 下载   + 显示
    3. 下载越多 http 并发数越多， 卡
        
