<template>
	<div class="container">
		
		<ul class="todo__list" v-for="todo in allTodos" :key="todo.id">
			<li class="todo__item">
				{{ todo.title }} 
				<p v-if="todo.completed">Выполнена</p>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	methods: {
		...mapActions([
			'GET_TODOS_FROM_API'
		])
	},
	computed: {
		...mapGetters([
			'allTodos'
		])
	},
	mounted() {
		this.GET_TODOS_FROM_API();
	}
}
</script>

<style>
.container {
	max-width: 1200px;
	margin: 0 auto;
}

.todo__item {
	list-style: none;
	text-align: left;
	padding: 20px;
	background-color: #efefef;
}
</style>