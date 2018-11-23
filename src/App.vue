<template>
	<div id="app">
		<v-header></v-header>
		<v-tab></v-tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<v-footer></v-footer>
	</div>
</template>

<script>
import VHeader from './components/v-header/v-header'
// import home from './components/header/header'
// import feet from './components/footer/footer'
import VFooter from './components/v-footer/v-footer'
// import tab from './components/tab/tab'
import VTab from './components/v-tab/v-tab'
import Home from './components/home/home'
// import start from './components/start/start'
export default {
	components: {
		VHeader,
		VTab,
		Home,
		// home,
		// start,
		VFooter
	}
}
</script>

<style>
</style>
