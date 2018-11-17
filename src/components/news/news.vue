<template>
	<div class="news">
		<!-- about us -->
		<div class="about">
			<titlel>
				<h1>关于我们</h1>
			</titlel>
			<div class="content">
				<p>供热行业为传统行业，信息化程度普遍较低，但随着城市集中供热的改革，供热逐渐商品化、市场化，供热企业之间的竞争也逐渐变大，供热企业的信息化也随之开始萌芽，特别是作为主营业务收入来源的暖费，传统的手工方式已经远远不能满足现在的收费管理要求。同时随着国家节能减排的推进，建筑节能和热计量收费已成为供热行业的热点，收费政策的调整和客户对服务的要求都对供热企业管理和发展提出了更高的要求。</p>
				<p>只有实施信息化，才能应对持续的政策变化，才能对热计量等收费实施精确化管理，才能提升企业的管理效率和管理水平，从而提升供热企业的效益。越来越多的供热企业已经或开始考虑购买供热收费软件和相关管理软件。</p>
				<p>供热行业市场正在爆发，但由于该类专项软件提供商普遍还处于小规模或软件作坊阶段，稳定、优秀的成熟软件产品几乎很难找到，而且多数软件产品的成熟性、可实施性、严谨性、扩展性、灵活性不够。让客户不知如何挑选性价比高的产品，也让软件代理和合作伙伴受尽了不成熟软件的困扰。</p>
				<p>“普及供热行业精确管理思想”，使收费工作高效进行，客户查询、收退费、找钱、开票一系列工作只需要几秒就能完成；收费账目清晰、一目了然；随时进行最新收费数据的汇总，报表一查即有，大大提高了收费工作效率，降低了供热企业的管理和运营成本。收费主管及领导能够随时查看最新的收费信息，及时掌握收费进展情况，为工作部署安排提供了最及时可靠的依据。</p>
			</div>
		</div>
		<!-- product -->
		<div class="product">
			<titlel>
				<h1>项目展示</h1>
			</titlel>
			<div class="items">
				<div class="items_w">
					<div class="items_w_top">早晨第一杯水喝什么?</div>
					<div class="items_content"></div>
					<div class="items_w_bot">
						<span>2018年5月</span>
						<button>查看详情</button>
					</div>
				</div>
				<div class="items_w">
					<div class="items_w_top">早晨第一杯水喝什么?</div>
					<div class="items_content"></div>
					<div class="items_w_bot">
						<span>2018年5月</span>
						<button>查看详情</button>
					</div>
				</div>
				<div class="items_w">
					<div class="items_w_top">早晨第一杯水喝什么?</div>
					<div class="items_content"></div>
					<div class="items_w_bot">
						<span>2018年5月</span>
						<button>查看详情</button>
					</div>
				</div>
				<div class="items_w">
					<div class="items_w_top">早晨第一杯水喝什么?</div>
					<div class="items_content"></div>
					<div class="items_w_bot">
						<span>2018年5月</span>
						<button>查看详情</button>
					</div>
				</div>
			</div>
		</div>
		<!-- news -->
		<div class="news">
			<titlel>
				<h1>新闻中心</h1>
			</titlel>
			<div class="content">
				<ul>
					<li><a href="#">集中供热，已有近百年的历史。由于它具有节约燃料、减少城市污染等优点，所以发展速度很快。世界上已有20多个国家采用集中供热。</a></li>
					<li><a href="#">集中供热，已有近百年的历史。由于它具有节约燃料、减少城市污染等优点，所以发展速度很快。世界上已有20多个国家采用集中供热。</a></li>
				</ul>
			</div>
		</div>
  </div>
</template>

<script>
import titlel from '../../base/title/title'
export default {
	components: {
		titlel
	}
}
</script>

<style scoped>
.news {
	width: 100%;
	margin: 0 auto;
}
.about {
	width: 80%;
	margin: 0 auto;
}
.about .content{
	width: 100%;
	height: 100%;
	color: #000;
}
.about .content p{
	margin-bottom: 15px;
	width: 100%;
	line-height: 20px;
	text-indent: 2em;
	font-size: 12px;
	font-family:"mocrosoft yahei";
}
.product{
	width: 100%;
	margin: 10px auto;
	background-color: #ced0d4;
}
.product:after {
	content:' ';
	display:table;
	clear:both;
}
.product .items{
	display: flex;
	width: 80%;
	margin: 0px auto;
	padding-bottom: 30px;
}
.product .items .items_w{
	flex: 1;
	margin-right: 10px;
	height: 310px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 4px 4px 5px #ccc;
}
.items_w .items_w_top{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: #fff;
	border-radius: 4px;
}
.items_w .items_content {
	width: 100%;
	height: 220px;
	background-color: #f9f9f9;
}
.product .items .items_w .items_w_bot {
	position: relative;
	width: 100%;
	height: 40px;
}
.product .items .items_w .items_w_bot span {
	position: absolute;
	left: 15px;
	top: 15px;
	font-size: 12px;
}
.product .items .items_w .items_w_bot button {
	position: absolute;
	right: 15px;
	top: 8px;
	width: 86px;
	height: 24px;
	background: #f9f9f9;
	border: 1px solid #d7d7d7;
	border-radius: 4px;
}
.news {
	clear: both;
}
.news .content {
	width: 100%;
	margin: 0 auto;
}
.news .content ul{
	list-style: none;
	text-align: center;
}
.news .content li{
	margin-bottom: 5px;
}
.news .content li a{
	color: #000;
	text-decoration: none;
	line-height: 16px;
	font-size: 12px;
}
</style>
