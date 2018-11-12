import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news/news'
import project from '@/components/project/project'
import heart from '@/components/heart/heart'
import note from '@/components/note/note'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			component: news
		},
		{
			path: '/project',
			component: project
		},
		{
			path: '/note',
			component: note
		},
		{
			path: '/heart',
			component: heart
		}
	]
})
