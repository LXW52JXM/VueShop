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