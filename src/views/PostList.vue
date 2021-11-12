<template>
	<div class="post-list">
		<Header />
		<Posts v-bind:posts="posts" />
	</div>
</template>

<script>
	import axios from 'axios'

	import Header from '../components/layout/Header'
	import Posts from '../components/Posts'

	export default {
		name: 'PostList',
		components: {
			Header,
			Posts
		},
		data() {
			return {
				posts: []
			}
		},
		methods: {
			async fetchData() {
				let res = await axios.get(`https://intense-woodland-21613.herokuapp.com/posts`)
				this.posts = res.data.posts
			}
		},
		created() {
			this.fetchData()
		}
	}
</script>

<style scoped></style>
