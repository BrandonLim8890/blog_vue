<template>
	<div class="comments">
		<CommentItem
			v-bind:comment="comment"
			v-for="comment in comments"
			:key="comment.id"
			v-on:delete-comment="deleteComment"
			v-bind:isLoggedIn="isLoggedIn"
		/>
	</div>
</template>

<script>
	import CommentItem from './CommentItem'
	export default {
		name: 'Comments',
		props: ['comments', 'isLoggedIn'],
		components: {
			CommentItem
		},
		methods: {
			deleteComment(comment) {
				this.$emit('delete-comment', comment)
			}
		}
	}
</script>

<style>
	.comments {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 60vw;
	}
</style>
