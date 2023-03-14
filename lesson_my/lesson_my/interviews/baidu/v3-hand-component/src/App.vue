<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'

const tel = ref('')
// 组件通信角度
// tel 跟 Input 组件双向绑定
// 父子组件之间props 单向 props -> 
// 子组件 emit input 标签change 传回来 修改tel
setTimeout(() => {
  tel.value = '13898978889'
})
</script>

<template>
  {{ tel }}
<!-- <Input :model-value="tel" @update:model-value="tel=$event"/> -->
<Input v-model="tel" :disabled="true" placeholder="请输入手机号"/>
</template>

<style scoped>

</style>
