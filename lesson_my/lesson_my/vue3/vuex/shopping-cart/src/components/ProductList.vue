<template>
    <ul>
        <li v-for="product in products" 
            :key="product.id"
        >
            {{ product.title }} - {{ product.price }} - 库存 {{ product.inventory }}
            <br>
            <button
                :disabled="!product.inventory"
                @click="addProductToCart(product)"
            >
            add to cart
            </button>
        </li>
    </ul>
</template>

<script setup>
// 接口 请求 数据  -> [] ->   数据不归组件管理
// 共享状态， 管他什么组件 数据管理独立于组件之外....
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
// import shop from '../api/shop'

const store = useStore()
// console.log(store.state.products.all)
const products = computed(() => store.state.products.all)
const addProductToCart = (product) => {
    // console.log('-------')
    store.dispatch('cart/addProductToCart', product)
}

// 生命周期
onMounted(() => {
    // // 利用回调解决异步问题
    // shop.getProducts((products) => {
    //     console.log(products)
    // })
    // 请求数据 叫dispathh 一个action
    store.dispatch('products/getAllProducts')
})
</script>

<style scoped>

</style>