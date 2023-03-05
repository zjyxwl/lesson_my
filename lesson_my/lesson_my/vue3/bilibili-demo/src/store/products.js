import { defineStore } from 'pinia'
import { getProducts } from '@/service/shop.js'  // alias  架构的想法

// 创建一个子仓库
export const useProductsStore = defineStore('products', {
    state: () => {  // 中央状态
        return {
            all: []
        }
    },
    actions: {   // 接管了数据请求
        async loadAllProducts() {
            const res = await getProducts()
            // console.log(res)
            this.all = res.result
        }
    }
})