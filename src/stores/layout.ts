import { defineStore } from "pinia"
import {getCategroyAPI} from "@/apis/layout"
import type{RootObject,Result} from "@/type/type"
import { reactive,ref } from "vue"


export const useStore=defineStore({
    id:'head',
    state:()=>({
        list:<RootObject>{}
    }),
    actions:{
      async getCategroy(){
            const list:any =await getCategroyAPI()
            this.list=list
        }
    }
})

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList=ref<Result[]>()
  
    // action 获取导航数据的方法
      const getCategory = async () => {
      const res:any= await getCategroyAPI()
      categoryList.value = res.result
      console.log(categoryList)
    }
  
    return {
      categoryList,
      getCategory
    }
  })