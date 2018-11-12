<template>
	<div class="note">
		<div class="notewrapper">
			<div class="notelist" v-for="(note, index) in notes" :key="index">
				<div class="title">{{note.title}}</div>
				<div class="content"></div>
				<div class="date"></div>
			</div>
		</div>
	</div>
</template>

<script>
const ERR_OK = 0
export default {
	data() {
		return {
			notes: []
		}
	},
	created() {
		this.$http.get('/api/notes').then((response) => {
			response = response.body
			if (response.errno === ERR_OK) {
				this.notes = response.data
				console.log(this.notes)
			}
		})
	}
}
</script>

<style scoped>
.note {
	width: 80%;
	margin: 0 auto;
}
</style>
