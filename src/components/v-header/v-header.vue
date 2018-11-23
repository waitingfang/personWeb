<template>
	<div class="header">
		<div class="login-wrapper">
			<div class="login">
				<span>Login</span>
				<span>Register</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.header {
	width: 100%;
	height: 40px;
	background: #2c3e50;
}
.login-wrapper {
	position: relative;
	margin: 0 auto;
	width: 80%;
	height:100%;
}
.login {
	position: absolute;
	right: 0;
	bottom: 0;
}
.login span {
	padding: 0 10px;
	width: 100%;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
	color: #fff;
	border-right: 1px solid #445a6f;
}
</style>