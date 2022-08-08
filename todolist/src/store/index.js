import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '孝钦',
    list: [{
      title: '吃饭',
      complete: false
    },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '喝水',
        complete: false
      },]
  },
  getters: {
  },
  mutations: {
    setName(state,payload) {
      state.name = payload
    },

    addTodo(state,payload){
      state.list.push(payload)
    },
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    clear(state,payload){
      state.list = payload
    }
  },
  actions: {
    asyncSetName(store,params){
      setTimeout(() => {
        store.commit("setName",params)
      },2000)
    }
  },
  modules: {

  }
})
