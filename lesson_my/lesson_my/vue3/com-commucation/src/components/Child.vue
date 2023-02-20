<!-- <template>
    <div>Child {{ count }}
        <button @click="addcount">+1</button>
      <button @click="emit('myClick')">按钮</button>
    </div>
</template>
<script setup>
const addcount = () => {
    // 父组件里的属性是不能修改的
    props.count += 1
}
  const emit = defineEmits(["myClick"])
  // emit 和methods 有区别， 报告父组件的
    // 不需要引入 直接使用
    // import { defineProps } from "vue"
    const props = defineProps({
        // 写法一
        // msg2: String
        // 写法二
        count:{
            type: Number,
            default: 0
        },
        msg2:{
            type:String,
            default:""
        },
        msg1: {
          type:String,
          default:""
        }
    })
    console.log(props) // { msg2:"这是传级子组件的信息2" }

    defineExpose({
        childName: '这是子组件的属性',
        someMethod() {
            console.log('这是子组件方法')
        }
    })
</script> -->


<!-- <template>

</template>
<script>
export default {
    // 父子传参 方便统一数据管理 多一些展示为主的组件 props
    // props ？ 子组件对props是有要求的，
  props: ["msg1", "msg2"],// 如果这行不写，下面就接收不到
  setup(props) {
    console.log(props) // { msg1:"这是传给子组件的信息1", msg2:"这是传给子组件的信息2" }
  },
}
</script> -->

<!-- <template>
    <div>
     {{msg1}}
     msg2 {{msg2}}
    </div>
 </template>
 <script setup>
 import { defineProps, useAttrs } from "vue"
 const props = defineProps({
         msg1: String
 })
 
 const attrs = useAttrs()
 console.log(attrs)
 </script> -->

<template>
   <div>
    <button @click="handerClick">按钮</button>
   </div>
</template>
<script setup>
// 方法一  不适用于 Vue3.2版本，该版本 useContext()已废弃
    import { useContext } from "vue"
    const emit = defineEmits(["key","value"])
    
    // 用法
    const handlerClick = () => {
        emit("update:key", "新的key")
        emit("update:value", "新的value")
    }
</script>
 
 
