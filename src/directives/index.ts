import { useIntersectionObserver } from "@vueuse/core"

//定义懒加载插件
export const lazyPlugin = {
    install(app: any) {
        //懒加载指令逻辑
        //定义全局指令图片懒加载
        app.directive("img-lazy", {
            mounted(el: any, binding: any) {
                //el：指令绑定的那个元素
                //binding:指令后面的值
               const {stop}= useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    //为true说明进入视口区域
                    if (isIntersecting) {
                        el.src = binding.value
                        console.log("懒加载测试",binding.value)
                        //useIntersectionObserver对元素的监听一直存在的，有内存浪费，所以在监听的图片第一次完成加载之后就停止监听
                        stop()
                    }
                })
            }
        })
    }
}