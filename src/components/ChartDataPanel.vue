<template>
	<div class="chart-data-panel">
		<p>图形元素</p>
		<ul>
			<li v-for="item in this.elem" :key="item.index">
				{{ item.name }} {{ item.shortVal }}
			</li>
		</ul>
		<p>图层</p>
		<ul>
			<li>默认图层</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'ChartDataPanel',
	props: ['svg'],
	data() {
		return {
			elem: [],
			observer: null
		}
	},
	watch: {
		svg: {
			deep: true,
			handler(val) {
				if (this.observer) {
					this.observer.disconnect()
				}
				this.elem.length = 0
				this.observer = new MutationObserver(() => { //mutationsList
					this.elem.length = 0
					for (let index in val.children) {
						const elem = val.children[index]
						let value = ""
						if (elem.tagName === "path") {
							const d = elem.attributes.d
							value = !d ? "" : d.value
						}
						let name = elem.tagName
						name = name.substring(0, 1).toUpperCase() + name.substring(1)
						this.elem.push({
							index,
							name,
							value,
							shortVal: this.shortVal(value)
						})
						console.log(elem)
					}
				});
				this.observer.observe(val, { attributes: true, childList: true, subtree: true });
			}
		}
	},
	methods: {
		shortVal(val) {
			if (val.length < 20) {
				return val
			}
			return val.substring(0, 18) + "..."
		}
	}
}

</script>

<style>
.chart-data-panel {
	background: #6e6e6e;
	height: 100%;
	overflow: auto;
}

.chart-data-panel>ul {
	list-style-type: none;
	padding: 5px;
	text-align: left;
}

.chart-data-panel>ul>li {
	padding: 5px;
	border: 1px solid silver;
}

</style>
