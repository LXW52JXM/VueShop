//封装分类数据业务相关代码
import { useCatgory } from "@/stores/category"
import { onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router"

export function Categorys(){
    //一级面包屑导航数据页面
    const store = useCatgory()
    const id = Number(useRoute().params.id)//从路由' path '中提取的解码参数的对象
    onMounted(async () => {
        // console.log(id)
        await store.getCatgory(Number(id))
    })
    //路由'category/:id'中id参数发生变化时，数据接口重新发送，做精确更新,获取最新的分类数据
    onBeforeRouteUpdate(async (to) => {
        // console.log(id)
        await store.getCatgory(Number(to.params.id))
    })
    return{
        store
    }
}
