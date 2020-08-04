import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        islogin: 0,
        isLoginShow: false,
        userNick: "游客",
        defaultHeadImg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2363028509,190015165&fm=26&gp=0.jpg",
        userHeadImg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2363028509,190015165&fm=26&gp=0.jpg",
        userInfo: [{
            userNick: "曲世杰",
            account: "qusj",
            password: "123456",
            userHeadImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3279316276,2228302562&fm=26&gp=0.jpg",
        }]
    },
    getters: {
        testUserInfo: state => account => {
            let userinfoIndex = state.userInfo.findIndex(info => info.account === account);
            //findIndex 返回符合条件的索引值
            return userinfoIndex === -1 ? undefined : state.userInfo[userinfoIndex]
        }
    },
    mutations: {
        isLoginShow(state) {
            state.isLoginShow = true
        },
        loginIn(state, payload) {
            state.islogin = 1;
            state.userNick = payload.userNick;
            state.userHeadImg = payload.userHeadImg
        },
        cancellation(state) {
            state.islogin = 0;
            state.userNick = "游客";
            state.userHeadImg = state.defaultHeadImg
        }

    },

});