# 闭包
    - 无障碍访问
    - htnl5 的input 新属性
        es6 const let arrow function Promise
            ...
        html5  <!DOCTYPE html>
            input readonly placeholder type number required
            localstorage.getItem()  setItem
            ...
    - JS 对象 => html 标签
    html 标签 -> 对应的JS对象
        html DOM树 (数据结构) ->  JSDOM 对象 转换过程
        Object.prototype.toString.call(inputa) 子类型
        MDN 子类型 去查询  就可以看文档办事

    - Ajax 的流程
        1. 实例化一个XMLHttpRequest 对象
            http://127.0.0.1:5555/lesson_my/lesson_my/lesson_my/js/closure/1.html  请求的是html css js 空闲状态  为了界面 （后端)
            拥有js 自动发出http 请求能力 为了数据  单页应用
        2. xhr.readyState  0  状态  UNSENT
        3. 打开http链接， 定义Methud  URL  open()
        4. xhr.readyState 1 OPENED
        5. send()  发送请求
        6. xhr.readyState  2  HEADERS_RECEIVED  服务器端
        7. onredystatechange 数据到达到监听事件
        8. xhr.readyState 3  Loading  数据达到过程
        9. xhr.readyState 4 DONE  拿到完整数据
        10. xhr.responseText  数据

- search suggest 用户体验优化的功能
    1. 用户完整搜索
        降低用户的使用门槛（把用户当小白）

- 异步问题
    1. 事件keyup
        处理事件内部拿到返回数据的时候
        不可以通过return拿
    2. ajax 是异步的， JS 单线程会把它放入event loop
        所以 res underfine 不等了
    3. 提出的方案是
        使用回调函数 cb
        解决了异步问题

- Promise 
    1. 解决异步问题而来
        Promise{pending} 问题还没有开始解决 放入eventloop
        loop
    2. new Promise((resolve, reject) => {
        
    })