<template>
	<div id="nav">
		<div class="left">
			<h3>Brandon's Blog</h3>
			<router-link to="/">Posts</router-link> |
			<router-link to="/posts/create">New Post</router-link>
		</div>
		<div class="right">
			<button v-if="!loggedIn && !hideLogin" class="login" @click="directToLogin">Login</button>
			<button v-if="loggedIn" class="logout" @click="logout">Logout</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Header',
		props: ['hideLogin'],
		data() {
			return {
				loggedIn: localStorage.getItem('token')
			}
		},
		methods: {
			directToLogin() {
				this.$router.push('/login', () => {})
			},
			logout() {
				localStorage.clear()
				this.loggedIn = false
				axios.defaults.headers['authorization'] = null
				this.$router.go(0)
			}
		}
	}
</script>

<style>
	#nav {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	#nav button {
		font-weight: bold;
	}

	#nav a,
	button {
		background-color: white;
		color: #2c3e50;
		font-size: 0.9rem;
		text-decoration: none;
	}

	button {
		padding: 0.5rem;
		border: solid 1px #2c3e50;
		border-radius: 3px;
	}

	button:hover {
		color: #42b983;
		cursor: pointer;
		border-color: #42b983;
		transition: 0.2s;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	#nav h3 {
		display: inline-block;
		margin-right: 1rem;
		font-size: 1rem;
	}
</style>
