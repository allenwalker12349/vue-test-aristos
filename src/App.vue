<template>
  <div id="app">
    <h2>TODO LIST</h2>
    <Sort />
    <AddTodo />
    <Todos />
    
    
  </div>
</template>

<script>
import Todos from './components/Todos'
import Sort from './components/Todo-sort'
import AddTodo from './components/Todo-input'

export default {
  name: 'App',
  components: {
    Todos,
    Sort,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
