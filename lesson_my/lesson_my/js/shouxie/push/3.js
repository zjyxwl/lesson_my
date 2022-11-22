// pop 
// 被弹出的元素的值
const arr = [1,2,3];
// console.log(arr.pop());
// console.log(arr);
// 变量的类型是由值决定
Array.prototype.pop = function() {
    //拿到最后的元素
    let temp = this[this.length - 1];
    // 删除
    // this[this.length - 1] = null; //不能实现
    this.length--;
    // delete this[this.length - 1]; //不能实现
    return temp;
    //返回
}

console.log(arr.pop());
console.log(arr);