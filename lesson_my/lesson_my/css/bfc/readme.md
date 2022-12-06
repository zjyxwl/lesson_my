# css 必考题BFC
    Block Formating context
        Block 占一行
    Flex Formating context
        row 不会换行
    我们看到的页面 哪些规则决定
    - 文档流
        正常文档流
        脱离文档流
            none
            position static
            float   离开文档流
            父元素拿不到子元素高度
            <!-- 父元素定死高度 -->
            弹性布局 子元素在一行上显示 float 在一行

- 在正常文档流中
    float 会让元素， 离开文档流
    父元素 不能知晓子元素的大小
    更严重的问题是 文档流出问题 下面的盒子会盖到float 元素
    一定要让父元素拿到 高度
    在正常文档流 可以开启新的BFC 
    html 是最大的BFC 由浏览器自动创建给予
    - 在BFC里 父元素高度会将浮动元素参与计算
    - 创建BFC 的方法：
        - overflow: hidden
        - display: inline-block
        - position: absolute fixed
        - 浮动 float
        - flex
        - display: table

    - 在同一个BFC里 垂直方向的距离 由margin 决定
        相邻的margin 会重叠