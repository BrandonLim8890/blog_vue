<template>
	<div class="comment">
		<header>
			<p class="header left">
				<strong>{{ comment.author }}</strong> on {{ timestamp }}
			</p>
			<div class="right">
				<button v-if="isLoggedIn" type="button" class="del-btn btn" @click="deleteComment">Delete</button>
			</div>
		</header>
		<p>{{ comment.body }}</p>
	</div>
</template>

<script>
	export default {
		name: 'CommentItem',
		props: ['comment', 'isLoggedIn'],
		data() {
			return {
				timestamp: ''
			}
		},
		methods: {
			deleteComment() {
				this.$emit('delete-comment', this.comment)
			}
		},
		created() {
			this.timestamp = new Date(this.comment.time).toLocaleString()
		}
	}
</script>

<style>
	.comment {
		margin: 1.5rem 0 1.5rem 0;
		text-align: start;
		width: 100%;
	}

	header {
		font-size: 0.9rem;
		padding: 1rem 0 1rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
