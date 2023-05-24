import { defineStore } from "pinia"
import { getBannerAPI, getNewAPi,getGoodsAPI } from "@/apis/home"
import type { BannerResult, NewResult,RootObject ,GoodsResult} from "@/type/type"
import { ref } from "vue"
/**
 * 轮播图数据请求
 */
export const useBanner = defineStore("banner", () => {
    //banner轮播图数据
    const bannerList = ref<RootObject<BannerResult[]>>()
    //获取banner轮播图数据方法
    const getBanner = async () => {
        const res: any = await getBannerAPI()
        bannerList.value = res
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
    const newList = ref<RootObject<NewResult[]>>()
    //获取new数据
    const getNew = async () => {
        const ref: any = await getNewAPi()
        newList.value = ref
    }

    return {
        newList,
        getNew
    }
})

/**
 * goods商品数据请求
 */
export const userGoods=defineStore("goods",()=>{
    const goodsList=ref<RootObject<GoodsResult[]>>()
    const getGoods=async ()=>{
        const ref:any=await getGoodsAPI()
        goodsList.value=ref
    }

    return{
        goodsList,
        getGoods
    }
})