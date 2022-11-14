- CSS Rule
    1. 盒子模型 content + padding + border + margin
    2. 背景颜色调试
    3. 定位 css布局方式一种
        - 离他最近的position relateive 元素定位
        - 如果没有，就一直向外查找 body
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