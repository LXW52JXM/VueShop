<script setup lang="ts">
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
</script>

<template>
    <LayoutFixed/>
    <LayoutNav />
    <LayoutHeader />
    <RouterView /><!-- 路由给Home页面预留的位置 -->
    <LayoutFooter />
</template>