<template>
    <div>
        <el-card class="swiper-container">
            <!-- 内部？ slot 区域  -->
            <!-- 定制卡片内容 slot -->
            <!-- id 选择器 NO  名字叫header 具名slot  -->
            <template #header>
                <div class="header">
                    <el-button type="primary" :icon="Plus">增加</el-button>
                    <!-- 自定义事件 子组件通过这个函数向父组件汇报 -->
                    <el-popconfirm
                        title="确定要删除吗？"
                        confirmButtonText='确定'
                        cancelButtonText='取消'
                        @confirm="handleDelete"
                    >
                        <!-- slot 部分 -->
                        <template #reference>
                            <el-button type="danger" :icon="Delete">批量删除</el-button>
                        </template>
                    </el-popconfirm>
                </div>
            </template>
            <!-- 默认 slot  不用template   -->
            <!-- 无比强大 
                请求时， loading 效果做出来
            -->
            <el-table
                :load="state.loading"
                :data="state.tableData"
                tooltip-effect="dark"
                style="width:100%"
                ref="multipleTable"
            >
                <el-table-column
                    label="轮播图"
                    width="200"
                >
                    <template #default="scope">
                        <img :src="scope.row.carouselUrl" alt="">
                    </template>

                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { getSwiper } from '@/service/swiper.js'

const multipleTable = ref(null)

const state = reactive({
    load: true,
    tableData: [], // 数据列表 
    currentPage: 1,
    pageSize: 10,
    total: 0
})

const handleDelete = () => {

}

const fetchSwiper = async () => {
    state.loading = true
    const { data } = await getSwiper({
        params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize
        }
    })
    // console.log(data)
    state.tableData = data.list
    state.total = data.totalCount
    state.currentPage = data.currPage
    state.loading = false
}

onMounted(() => {
    fetchSwiper()
    // console.log(multipleTable)
})
</script>

<style lang="stylus" scoped>

</style>