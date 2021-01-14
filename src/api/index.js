
// 处理网络请求
// 导入http
import http from '../utils/http'
function apiGet(){
    return http({
        url:"/sys/captcha"
    })
}

export {
    apiGet
}