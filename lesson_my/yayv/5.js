// var add = funtion(a, b, c) {
//     return a + b + c 
// }
// // memorize 高阶函数
// // memorize 内部生产闭包函数 并且return 给 memorize
// var memoizedAdd = memorize(add)
// // memoizeAdd(1,2,3)
// console.time('use memorize') //计时开始
// for 
// 本分
function add(a, b, c) {
    return a + b + c;
}
// fn 是等待着被优化的函数
// 闭包  函数内部还有函数
function memorize(f) {
    // 缓存结果 {}  key  
    // 
    // console.log(fn, args);
    var cache = {
        // key 字符串
        // "lu": "抖音"
    };
    // 作用域 
    return function(){
        // console.log('我是inner function', cache.lu)
        // console.log(Array.prototype.join.call(arguments, ","), '////');
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // console.log(key, '/////');
        if (key in cache) { // in json 运算符
            // console.log('缓存');
            return cache[key] // 没有运行  f
        } else {
            // console.log('add。。。。。')
            // cache[key] = f(arguments);
            // apply call 都可以运行函数， 手动指定内部的this , 
            // apply  数组集合， 作为f 的参数
            return cache[key] = f.apply(this, arguments)
            // return cache[key]
            // cache[key] = f.call(this, ...arguments)
        }
        // else return cache[key] = f.apply(this, arguments)

    }
}
// 函数运行完后就销毁
// 函数进入执行栈  创建函数作用域， 
var memoizedAdd = memorize(add) // 运行才会生成闭包函数

