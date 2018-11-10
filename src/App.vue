<template>
	<div id="app">
		<tab></tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import tab from './components/tab/tab'
export default {
	components: {
		tab
	}
}
</script>

<style>
</style>
