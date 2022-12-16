//  内存分配  放在栈内存 stack
let x = 2,  //简单
    y = 5;
let c = x;   // 值的拷贝
    c = 5;
    console.log(x)
//  内存分配  对象放在堆内存   heap
let o = {name:'liu'}; // 对象 引用
let b = o;    // 值的拷贝，   引用
b.name = 'feifei'
console.log(o.name)
let z;
z = x;
x = y;
y = z;
console.log(x, y)