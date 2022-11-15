- CSS Rule
    1. 盒子模型 content + padding + border + margin
    2. 背景颜色调试
    3. 定位 css布局方式一种
        - 离他最近的position relative 元素定位
        - 如果没有，就一直向外查找 body
    4. block 块级元素 盒子能力 占整个一行， 设置宽高 把兄弟元素挤下去
        inline 行内元素 没有盒子 由自身内容撑起来 不能设置宽高
        inline-block 既能设置宽高 又不会把兄弟元素挤下去
    5. display:flex; 弹性布局

- 垂直居中
    1. 父子元素
        父元素 relative（不是必须）
        子元素
    2. 要不要先确定子元素的大小
        transform rotate | translate | scale
        变基

- 方法
    - 定位 + margin负值
        相对于父元素 一定要得到大小 （不如transform）
    - 定位 + transform
        相对于自身移动
    - calc 将父元素的一半减去子元素的一半
        缺点：性能不好
    - 弹性布局
        不用定位
        缺点：太新了，兼容性不好