import { defineStore } from "pinia"
import {getBannerAPI} from "@/apis/home"
import type{BannerResult} from "@/type/type"
import {ref } from "vue"

export const useBanner=defineStore("banner",()=>{
    //banner轮播图数据
    const bannerList=ref<BannerResult[]>()
    //获取banner轮播图数据方法
    const getBanner=async()=>{
        const res:any =await getBannerAPI()
        bannerList.value=res.result
    }

    return{
        bannerList,
        getBanner
    }
})