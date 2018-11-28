<template>
	<div class="nav">
		<div class="tab-item">
			<router-link :to="'/home'">HOME</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="'/project'">PROJECT</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="'/note'">NOTE</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="'/news'">BLOG</router-link>
		</div>
		<div class="tab-item">
			<router-link :to="'/contact'">CONTACT</router-link>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.nav {
	display: flex;
}
.tab-item {
	flex: 1;
	line-height: 90px;
	text-align: center;
	font-size: 15px;
}

.router-link-active {
	color: #18c2a1;
}
</style>