export const state = () => ({
    name: 'main',
  }); 
  
  export const mutations = {
  }; 
  
  export const actions = {
    // 서버사이드 호출
    async nuxtServerInit({ commit, dispatch, state }) {
        console.log('[nuxtServerInit]');
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