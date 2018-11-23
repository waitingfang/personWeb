<template>
	<div class="home">
		<v-interest></v-interest>
		<v-subject></v-subject>
		<v-book></v-book>
	</div>
</template>
<script>
import VInterest from '../interest/interest.vue'
import VSubject from '../subject/subject.vue'
import VBook from '../book/book.vue'
export default {
	components: {
		VInterest,
		VSubject,
		VBook
	}
}
</script>
<style scoped>
.home {
	width: 100%;
}
</style>
