<template>
	<ul class="tab">
		<li class="active">临时稿件.svg<a @click="closeTab">X</a></li>
		<li @click="createTab">新稿件</li>
		<!--  -->
	</ul>
</template>

<script>
export default {
	name: 'Tab',
	methods: {
		createTab() {
			alert("尚未保存")
		},
		closeTab() {
			alert("尚未保存")
		}
	}
}

</script>

<style>
.tab {
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	cursor: pointer;
	height: 50px;
	overflow: hidden;
}

.tab>li {
	padding: 12px;
	height: 24px;
	float: left;
	border: 1px solid gray;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.tab>li.active {
	background: #57585a;
	border-bottom-color: #57585a;
}

.tab>li:hover {
	background: #575f5f;
	border-bottom-color: #575f5f;
}

.tab>li>a {
	float: right;
	padding: 2px;
	margin-left: 5px;
	height: 18px;
	width: 18px;
	font-weight: bold;
	color: red;
	border-radius: 90%;
}

.tab>li>a:hover {
	background: rgb(240, 155, 155);
}

/* 
.tab>li:not(:last-child):hover {
	background: #575f5f;
	border-bottom-color: #575f5f;
} */

/* .tab>li:last-child {
	float: right;
	padding: 9px;
    height: 18px;
    width: 18px;
	font-weight: bold;
	color: red;
	border-radius: 90%;
	margin-top: 10px;
}

.tab>li:last-child:hover {
	background: rgb(240, 155, 155);
} */

</style>
