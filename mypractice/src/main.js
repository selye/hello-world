import Vue from "vue";
import App from "./App.vue";
import axios from "./axios/index.js"
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import * as filters from "./filters/index.js"
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


Vue.use(ElementUI);
//注册全局指令
Vue.directive('focus', {
        inserted: function(el) {
            //el input 获得焦点
            el.querySelector('input').focus()
        }
    })
    //Object.keys 用于获取对象属性值组成的数组 Object[key] 对象动态属性
Object.keys(filters).forEach(key => {
    console.log(key)
    Vue.filter(key, filters[key])
})

// router.beforeEach(next => {
//     console.log(store.state.islogin)
//     next()
// })

new Vue({
    data() {
        return {
            myKeeps: [],
            loginShow: false
        }
    },
    router,
    store,
    render: h => h(App)
}).$mount("#app");