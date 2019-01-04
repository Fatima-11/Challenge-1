import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'
Vue.http = axios;

Vue.use(Vuex, axios)


export default new Vuex.Store({
  state: {
    feedback: null,
    returnSecureToken: false,
    idtoken: null,
    userId: null
  },
  mutations: {
    // change feedback value
    Setfeedback(state,payload){
      state.feedback = payload
    },
    userAuth (state, payload) {
      state.idtoken = payload.idtoken
      state.userId = payload.userId
    },
    clearAuth (state) {
      state.idtoken = null
      state.userId = null
    }
  },
  actions: {

     logout({commit}) {
       commit('clearAuth')
     },
    
    Userlogin({commit}, payload){
      if (payload.email && payload.password){
        
        axios.post('http://localhost:3000/auth/login', {
          headers: {
            'Content-Type': 'applications/json'
          },
          email: payload.email,
          password: payload.password,
        
         }).then((res) => {
           console.log (res)
            commit('userAuth', {
            idtoken: res.data.token,
            userId: res.data.userId
          })
              
              router.push({ name: 'Home'})
              commit('Setfeedback', null)
          }).catch((err) => {
              commit('Setfeedback', err.message)
          })

          
      }else{
        commit('Setfeedback', 'All the fields are required') 
      }  
    },
    Usersignup({commit}, payload) {
      if(payload.email && payload.password && payload.confirmpassword){
          if(payload.password !== payload.confirmpassword){
            commit('Setfeedback', 'The passwords do not match')
          }else{
        commit('Setfeedback', null)
          
        axios.post('http://localhost:3000/auth/signup', {
          email: payload.email,
          password: payload.password,
          headers: {
            'Content-Type': 'applications/json'
          }
        })
          .then(() =>{
              router.push({name: 'Home'})
              commit('Setfeedback', null)
          })
          .catch(err => {
            commit('Setfeedback', err.message)
          })
      }
      }else{
          commit('Setfeedback', 'All fields are required')
      }  
    }
    
         
      
  },
  getters: {
    
    feedback (state) {
      return state.feedback
    },
    // check if the user is authenticated (for navbar)
    isauthenticated (state) {
      return state.idtoken !== null
    }
  }
})
