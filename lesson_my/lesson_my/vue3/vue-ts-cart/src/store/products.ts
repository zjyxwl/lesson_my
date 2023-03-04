import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

const apiUrl:string = 'https://fakestoreapi.com'

export type Product = {
    id: number
    title: string
    price: number
    descrition: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export const useProductStore = defineStore('products', () => {
    // all Ref
    const all:Ref<Product[]> = ref([])
    const ids:Ref<number[]> = ref([])
    const loaded = ():boolean => all.value.length > 0
    const fetchAll = async () => {
        if (loaded()) {    // 如果有不重复加载
            return
        }
        const res = await fetch(`${apiUrl}/products`)   // 发送请求
        const data:Product[] = await res.json()  // 统一的JSON[]  返回 Any[]
        all.value = data
        ids.value = data.map(product => product.id)   // 参数类型
        console.log(data)
    }
    return {
        all,
        ids,
        loaded,
        fetchAll
    }
})