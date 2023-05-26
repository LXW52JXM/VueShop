import { getTopCategoryAPI } from "@/apis/category"
import { defineStore } from "pinia"
import type { RootObject, CategoryResult } from "@/type/type"
import { ref } from "vue"

/**
 * Category面包屑数据请求
 */
export const useCatgory = defineStore("catgroy", () => {
    const catgoryList = ref<RootObject<CategoryResult>>()
    const getCatgory = async (id:number) => {
        const res: any = await getTopCategoryAPI(id)
        catgoryList.value=res
    }
    return{
        catgoryList,
        getCatgory
    }
})