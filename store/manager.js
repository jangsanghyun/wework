

export const state = () => ({
    data: null,
}); 
export const getters = {
    isLogined(state) {
        return state.me.login;
    },
}
export const mutations = {
    SET_USERS(state, payload) {
        state.users = payload;
    },
}; 

export const actions = {
    loadData({state, dispatch}) {               
        return new Promise((resolve, reject) => {
            this.$axios.get('infos', {
            }).then((res)=> {
                // console.log('[resolve] manager/loadData =>', res.data);
                resolve();
            }).catch((err) => {
                // console.log('[error] manager/loadData => ', err);
                reject();
            });
        });
    },
}; 
