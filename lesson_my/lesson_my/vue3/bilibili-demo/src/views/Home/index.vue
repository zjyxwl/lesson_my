<template>
    <div>
        <!-- 一屏半左右 -->
        <!-- 头部组件 -->
        <AppHeader />
        <!-- 频道组件 -->
        <HomeChannel />
        <!-- 轮播图 -->
        <HomeSwipe />
        <!-- 视频组件 容器组件 -->
        <HomeVideoList />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getSwiperList, getVideosList } from '@/service/home.js'
import AppHeader from '@/components/Appheader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import HomeVideoList from '@/components/HomeVideoList.vue'
import axios from 'axios'

onMounted( async() => {
    const swiperData = await getSwiperList()
    const videoList = await getVideosList()
    console.log(getSwiperList, getVideosList)
 })
</script>

<style lang="scss" scoped>

</style>