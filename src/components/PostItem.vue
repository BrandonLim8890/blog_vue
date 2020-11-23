<template>
	<div class="post-item card" @click="directToInfo">
		<h1>{{ post.title }}</h1>
		<p>{{ post.body }}</p>
		<span>{{ `${post.author.first} ${post.author.last}` }}</span>
	</div>
</template>

<script>
	export default {
		name: 'PostItem',
		props: ['post'],
		methods: {
			directToInfo() {
				this.$router.push({ name: 'PostDetail', params: { id: this.post._id } })
			}
		}
	}
</script>

<style scoped>
	h1 {
		margin-top: 1.2rem;
	}
	.post-item {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
</style>
