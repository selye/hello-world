import Vue from 'vue'
export const state = Vue.observable({
    count: 0
});
export const mutations = {
    SET_COUNT(payload) {
        if (payload > 1) {
            state.count++
        }
    }
}