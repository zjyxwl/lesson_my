// 手写map 
let nums = [1, 2, 3];
let obj = { val: 4 };  // map 回调 指定它的this 
let newNums = nums.map(function(item, index, array) {
    return item + index + array[index] + obj.val;
}, obj)
console.log(newNums)
