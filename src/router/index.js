import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news/news.vue'
import project from '@/components/project/project.vue'
import note from '@/components/note/note.vue'
import home from '@/components/home/home.vue'
import contact from '@/components/contact/contact.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: home
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
			path: '/contact',
			component: contact
		}
	]
})
