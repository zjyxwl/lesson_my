/** 
  * @func 判断left 是否是right 的实例
  * @param {*} left 对象
  * @param {*} right 对象
  * @return boolean
*/
function myInstanceof (left, right) {
    // right 只要出现在left 原型链的任何一栈都可以

    while(true) {
        // 
        if (left === null){
            return false;
        }
        // left__ptoto__原型链查找 一直进行下去
        if (left.__proto__ === right.prototype){
            return true;
        }
        left = left.__proto__
    }
}