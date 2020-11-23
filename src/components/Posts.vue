<template>
	<div class="container">
		<div class="posts">
			<PostItem v-bind:post="post" v-for="post in posts" :key="post.id" class="post" />
		</div>
	</div>
</template>

<script>
	import PostItem from './PostItem'

	export default {
		name: 'Posts',
		components: {
			PostItem
		},
		props: ['posts']
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
	}

	.posts {
		display: flex;
		width: 80vw;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	.post {
		margin: 1.5rem;
		flex: 1 1 calc(33%-1.5rem);
		height: 150px;
	}

	.post:hover {
		color: #42b983;
		cursor: pointer;
		border-color: #42b983;
		transition: 0.2s;
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
	}
</style>
