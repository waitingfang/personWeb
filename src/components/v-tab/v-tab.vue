<template>
	<div class="tab">
		<div class="content">
			<div class="name">SAFSDG</div>
			<div class="nav">
				<v-nav></v-nav>
			</div>
		</div>
	</div>
</template>
<script>
import VNav from '../nav/nav'
export default {
	components: {
		VNav
	}
}
</script>
<style scoped>
.tab {
	width: 100%;
	height: 90px;
	background: #fff;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
.content {
	display: flex;
	width: 80%;
	height: 100%;
	margin: 0 auto;
}
.content .nav a {
	color: #5d6e80;
}
.content .name {
	flex: 350px 0 0;
	line-height: 90px;
	font-size: 24px;
	font-weight: 700;
	color:#2c3e50;
}
.content .nav {
	flex: 1;
}

</style>