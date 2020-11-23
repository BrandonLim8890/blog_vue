<template>
	<div>
		<Header v-bind:hideLogin="true" />
		<div class="container">
			<form class="login">
				<h1>Sign In</h1>
				<div class="group">
					<label for="username">Username</label>
					<input
						type="email"
						name="username"
						id="username"
						v-model="username"
						required
						v-bind:class="{ 'input-error': error == 'User not found' }"
					/>
				</div>
				<div class="group">
					<label for="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						v-model="password"
						required
						v-bind:class="{ 'input-error': error == 'Wrong Password' }"
					/>
				</div>
				<button type="button" @click="login">Login</button>
				<span v-if="error" class="error">{{ error }}</span>
			</form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Header from '../components/layout/Header'
	export default {
		name: 'Login',
		components: {
			Header
		},
		data() {
			return {
				username: '',
				password: '',
				error: ''
			}
		},
		methods: {
			async login() {
				let user = {
					username: this.username,
					password: this.password
				}
				let res = await axios.post('http://localhost:3000/login', user)
				const token = res.data.token
				if (token) {
					localStorage.setItem('token', token)
					axios.defaults.headers.common['authorization'] = 'Bearer ' + token
					this.$router.go(-1)
				} else {
					this.error = res.data.message
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	form {
		width: 60vw;
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
	form .group {
		align-self: flex-start;
		width: 100%;
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

	.error {
		margin-top: 1rem;
		color: red;
		font-size: 0.9rem;
	}

	.input-error {
		border: 1px red solid;
		border-radius: 2px;
	}
</style>
