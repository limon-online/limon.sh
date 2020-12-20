import { createStore } from 'vuex'
import UserModule from '@/store/modules/user.ts'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',

  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: UserModule
  }
})
