<template>
	<div class="header">
		<div class="background">
			<div class="content">
				<div class="info" @click="infomation">
					<div class="name">{{info}}</div>
				</div>
				<div class="nav">
					<div class="tab">
						<div class="tab-item">
							<router-link :to="'/news'">News</router-link>
						</div>
						<div class="tab-item">
							<router-link :to="'/project'">Project</router-link>
						</div>
						<div class="tab-item">
							<router-link :to="'/note'">Note</router-link>
						</div>
						<div class="tab-item">
							<router-link :to="'/heart'">Heart</router-link>
						</div>
					</div>
				</div>
			</div>
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

<style>
* {
    padding: 0;
    margin: 0;
}
.header {
	background: url(1.jpg) no-repeat;
	background-size:100%;
	width: 100%;
	height: 60px;
	padding: 10px 0px;
}
.header .background{
	background: rgba(200,200,200,0.1);
}
.header .content {
	display: flex;
	margin: 0px auto;
	width: 80%;
	height: 60px;
	line-height: 60px;
	color: #fff;
}
.header .content .info {
	flex: 300px 0 0;
	font-size: 18px;
}
.header .nav {
	flex: 1;
}
.header .nav .tab {
	display: flex;
	text-align: center;
}
.tab .tab-item {
	flex: 1;
	display: block;
	font-size: 16px;
	color: #000000;
	text-decoration: none;
}
.tab .tab-item .router-link-active {
	color: #ff0000;
}
</style>
