import {
  createStore
} from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    linkObject: []
  },
  actions: {
    fetchLinkObject({
      commit
    }) {
      axios.get('../assets/test.json').then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  mutations: {},

  modules: {}
})