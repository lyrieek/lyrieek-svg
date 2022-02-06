<template>
	<div class="chart-container">
		<ChartTool />
		<div class="svg-container">
			<svg></svg>
		</div>
		<ChartDataPanel v-bind:svg="this.svg" />
	</div>
</template>

<script>
import * as d3 from "d3"
import Draw from "../fun/Draw.js"
import ChartDataPanel from "./ChartDataPanel"
import ChartTool from "./ChartTool"

export default {
	name: 'Chart',
	components: {
		ChartDataPanel,
		ChartTool
	},
	data() {
		return {
			width: 500,
			height: 500,
			zoom: 1,
			svg: null
		}
	},
	computed: {
		filteredData() {
			return this.axisData
		}
	},
	methods: {
		titleCase(title) {
			return title.charAt(0).toUpperCase() + title.slice(1)
		},
		getXY() {
			const clickEvent = d3.event
			return [Number((clickEvent.offsetX / this.zoom).toFixed(2)), Number((clickEvent.offsetY / this.zoom).toFixed(2))]
		}
	},
	mounted() {
		const chartHeight = window.innerHeight - 130 // 60 header + 50 tab + 20 footer
		d3.select('.chart-container').style("height", chartHeight + "px")
		const svgElem = d3.select('.svg-container>svg')
		this.svg = svgElem.node();
		svgElem.style('width', `${this.width}px`)
			.style('height', `${this.height}px`)
		svgElem.on("wheel", () => {
			const zoomVal = Number(svgElem.style("zoom"))
			this.zoom = zoomVal + (d3.event.wheelDelta / 1000)
			svgElem.style("zoom", this.zoom)
		})
		const draw = new Draw()
		let drawElem;
		svgElem.on("mousedown", () => {
				draw.start(...this.getXY())
				drawElem = svgElem.append("path")
			})
			.on("mousemove", () => {
				if (draw.hasNext()) {
					return
				}
				draw.add(this.getXY())
				drawElem.attr('d', d3.line()(draw.get()))
			}).on("mouseup", () => {
				draw.clear()
			})
	}
}

</script>

<style>
.chart-container {
	clear: both;
	overflow: auto;
	border: 1px solid gray;
	border-radius: 6px;
	border-top-left-radius: 0px;
	background: silver;
	display: grid;
	grid-template-columns: 15% 70% 15%;
	justify-content: center;
	align-items: center;
}

.svg-container {
	height: 100%;
	overflow: auto;
    display: grid;
    align-items: center;
}

.svg-container>svg {
	background: white;
	zoom: 1;
	margin: 0 auto;
}

</style>
