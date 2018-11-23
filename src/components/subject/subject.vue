<template>
    <div class="subject">
        <div class="title-wrapper">
			<div class="title">SUBJECT TYPE</div>
			<div class="desc">get explore your dream to travel the world!</div>
		</div>
        <div class="content">
			<div class="item-wrapper">
				<div class="item">
					<div class="icon">
						<img src="./1.png" alt="" width="120" height="120">
					</div>
					<div class="text">1</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./2.png" alt="" width="120" height="120">
					</div>
					<div class="text">2</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./3.png" alt="" width="120" height="120">
					</div>
					<div class="text">3</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./4.png" alt="" width="120" height="120">
					</div>
					<div class="text">4</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./5.png" alt="" width="120" height="120">
					</div>
					<div class="text">5</div>
				</div>
				<div class="item">
					<div class="icon">
						<img src="./6.png" alt="" width="120" height="120">
					</div>
					<div class="text">6</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {}
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
	width: 120px;
	height: 120px;
	line-height: 120px;
	text-align: center;
	border: 5px solid #fff;
	border-radius: 50%;
}
.content .item-wrapper .text {
	color: #9dafc0;
}
</style>
