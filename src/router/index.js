import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../views/PostList.vue'
import PostDetail from '../views/PostDetail'
import Login from '../views/Login'
import PostUpdate from '../views/PostUpdate'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'PostList',
		component: PostList
	},
	{
		path: '/posts/create',
		name: 'Create',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/PostCreate.vue')
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetail,
		props: true
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/posts/:id/update',
		name: 'PostUpdate',
		component: PostUpdate,
		props: true
	}
]

const router = new VueRouter({
	routes
})

export default router
