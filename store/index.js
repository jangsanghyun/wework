export const state = () => ({
    name: 'main',
    device: '',
  }); 
  
  export const mutations = {
    SET_DEVICE(state, value) {
      console.log("device name is seted ", value);
      state.device = value;
    },
  }; 
  
  export const actions = {
    // 서버사이드 호출
    async nuxtServerInit({ commit, dispatch, state }) {
        try {
          return await dispatch('manager/loadData').then((result) => {
              // console.log(result);
          }).catch(() => {
          });
        } catch (err) {
            // alert(err);
            // console.log('err', err); 
        }
    },
  };
  
  export const getters = {
    getProjectListDev: (state) => () => {
    return state.devList;
    },
  };