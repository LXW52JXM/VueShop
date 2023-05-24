<script setup lang="ts">
import{useBanner}from "@/stores/home"
import{onMounted}from "vue"

const store=useBanner()
onMounted(async () => {
   await store.getBanner()
   console.log(store.bannerList)
})
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in store.bannerList?.result" :key="item.id">
        <img :src="item.imgUrl">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>