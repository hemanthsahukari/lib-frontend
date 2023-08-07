const state = {
    user: null,
    isAuthenticated: false,
    };
    
    const getters = {
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
    };
    
    const mutations = {
    setUser(state, user) {
    state.user = user;
    },
    setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
    },
    };
    
    const actions = {
    login({ commit }, user) {
    commit('setUser', user);
    commit('setIsAuthenticated', true);
    },
    logout({ commit }) {
    commit('setUser', null);
    commit('setIsAuthenticated', false);
    },
    };
    
    export default {
    state,
    getters,
    mutations,
    actions,
    };