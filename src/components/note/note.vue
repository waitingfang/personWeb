<template>
	<div class="note">
		<div class="notewrapper">
			<div class="notelist" v-for="(note, index) in notes" :key="index">
				<div class="title">
					<h2>{{note.title}}</h2>
				</div>
				<div class="content">
					<p>{{notes.content}}</p>
				</div>
				<div class="date">{{notes.date}}</div>
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
.notelist {
	width: 100%;
}
.notelist .title {
	width: 100%;
	height: 40px;
	background: #eee;
	color: #333;
}
.notelist .content {
	margin-top: 10px;
	padding: 10px;
	font-size: 16px;
	color: #eee;
}
</style>
