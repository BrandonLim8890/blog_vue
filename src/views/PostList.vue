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
		methods: {},
		async created() {
			let res = await axios.get('https://intense-woodland-21613.herokuapp.com/posts')
			this.posts = res.data.posts
		}
	}
</script>

<style scoped></style>
