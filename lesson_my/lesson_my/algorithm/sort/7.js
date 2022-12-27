const insertSort = (arr) => {
    // 缓存数组的长度
    const len = arr.length;
    // 用来保存当前需要插入的元素
    let temp
    // i 用于标识每次被插入的元素的索引 待插入
    for (let i = 1; i < len; i++) {
        // 缓存
        let j = i;
        temp = arr[i];   // 待插入的值arr[i] 空出来
        while(j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];  // 比待排序大的  后移一位
            j--;
        }
        arr[j] = temp
    }
    return arr 
}

console.log(insertSort([4, 5, 6, 1, 3, 3, 2]))