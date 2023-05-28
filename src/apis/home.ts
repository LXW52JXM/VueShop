import http from '@/utils/http'
/**
 * @description: 获取banner图
 * (注意解构赋值只能用于非 null 和非 undefined 的对象，所以前面调用该函数的地方给params赋值一个空对象{}就可以避免)
 * @param {*}
 * @return {*}
 */
export function getBannerAPI (params:{distributionSite?:string}){
  console.log(params?.distributionSite)
  const {distributionSite='1'}=params
  console.log(distributionSite)
  return http({
    url:'home/banner',
    params:{
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getNewAPi(){
  return http({
    url:"/home/new"
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}