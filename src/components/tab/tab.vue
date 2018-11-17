<template>
	<div class="tab">
		<div class="content">
			<router-link :to="'/news'" class="nav">
				<div class="tab-item">News</div>
			</router-link>
			<router-link :to="'/project'" class="nav">
				<div class="tab-item">Project</div>
			</router-link>
			<router-link :to="'/note'" class="nav">
				<div class="tab-item">Note</div>
			</router-link>
			<router-link :to="'/heart'" class="nav">
				<div class="tab-item">Heart</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: 'Waiting | Fang'
		}
	},
	methods: {
		infomation() {}
	}
}
</script>

<style scoped>
.tab {
	width: 100%;
	height: 60px;
	background: #307caf;
}
.content {
	display: flex;
	margin: 0px auto;
	width: 80%;
	height: 60px;
	line-height: 60px;
	color: #fff;
}
.nav {
	flex: 1;
	display: block;
	text-align: center;
	font-size: 16px;
	color: #fff;
	text-decoration: none;
}
.router-link-active .tab-item{
	background: #296893;
}
</style>
