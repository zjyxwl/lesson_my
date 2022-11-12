- JavaScript的简单类型包括数字、字符串、布尔值（true和false）、null值和underfined值   
- JavaScript中的对象是可变的键控集合 数组 函数 正则表达式 对象
- 数字、字符串、布尔值不是对象，他们拥有方法但他们不可变
- 对象是属性的容器，每个属性都有名字和值
    1. 属性的名字可以是包括字符串在内的任意字符串
    2. 属性值可以是除underfined值外的任意值
- JavaScript中对象是无类别的（class-free）对新属性的名字和值没有约束
    适用于收集和管理数据
    对象可以包含其他对象
- JavaScript包括一个原型链特征。允许对象继承另一个对象的属性
    减少对象初始化的时间和内存消耗


- 3.1 对象字面量
    提供了创建新对象值的表示法
    一个对象字面量是包括在一对花括号中的零或多个“名/值”对
    逗号用来分隔多个“名/值”对

- 3.2 检索
    要检索对象中包含值，可采用在[]后缀中括中一个字符表达式
    例如： stooge["first-name"]     //"Joe"     
           对象名   属性名            属性值

- 3.3 更新
    对象中的值可以通过赋值语句更新
        如果属性名存在于对象中，那么原属性值会被替换
        如果之前没有那个属性名，那么该属性就被扩充到该对象中
        <!-- stooge['middle-name'] = 'Lester';
        stooge.nackname = 'Curly';
        flight.equipment = {
            model: 'Boeing 777'
        };
        flight.status = 'overdue'; -->

- 3.4 引用
    对象通过引用来传递
    <!-- 
        var x = stooge;
        x.nickname = 'Curly';
        var nick = stooge.nickname;
     -->

- 3.5原型
    