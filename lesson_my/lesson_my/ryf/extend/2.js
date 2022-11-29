let y = {
    name: 'yjz',
    sayHi() {
        console.log('hi');
    }
}

let w = {};
// console.log(y.__proto__);
// 拦截  任何一个对象都拥有的私有属性
// 原型
y.__proto__ = w;
console.log(y.name);