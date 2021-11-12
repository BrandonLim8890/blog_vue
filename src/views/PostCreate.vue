<template>
	<div class="post-create">
		<Header />

		<div v-if="loggedIn" class="center">
			<PostForm v-on:new-post="newPost" />
		</div>
		<div v-else class="center">
			<h1>You are not logged in<br />Please log in</h1>
		</div>
	</div>
</template>

<script>
	import Header from '../components/layout/Header'
	import axios from 'axios'
	import PostForm from '../components/PostForm'
	export default {
		name: 'PostCreate',
		components: {
			Header,
			PostForm
		},
		data() {
			return {
				loggedIn: localStorage.getItem('token')
			}
		},
		methods: {
			async newPost(post) {
				await axios.post(`https://intense-woodland-21613.herokuapp.com/posts/create`, post)
				this.$router.push({ name: 'PostList' })
			}
		}
	}
</script>

<style scoped>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
