<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()  // provite + inject

// const count = ref(store.state.count) // 私有状态
let count = computed(() => store.state.count)  // 响应式归中央管理  来到本地之后依然是数据状态
// const count = store.state.count   // 从中央到组件, 响应式的
// console.log(count)
// count++
const addCount = () => {
  store.commit('add')
}
</script>
<!-- <script>

export default {
  data() {
    return {
      msg: 'ehheh'
    }
  },
  setup() {
    return {

    }
  },
  mounted() {
    console.log(this, this.$store)
  }
}
</script> -->

<template>
  <!-- <div>{{ $store.state.count }}</div> -->
  <div>{{ mag2 }}</div>
  <div>{{ count }}</div>
  <div>{{ $store.state.count }}</div>
  <!-- commit 方法  提交一次修改 add  -> store mutation 名字为 add mutation 函数执行 -->
  <button @click="$store.commit('add')">+1</button>
  <button @click="addCount">+1</button>

</template>

<style scoped>

</style>
