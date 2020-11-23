<template>
	<div>
		<Header />
		<div class="container">
			<div class="post">
				<div class="top">
					<h1>{{ title }}</h1>
					<p>{{ post.body }}</p>
					<span>{{ author.first }} {{ author.last }}</span>
				</div>
				<div class="bottom">
					<button @click="newComment = true" class="comment-btn btn">Add Comment</button>
					<div class="right" v-if="isLoggedIn">
						<button type="button" @click="editPost" class="btn">Edit</button>
						<button type="button" @click="deletePost" class="btn del-btn del-post">Delete</button>
					</div>
				</div>
			</div>
			<div class="new-comment" v-if="newComment">
				<header>
					<h2>New Comment</h2>
				</header>
				<form>
					<div class="group">
						<label for="name">Name</label>
						<input v-model="comment.author" type="text" name="name" id="name" placeholder="John" />
					</div>
					<div class="group">
						<label for="body">Text</label>
						<textarea v-model="comment.body" name="body" id="body"></textarea>
					</div>
				</form>
				<footer>
					<button class="btn" @click="addComment">Submit</button>
					<button class="btn" @click="newComment = false">Close</button>
				</footer>
			</div>
			<Comments v-bind:comments="comments" v-bind:isLoggedIn="isLoggedIn" v-on:delete-comment="deleteComment" />
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Comments from '../components/Comments'
	import Header from '../components/layout/Header'

	export default {
		name: 'PostDetail',
		props: ['id'],
		components: {
			Comments,
			Header
		},
		data() {
			return {
				post: {},
				comments: [],
				title: '',
				author: {},
				newComment: false,
				comment: {
					author: '',
					body: ''
				},
				isLoggedIn: localStorage.getItem('token')
			}
		},
		methods: {
			async addComment() {
				let res = await axios.post(`http://localhost:3000/posts/${this.id}`, this.comment)
				this.comments = res.data.comments
				this.newComment = false
				this.comment.author = ''
				this.comment.body = ''
			},
			async deleteComment(comment) {
				let id = comment._id
				let res = axios.delete('http://localhost:3000/posts/comments/' + id)
				console.log('comment ' + id + 'has been deleted')
				if (res) this.$router.go(0)
			},
			async editPost() {
				this.$router.push({
					name: 'PostUpdate',
					query: { author: this.author, body: this.post.body, title: this.title }
				})
			},
			async deletePost() {
				await axios.delete(`http://localhost:3000/posts/${this.id}`)
				console.log('successfully deleted')
				this.$router.push({ name: 'PostList' })
			}
		},
		created() {
			axios
				.get(`http://localhost:3000/posts/${this.id}`)
				.then((res) => {
					this.post = res.data.post
					this.comments = res.data.comments
					this.title = res.data.title
					this.author = this.post.author
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}
</script>

<style>
	.btn {
		align-self: flex-start;
		background-color: white;
		font-weight: normal;
	}

	.post {
		display: flex;
		flex-direction: column;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.post .top {
		padding: 3rem 3rem 0 3rem;
		width: 60vw;
	}

	.post .top > * {
		margin: 1.5rem;
	}

	.post span {
		font-weight: bold;
	}

	.post .bottom {
		display: flex;
		justify-content: space-between;
	}

	.new-comment {
		width: 60vw;
	}

	.del-post {
		margin: 0 3rem;
	}

	.del-btn:hover {
		color: red;
		border: 1px red solid;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	form input {
		height: 1rem;
		padding: 0.75rem;
		font-size: 1rem;
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}

	form textarea {
		resize: vertical;
		min-height: 5rem;
		padding: 0.75rem;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		font-size: 1rem;
	}

	form .group {
		min-width: 100%;
		align-self: flex-start;
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		justify-content: center;
		margin: 1rem 0 1rem 0;
	}

	form .group label {
		text-align: start;
		align-self: flex-start;
		justify-self: flex-start;
		margin-bottom: 0.5rem;
		font-weight: bold;
		font-size: 1.1rem;
	}

	footer {
		display: flex;
		margin: 1rem 0 0 0;
	}

	footer button {
		margin-right: 1rem;
	}
</style>
