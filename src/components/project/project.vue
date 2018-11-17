<template>
	<div class="project">
		<div class="screen" ref="screen">
			<div class="main" ref="main">
			</div>
			<div class="barrage">
				<input type="text" class="input" ref="oInput" placeholder="请输入弹幕">
				<button class="btn" @click="sendBarrange">发送</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
		sendBarrange() {
			this.send()
		},
		send() {
			const len = this.$refs.oInput.value.length
			console.log((/^\s+$/).test(this.$refs.oInput.value))
			if (len <= 0 || (/^\s+$/).test(this.$refs.oInput.value)) {
				alert('内容不能为空')
			} else if (len >= 20) {
				alert('内容不能大于20')
			}
			this.$nextTick(() => {
				this.creatValue(this.$refs.oInput.value)
			})
		},
		creatValue(str) {
			const screenWidth = this.$refs.screen.offsetWidth
			let oSpan = document.createElement('span')
			oSpan.innerHTML = str
			oSpan.className = 'text'
			this.$refs.main.appendChild(oSpan)
			oSpan.style.position = 'absolute'
			oSpan.style.left = Math.random() * screenWidth + 'px'
			oSpan.style.top = Math.random() * 350 + 'px'
			oSpan.style.fontSize = Math.random() * 16 + 16 + 'px'
			oSpan.style.color = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'
			let timing = Math.floor(Math.random() * 3)
			oSpan.timer = setInterval(() => {
				if (oSpan.offsetLeft >= -oSpan.offsetWidth && oSpan.offsetLeft <= screenWidth) {
					switch (timing) {
					case 0:
						oSpan.style.left = oSpan.offsetLeft - 2 + 'px'
						break
					case 1:
						oSpan.style.left = oSpan.offsetLeft - 4 + 'px'
						break
					case 2:
						oSpan.style.left = oSpan.offsetLeft - 6 + 'px'
						break
					}
				} else {
					clearInterval(oSpan.timer)
					this.$refs.main.removeChild(oSpan)
				}
			}, 100)
		}
	}
}
</script>

<style scoped>
.project {
	width: 100%;
	background: #e3e6ed;
}
.screen {
	width: 80%;
	height: 500px;
	margin: 0 auto;
	background: #fff;
	border:1px solid #ccc;
	overflow: hidden;
}
.screen .main {
	position: relative;
	width: 100%;
	height: 400px;
	white-space: nowrap;
}
.screen .barrage {
	padding-top: 35px;
	width: 100%;
	border-top:1px solid #ccc;
	text-align: center;
	font-size: 0;
}
.screen .barrage .input {
	width: 500px;
	height: 30px;
	border:1px solid #ccc;
	vertical-align: top;
	font-size: 12px;
	text-indent: 2em;
	box-sizing: border-box;
}
.screen .barrage .btn {
	width: 60px;
	height: 30px;
	background: orange;
	border: 0;
}
</style>
