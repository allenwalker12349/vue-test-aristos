<template>
	<form action="" class="add-todo-form" @submit.prevent="addToDo">
		<input type="text" v-model="title">
		<button type="submit">Добавить задачу</button>
	</form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	name: 'AddTodo',
	data() {
		return {
			title: ''
		}
	},
	methods: {
		...mapActions(['ADD_NEW_TODO']),
		addToDo() {
			const newTodo = {
				id: 1,
				title: this.title
			}
			this.ADD_NEW_TODO(newTodo)
		}
	}
}
</script>

<style>
.add-todo-form {
	margin-top: 20px;
}
</style>