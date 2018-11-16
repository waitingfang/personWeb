<template>
	<div class="note">
		<div class="notewrapper">
			<div class="notelist" v-for="(note, index) in notes" :key="index">
				<div class="title">
					<h2 class="name">{{note.title}}</h2>
					<p class="date">{{note.date}}</p>
				</div>
				<div class="content">
					<p>{{note.content}}</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<p>友情链接友情链接友情链接友情链接友情链接友情链接友情链接友情链接</p>
			<p>友情链接友情链接友情链接友情链接友情链接友</p>
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
	margin: 0 auto;
	width: 100%;
	background: #fffdfd;
}
.notelist {
	position: relative;
	margin: 0 auto;
	width: 80%;
	font-family: -apple-system,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",FontAwesome,sans-serif !important;
	color: #565656;
}
.notelist .title {
	position: relative;
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #ccc;
	color: #333;
}
.notelist .title .name {
	padding-left: 10px;
	color: #333;
}
.notelist .title .date {
	position: absolute;
	right: 10px;
	bottom: 0px;
	font-size: 10px;
	color: #333;
}
.notelist .content {
	margin: 5px auto;
	padding: 15px;
	font-size: 12px;
	line-height: 22px;
	text-indent: 2em;
}
.bottom{
	background: #282828;
	margin-top: 10px;
	width: 100%;
	height: 40px;
	text-align: center;
	border-top: 2px solid #ccc;
	padding-top:5px;
	font-size: 10px;
	line-height: 18px;
	color: #fff;
}
</style>
