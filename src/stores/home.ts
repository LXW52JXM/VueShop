import { defineStore } from "pinia"
import { getBannerAPI, getNewAPi } from "@/apis/home"
import type { BannerResult, NewResult } from "@/type/type"
import { ref } from "vue"
/**
 * 轮播图数据请求
 */
export const useBanner = defineStore("banner", () => {
    //banner轮播图数据
    const bannerList = ref<BannerResult[]>()
    //获取banner轮播图数据方法
    const getBanner = async () => {
        const res: any = await getBannerAPI()
        bannerList.value = res.result
    }

    return {
        bannerList,
        getBanner
    }
})

/**
 * new模块数据请求
 */
export const userNew = defineStore("new", () => {
    //new数据
    const newList = ref<NewResult[]>()
    //获取new数据
    const getNew = async () => {
        const ref: any = await getNewAPi()
        newList.value = ref.result
    }

    return {
        newList,
        getNew
    }
})