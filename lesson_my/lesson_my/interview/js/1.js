let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);  // 序列化

// let o = {a: 1, b: 2, c: 3}

// es10 内置 flat API   es6(2015)
// ary = ary.flat(Infinity);  // es10(2019)  提供的flat API 兼容性问题
// console.log(ary)

// console.log(str)
//  //正则表达的格式  字符串匹配规则
//  g 正则修饰符 全局 一直匹配
//  () 分组 匹配的各种可能放在分组里面
//  | 或者  正则是按字符匹配的, [a-z] 匹配一个小写字母  匹配多个用{}
//  [] 本身是正则的运算符号 \[ \] 转译一下 匹配[] 本身
//  replace 方法, 正则匹配到的替换成 空
// ary = str.replace(/(\[|\])/g, '').split(',').map(item => +item)
// console.log(ary)

// str = str.replace(/(\[|\])/g, '')
// str = '[' + str + ']'
// console.log(str)
// ary = JSON.parse(str)
// console.log(ary)


// 递归
// let result = []
// let fn = function(ary) {
//     let item = ary[i]
//     if (Array.isArray(ary[i])) {
//         fn(item)
//     } else {
//         result.push(item)
//     }
// } 

// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur)?flatten(cur):cur)
//     }, [])
// }
// console.log(flatten(ary))

while(ary.some(Array.isArray)) {
    ary = [].concat(...ary)
}
console.log(ary)