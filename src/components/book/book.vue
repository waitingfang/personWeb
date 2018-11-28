<template>
    <div class="book">
		<div class="title-wrapper">
			<div class="title">BOOK TYPE</div>
			<div class="desc">{{msg}}</div>
		</div>
		<section class="learn">
			<div class="row info">
				<div class="col-sm-4 item">
					<dl class="title-sl">
						<dt class="title-st">书籍</dt>
						<dd>HTML+CSS网页设计与布局</dd>
						<dd>JavaScript基础教程</dd>
						<dd>JavaScript学习指南</dd>
						<dd>JavaScript DOM编程艺术</dd>
					</dl>
				</div>
				<div class="col-sm-4 item">
					<dl class="title-sl">
						<dt class="title-st">在线文档</dt>
						<dd>w3school在线教程</dd>
						<dd>JavaScript | MDN</dd>
						<dd>jQuery API 文档</dd>
					</dl>
				</div>
				<div class="col-sm-4 item">
					<dl class="title-sl">
						<dt class="title-st">学习网站</dt>
						<dd>各种官网</dd>
						<dd>Github</dd>
						<dd>慕课网</dd>
						<dd>微信公众号</dd>
					</dl>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg:"Make a little progress every day."
		}
	}
}
</script>
<style scoped>
@import "../../common/css/bootstrap.min.css";
.book {
	width: 100%;
	background: #fff;
    /* opacity: 0.8; */
	margin-bottom: 60px;
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
	color:#000;
}
.title-wrapper .desc {
	margin-top: 20px;
	font-size: 16px;
	color: #adbbca;
}
.learn {
	margin: 0 auto;
	width: 80%;
}
.info {
	display: flex;
}
.info .item {
	flex: 1;
	text-align: center;
	color:#5d6e80;
}
.title-thin {
	font-size: 1.35em;
	font-weight: 400;
}
</style>
