// 手写Map
// thisArg 指定  callbackFn 内部this 指向 
Array.prototype.map = function(callbackFn, thisArg) {
    // this -> [1, 2, 3]
    if(this === null || this === undefined) {
        throw new TypeError('cannot read proerty map of null or undefined')
    }
    if (typeof callbackFn != 'function') {
        // Object.prototype.toString.call(callbackFn != '[object Function')
        throw new TypeError(callbackFn + 'is not a function')
    }
    // 显式类型转换 this  对象
    let O = Object(this);
    let T = thisArg;

    let len = O.length;
    let A = new Array(len);  // 对以前的数组没有影响， 全新内存分配
    for (let k = 0; k < len; k++) {
        // this[k]  遍历的每一项
        // 下标
        // this 第三个参数
        if (k in O) {
            let kValue = O[k]  // 拿到每一项
            let mappedValue = callbackFn.call(T, kValue, k, O);
            A[k] = mappedValue
        }
    }
    return A;
}

let nums = [1, 2, 3];
let obj = { val: 4 };  // map 回调 指定它的this 
let newNums = nums.map(function(item, index, array) {
    return item + index + array[index] + obj.val;
}, obj)
console.log(newNums)