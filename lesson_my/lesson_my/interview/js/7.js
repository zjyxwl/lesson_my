// shallow 浅拷贝
const shallowClon = (target) => {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}  // 新拷贝
        for (let prop in target) {   
            // object array for in 遍历 性能不如计数循环
            if(target.hasOwnProperty(prop)) {   // 自己的，  不是原型链上的
                cloneTarget[prop] = target[prop]  // 拷贝
            }
        }
        return cloneTarget
    } else {
        // null 或简单数据类型
        return target;
    }
}