var stuA = {
    name: 'cai'
};
var stuB = {
    name: 'liu'
};
function sayHi(...args) {
    console.log(arguments,...args);
    console.log(`你好，我是${this.name}`);
}

Object.prototype.sayHi=sayHi;

// A B 都能 sayHi
// call (apply) 改天换命 手动指定this 的指向
// this -> 调用对象 stuA 
// sayHi.call(stuA)
// stuA.sayHi()
sayHi.apply(stuA, [1,2])
sayHi.call(stuA, 1,2)
// var func = sayHi.bind(stuA);
// func();