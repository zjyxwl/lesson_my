// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// //构造函数 对象添加属性
// // 共享 类的方法
// js 独特的面向对象的方式
var name = 'wan';
var age = 17;

function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHellow = function() {
    console.log(`hi,我是${this.name},今年${this.age}`);
    // console.log('hi, 我是' + this.name + ',今年' + this.age);
}
// 
const jay = new Person('刘',22); // 构造函数 
jay.sayHellow();                 // 对象的方法被运行
console.log(jay.name);

const j = new Person('j',22);
j.sayHellow();

// const fn = jay.sayHellow;
// fn();