import https from './http.js'
import apiList from "./apiList.js"

const apiHelper = {
    AjaxMoveiHot(data) {
        return https.httpGet(apiList.AjaxMoveiHot, data)
    },
}
export default apiHelper