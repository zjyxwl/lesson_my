const bubbleSort = arr => {
    console.time("优化了排序区域和提前时间")
    // 多声明变量， 可以让我们放下一些思考
    let tmp = 0;  //记录最后一次交换的位置
    let lastExchangeIndex = 0; // 无序数列的边界
    let len = arr.length;
    let sortBorder = arr.length - 1; // 已排好序的边界
    
    for (let i = 0; i < len; i++) {
        let isSorted = true; // 是否可以直接退出
        // j  0  -> sortBorder swap
        for (let j = 0; j < sortBorder; j++) {
            if(arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                isSorted = false;
                lastExchangeIndex = j;

            }
        }
        sortBorder = lastExchangeIndex
        if(isSorted) {
            break;
        }
    }
    console.timeEnd("优化了排序区域和提前时间")
    return arr;
}

console.log(bubbleSort([3, 4, 2, 1, 5, 6, 7, 8]))