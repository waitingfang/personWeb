<template>
	<div class="header">
		<div class="content">
			<div class="content_left">
			Waiting | Fang
			</div>
			<div class="content_right">
				<span>简体中文&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; 英文</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.header{
	width: 100%;
	height: 60px;
	background: #e3e6ed;
}
.header .content {
	position: relative;
	width: 80%;
	margin: 0 auto;
	font-size: 12px;
	color: #000;
}
.content .content_left{
	display: inline-block;
	font-size: 18px;
	line-height: 60px;
}
.content .content_right{
	position: absolute;
	right: 0;
	bottom: 24px;
	font-size: 12px;
	font-family: "microsoft yahei";
}
</style>
