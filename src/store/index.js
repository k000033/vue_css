import {
  createStore
} from 'vuex'
import axios from 'axios'
import {
  apiUseDefAxios
} from '../api/index'
export default createStore({
  state: {
    linkObject: []
  },
  actions: {
    async fetchLinkObject({
      commit
    }) {
      const res = await apiUseDefAxios();
      commit('setLineObject', res.data);
      return res.data;
      // axios.get('http://localhost:3004/data').then((res) => {
      //   console.log(res);
      // }).catch((error) => {
      //   console.log(error);
      // })
    }
  },
  mutations: {
    setLineObject(state, data) {
      state.linkObject = data;
    }
  },
  getters: {
    getLineObject(state) {
      return state.linkObject;
    }
  },
  modules: {}
})