- git log
    由于提交记录过多， 自动进入 vi 的编辑状态
    j 上移
    k 下移
    q 退出
    o 新行
    i 编辑状态

- 变量提升和暂时性死区
    编译阶段  早于  运行阶段
    var  let（不可以在声明前使用， 暂时性死区） 走两条不同的路
    js 语言的特点， 在代码运行前确定作用域
    所有变量都属于作用域管理
    js 里面的变量 是有作用域的vo {name}
    变量提升 不好的

- this 终极话术
    this 永远指向最后调用他的那个对象

- this 指向谁？   最后 由谁调用指向谁
    1. 普通函数      window
    2. 严格模式      underfined
    3. 对象的方法    对象
    4. new          实例
    5. 事件处理函数  事件发生的对象
- 如何指定this
    6. call apply 手动指定this 指向第一个参数
        借用方法   除了指定this 还可以传参
        call 展开   apply []
    7. bind 返回一个被指定了this 的函数
        未来被调用时this 只想那个对象
    8. that = this 作用域链 专业前端
    9. 箭头函数  内部没有this 找外层的this
    