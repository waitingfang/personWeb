<template>
    <div class="contact">
		<section class="info-wrapper">
			<div class="row info">
				<div class="col-sm-6 item">
					<h3 class="title-thin text-muted">个人信息</h3>
					<dl class="dl-horizontal ">
						<dt class="text-upper">姓名</dt>
						<dd>Waiting Fang</dd>
						<dt class="text-upper">性别</dt>
						<dd>女</dd>
						<dt class="text-upper">出生年月</dt>
						<dd>1994-10-21</dd>
						<dt class="text-upper">联系地址</dt>
						<dd>陕西省咸阳市</dd>
						<dt class="text-upper">e-mail</dt>
						<dd>waitingg1021@163.com</dd>
						<dt class="text-upper">联系电话</dt>
						<dd>18291410226</dd>
					</dl>
				</div>
				<div class="col-sm-6 item">
					<h3 class="title-thin text-muted">教育经历</h3>
					<dl class="dl-horizontal ">
						<dt class="text-upper">时间</dt>
						<dd>2014.9-2018.7</dd>
						<dt class="text-upper">学校</dt>
						<dd>西安建筑科技大学</dd>
						<dt class="text-upper">专业</dt>
						<dd>工业设计</dd>
						<dt class="text-upper">政治面貌</dt>
						<dd>共青团员</dd>
					</dl>
				</div>
			</div>
		</section>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="css">
@import "../../common/css/bootstrap.min.css";
.contact {
	margin: 0 auto;
	width: 80%;
}
.info-wrapper {

}
.info-wrapper .info {
	display: flex;
}
.info-wrapper .info .item {
	flex: 1;
	text-align:center;
}
.info-wrapper h3{
	/* padding-right: 80px; */
	color: #2c3e50;
	font-size: 22px;
}
.title-thin {
	font-size: 1.35em;
	font-weight: 400;
}
.dl-horizontal dt {
    width: 100px;
    font-size: 18px;
    overflow: hidden;
    clear: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 40px;
    color: #777;
}
.dl-horizontal dd {
    font-size: 16px;
    line-height: 40px;
    color: #686868;
}
.text-muted {
    color: #757575;
	}
</style>
