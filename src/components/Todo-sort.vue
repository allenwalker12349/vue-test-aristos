<template>
	<div>
		<button @click="SORT_DONE">Выполненные</button>
		<button @click="SORT_UNDONE">Не Выполненные</button>
		<button @click="SORT_ALL">все</button>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	name: 'Sort',
	methods: {
		...mapActions([
			'SORT_DONE',
			'SORT_UNDONE',
			'SORT_ALL'])
	}
}
</script>

<style scoped>
button {
	margin-right: 10px;
}
</style>