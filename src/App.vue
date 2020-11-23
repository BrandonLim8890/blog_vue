<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	* {
		padding: 0;
		margin: 0;
	}

	.card {
		border: solid 1px #2c3e50;
		border-radius: 5px;
		height: 100%;
		width: 25%;
		margin: 1rem 2.5% 1rem 2.5%;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
</style>
