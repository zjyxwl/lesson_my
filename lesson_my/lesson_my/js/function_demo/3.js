'use strict'
// 变量作用域
var name = 'liu'  //全局  window
// this 指向 调用方法
// js 变量属于  作用域
function func() {
    y = 2;  // 不加var 全局， 不好
    var name = 'jay'  //func 内部 局部变量
    {           // 块级作用域
        let x = 2;
        var z = 3;  //es5 不支持块级作用域
        let name = 'wan'  // 块级作用域
    }
    console.log(y, z);
}
func();
console.log(y);