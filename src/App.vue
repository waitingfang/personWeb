<template>
	<div id="app">
		<home></home>
		<tab></tab>
		<!-- <start></start> -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import home from './components/header/header'
import tab from './components/tab/tab'
import start from './components/start/start'
export default {
	components: {
		home,
		start,
		tab
	}
}
</script>

<style>
</style>
