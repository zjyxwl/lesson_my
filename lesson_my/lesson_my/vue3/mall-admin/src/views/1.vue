<template>
    <el-card class="category-container">
        <template #header>
            <div class="header">
                <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
                <el-popconfirm
                    title="确定删除？"
                    confirmButtonText="确定"
                    cancelButtonText='取消'
                    @confirm="handleDelete"
                >
                    <template #reference>
                        <el-button type="danger" :icon="Delete">批量删除</el-button>
                    </template>
                </el-popconfirm>
            </div>
        </template>
        <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            style="width: 100%;"
            :data="state.tableData"
        >
            <el-table-column
                type="selection"
                width="55"
            >
            </el-table-column>
            <el-table-column
                prop="categoryName"
                label="分类标签"
            >
            </el-table-column>
            <el-table-column
                prop="categoryRank"
                label="排序值"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="categoryTime"
                label="添加时间"
                width="200"
            >
            </el-table-column>
            <el-table-column
                label="操作"
                width="220"
            >
                <template #default="scoped">
                    <a @click="handleEdit(scope.row.categoryId)">修改</a>
                    <a @click="handleNext(scope.row)">下级分类</a>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :
        >

        </el-pagination>
    </el-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import { getCategoryData } from '@/service/category.js'
import { routerKey } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter()

const state = reactive({
    tableData: [],
    currentPage: 1, // 当前页
    pageSize: 10,
    total: 0,  // 总条数
    level: 1,
    parent_id: 0,
})
const multipleTable = ref(null)
const handleAdd = () => {

}
const handleDelete = () => {

}
const handleEdit = (id) => {
    console.log(id);
}
const handleNext = (id) => {
    const levelNumber = item.categoryLevel + 1

    routerKey.push({
        name: `level${levelNumber}`,
        query: {
            level: levelNumber,
            parent_id: parent_id
        }
    })
}
onMounted(() => {
    getCategory()
})
const getCategory = async () => {
    try{
        const { data } = await getCategoryData({
            params: {
                pageNumber: state.currentPage,
                pageSize: state.pageSize,
                categoryLevel: state.level,
                parentId: state.parent_id
            }
        })
        state.tableData = data.list
        state.total = data.totalCount
        state.currentPage = data.currPage
    } catch(err) {

    }
}
const changePage = (val) => {
    state.
}
</script>

<style lang="scss" scoped>

</style>