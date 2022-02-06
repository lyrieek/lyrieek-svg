<template>
	<div id="app">
		<h1>SVG Studio</h1>
		<Tab />
		<Chart />
	</div>
</template>

<script>
import Tab from "./components/Tab.vue";
import Chart from "./components/Chart.vue";

export default {
	name: "App",
	components: {
		Chart,
		Tab
	}
};

</script>

<style>
body {
	background-color: #837d7d;
}

#app {
	font-family: Arial, sans-serif;
	text-align: center;
	color: white;
}

#app>h1 {
	font-size: 30px;
	height: 32px;
	margin: 14px 0px;
}

</style>
