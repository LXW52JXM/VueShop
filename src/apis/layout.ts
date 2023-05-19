import http from '@/utils/http'

export function getCategroyAPI() {
    return http({
        url: '/home/category/head'
    })
}