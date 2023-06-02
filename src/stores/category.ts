import { getTopCategoryAPI,getCategoryFilterAPI } from "@/apis/category"
import { defineStore } from "pinia"
import type { RootObject, CategoryResult ,ResultFilter} from "@/type/type"
import { ref } from "vue"

/**
 * 一级Category面包屑页面数据请求
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

/**
 * 二级SubCategory面包屑页面数据请求
 */
export const useCatgorySubCategory=defineStore("CatgorySubCategory",()=>{
    const subCategoryList=ref<RootObject<ResultFilter>>()
    const getSubCategory=async (id:number)=>{
        const res:any=await getCategoryFilterAPI(id)
        subCategoryList.value=res
    }
    return{
        subCategoryList,
        getSubCategory
    }
})
