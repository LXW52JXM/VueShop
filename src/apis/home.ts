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