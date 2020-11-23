<template>
	<form>
		<h1>Create New Post</h1>
		<div class="group">
			<label for="title">Title</label>
			<input v-model="title" type="text" name="title" id="title" placeholder="Title" />
		</div>
		<div class="group">
			<label for="body">Text</label>
			<textarea v-model="body" name="body" id="body"></textarea>
		</div>
		<div class="group">
			<label for="authors">Author</label>
			<select name="authors" id="authors" v-model="author">
				<option v-bind:value="author._id" v-for="author in authors" :key="author._id"
					>{{ author.first }} {{ author.last }}</option
				>
			</select>
		</div>
		<footer>
			<button type="button" class="btn" @click="newPost">Submit</button>
		</footer>
	</form>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'PostForm',
		props: ['previousPost'],
		methods: {
			newPost() {
				let post = {
					author: this.author,
					title: this.title,
					body: this.body
				}
				this.$emit('new-post', post)
			}
		},
		data() {
			return {
				title: typeof this.previousPost === 'undefined' ? '' : this.previousPost.title,
				authors: [],
				author: '',
				body: typeof this.previousPost === 'undefined' ? '' : this.previousPost.body
			}
		},
		async created() {
			try {
				let res = await axios.get('https://intense-woodland-21613.herokuapp.com/posts/create')
				this.authors = res.data.users
				this.author = typeof this.previousPost === 'undefined' ? this.authors[0]._id : this.previousPost.author._id
			} catch (err) {
				console.log(err)
			}
		}
	}
</script>

<style scoped>
	form {
		width: 60vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		justify-content: center;
		margin: 1rem 0;
	}

	form .group label {
		text-align: start;
		align-self: flex-start;
		justify-self: flex-start;
		margin-bottom: 0.5rem;
		font-weight: bold;
		font-size: 1.1rem;
	}

	form select {
		width: 100%;
	}

	footer {
		margin: 1rem 0;
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
</style>
