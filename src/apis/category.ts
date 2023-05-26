import http from '@/utils/http'
/**
 * @description: 获取分类数据(get带参数请求)
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = (id:number) => {
    return http({
      url:'/category',
      params:{
        id
      }
    })
  }