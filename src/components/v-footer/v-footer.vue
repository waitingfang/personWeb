<template>
	<div class="footer">
		<div class="content">
			<v-nav></v-nav>
			<div class="right">Copyright @Waiting. All Right Reserved.</div>
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
.footer {
	width: 100%;
	height: 155px;
	background: #2c3e50;
	border-top: 1px solid #394c5f;
}
.content {
	margin: 0 auto;
	width: 60%;
}
.content .right {
	text-align: center;
	color: #9dafc0;
}
</style>