let nums = [1, 2, 3]
let obj = {value: 5}
// 原数组不会受影响
// 命令式 到 函数式
// 参数是三个, 按需使用 第三个参数是数组本身
let newNums = nums.map(function(item, index, array) {
    // 没有返回值
    return item + index + array[index] + obj.value;
}, obj)
console.log(newNums)