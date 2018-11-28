<template>
    <div class="subject">
        <div class="title-wrapper">
			<div class="title">SUBJECT TYPE</div>
			<div class="desc">{{msg}}</div>
		</div>
        <div class="content">
			<div class="item-wrapper">
				<div class="item">
					<div class="icon">
						<img src="./1.png" alt="" width="100" height="100">
					</div>
					<div class="text">HTML</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./2.png" alt="" width="100" height="100">
					</div>
					<div class="text">CSS</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./3.png" alt="" width="100" height="100">
					</div>
					<div class="text">VUE</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./4.png" alt="" width="100" height="100">
					</div>
					<div class="text">JavaScript</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./5.png" alt="" width="100" height="100">
					</div>
					<div class="text">jQuery</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./6.png" alt="" width="100" height="100">
					</div>
					<div class="text">webpack</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			msg:"Knowledge changes destiny, knowledge decides wealth."
		}
	}
}
</script>
<style scoped>
.subject {
	width: 100%;
	background: #2c3e50;
    /* opacity: 0.8; */
}
.title-wrapper {
	margin: 0 auto;
	width: 100%;
	height: 200px;
	text-align: center;
}
.title-wrapper .title {
	padding-top: 80px;
	font-size: 25px;
	color:#fff;
}
.title-wrapper .desc {
	margin-top: 20px;
	font-size: 16px;
	color: #adbbca;
}
.content {
	margin: 10px auto;
	width: 80%;
	padding-bottom: 110px;
}
.content .item-wrapper {
	display: flex;
}
.content .item-wrapper .item {
	flex: 1;
	text-align: center;
}
.content .item-wrapper .icon{
	margin: 0 auto;
	width: 100px;
	height: 100px;
	line-height: 100px;
	text-align: center;
	border: 5px solid #fff;
	border-radius: 50%;
}
.content .item-wrapper .text {
	margin-top: 10px;
	color: #9dafc0;
}
</style>
