import { createStore } from 'vuex';
import storeUsers from "./modules/users";
import storeTerminal from "./modules/terminal";


export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        storeUsers,
        storeTerminal
    }
})