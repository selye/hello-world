import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import ElementUI from 'element-ui';
import store from "../store";


// import Home from "../views/Home.vue";

// import { nextTick } from "vue/types/umd";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

    return originalPush.call(this, location).catch(err => err)

}


Vue.use(VueRouter);
const routerOptions = [{
        path: "/",
        name: "About",
        component: About,
        meta: {
            isLogin: false,
            keepAlive: true
        }
    },
    {
        path: "/Home",
        name: "Home",
        meta: {
            isLogin: true
        }
    },
    {
        path: "/careers",
        name: "careers",
        meta: {
            isLogin: true
        }
    },
    {
        path: "/vxpractice",
        name: "vxpractice",
        component: () =>
            import ( /* webpackChunkName: "vurRouter" */ "../views/vxTest/vxpractice.vue"),
        meta: {
            isLogin: true
        }
    }

]
const routes = routerOptions.map(route => {
    if (!route.component) {
        route = {
            ...route,
            component: () =>
                import ( /* webpackChunkName: "[request]" */ `../views/${route.name}.vue`)
        }
    }
    return route
})


const router = new VueRouter({
    routes
});
//过滤器
router.beforeEach((to, from, next) => {
    let getLogin = store.state.islogin;
    if (getLogin == 1) {
        //已登陆
        next()
    } else {
        if (to.meta.isLogin) {
            //如果要去的页面的这个属性需要验证
            ElementUI.MessageBox.confirm("请先登陆", "提示", {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                callback: action => {
                    if (action == "confirm") {
                        console.log("确定111")
                        next({
                            path: "/",
                            query: {
                                goLogin: true
                            }
                        })
                    } else {
                        console.log("取消")
                    }
                }
            })
        } else {
            next()
        }
    }
})


export default router;