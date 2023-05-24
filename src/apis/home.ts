import http from '@/utils/http'
/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
export function getBannerAPI (){
  return http({
    url:'home/banner'
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