<template>
	<div class="post-update">
		<Header />

		<div class="center" v-if="loggedIn">
			<PostForm
				v-on:new-post="updatePost"
				v-bind:previousPost="{
					author: author,
					title: title,
					body: body
				}"
			/>
		</div>

		<div class="center" v-else>
			<h1>
				You are not logged in<br />
				Please log in
			</h1>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Header from '../components/layout/Header'
	import PostForm from '../components/PostForm'
	export default {
		name: 'PostUpdate',
		props: ['id'],
		components: {
			Header,
			PostForm
		},
		data() {
			return {
				loggedIn: localStorage.getItem('token'),
				title: this.$route.query.title,
				author: this.$route.query.author,
				body: this.$route.query.body
			}
		},
		methods: {
			async updatePost(post) {
				await axios.put(`https://intense-woodland-21613.herokuapp.com/posts/${this.id}/update`, post)
				this.$router.go(-1)
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
