import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    savedTodos: []
  },
  mutations: {
    SET_TODOS: (state, todos) => {
      state.todos = todos;
      state.savedTodos = todos;
      console.log(state.todos)
    },
    SET_DONE: (state) => {
      state.todos = state.savedTodos.filter(todo => todo.completed === true)
    },
    SET_UNDONE: (state) => {
      state.todos = state.savedTodos.filter(todo => todo.completed === false)
    },
    SET_ALL: (state) => {
      state.todos = state.savedTodos
    },
    ADD_TODO: (state, data) => {
      state.todos.unshift(data)
    }
  },
  actions: {
    async GET_TODOS_FROM_API({commit}) {
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
       commit('SET_TODOS', response.data)
    },
    SORT_DONE({commit}) {
      commit('SET_DONE')
    },
    SORT_UNDONE({commit}) {
      commit('SET_UNDONE')
    },
    SORT_ALL({commit}) {
      commit('SET_ALL')
    },
    ADD_NEW_TODO({commit}, data) {
      commit('ADD_TODO', data)
    }
  },
  modules: {
  },
  getters: {
    allTodos(state) {
      return state.todos
    }
  }
})
