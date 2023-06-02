//这个文件封装了banner轮播图的业务代码
import { useBanner } from "@/stores/home"
import { onMounted } from "vue"

export function useBanners() {
    //分类面板轮播图数据
    const banner = useBanner()//实例化
    onMounted(async () => {
        await banner.getBanner({ distributionSite: '2' })
    })
    return{
        banner
    }
}
