// 算法题目 先排序 在计算
// 冒泡 堆排序 快排 选择排序 插入排序 
const arr = [1, 2, 6, 3, 9, 5];
arr.sort((a, b) => {
    return b - a
})
console.log(arr);