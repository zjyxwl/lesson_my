<template>
    <div>
        {{ count }}
        <button @click="add">add</button>
    </div>
</template>

<script setup>
// 1. count 来自中央
import { computed } from 'vue'
import { useStore } from '../store/gvuex'
const store = useStore()  //  store  来到本地  hooks
console.log(store, 'aaaa')
const count = computed(() => store.state.count)
const add = () => {
    store.commit('add')
}
</script>

<style scoped>

</style>