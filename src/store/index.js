import Vue from 'vue'
import Vuex from 'vuex'
import account from './account'
import product from './product'
Vue.use(Vuex)
export default function () {
    const store = new Vuex.Store({
        modules: {
            account,
            product
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })
    return store
}

