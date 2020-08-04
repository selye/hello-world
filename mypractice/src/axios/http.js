import axios from "axios"
import { Loading, Message } from "element-ui"
let loadinginstace;

// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//请求拦截器
axios.interceptors.request.use(config => {
    //发送请求前
    loadinginstace = Loading.service({
        fullscreen: true,
        text: "拼命加载中"
    });
    return config
}), (error => {
    //请求错误的情况
    loadinginstace.close() //关闭遮罩层
    Message.success({
        message: "请求错误",
        type: "error",
        duration: 2000,
        center: true
    })
    return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use(response => {
    //对响应数据进行操作
    loadinginstace.close() //关闭遮罩层
    return response
}, error => {
    loadinginstace.close() //关闭遮罩层
        //响应错误的情况
    Message.success({
        message: "请求错误",
        type: "error",
        duration: 2000,
        center: true
    })
    return Promise.reject(error)
})

function httpPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })
            .catch(error => {
                reject(error)
            })
    })
}

function httpGet(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })
            .catch(error => {
                reject(error)
            })
    })
}
export default {
    httpPost,
    httpGet
}