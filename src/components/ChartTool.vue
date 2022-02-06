<template>
	<div class="chart-tool">
		<p>工具</p>
		<div class="chart-pens">
			<div>
				<fa icon="pencil-alt" />
				铅笔
			</div>
			<div>
				<fa icon="marker" />
				马克笔
			</div>
			<div>
				<fa icon="brush" />
				刷子
			</div>
			<div>
				<fa icon="pen-fancy" />
				钢笔
			</div>
			<div>
				<fa icon="spray-can" />
				喷枪
			</div>
			<div>
				<fa icon="eraser" />
				橡皮
			</div>
			<div>
				<fa icon="eye-dropper" />
				取色笔
			</div>
			<div>
				<fa icon="paint-roller" />
				滚筒
			</div>
			<div>
				<fa icon="fill-drip" />
				油漆桶
			</div>
			<div>
				<fa icon="icicles" />
				渐变
			</div>
			<div>
				<fa icon="braille" />
				模糊
			</div>
			<div>
				<fa icon="chess-board" />
				马赛克
			</div>
		</div>
		<p>尺寸</p>
		<div class="chart-size">
			<svg style="width:100%;height:30px">
				<path d="M 10 20 L 250 10 L 250 30 Z" fill="black" />
			</svg>
		</div>
		<p>选取</p>
		<div class="chart-select">
			<div>
				<fa icon="mouse-pointer"></fa>
				鼠标
			</div>
			<div>
				<fa icon="border-style"></fa>
				矩形选取
			</div>
			<div>
				<fa icon="draw-polygon" />
				多边形选取
			</div>
			<div>
				<fa icon="magic" />
				魔法棒选取
			</div>
		</div>
		<p>纹理</p>
		<div class="chart-fill">
		</div>
	</div>
</template>

<style>
.chart-tool {
	background: #6e6e6e;
	height: 100%;
}

.chart-tool>p {
	margin-bottom: 5px;
}

.chart-tool>div {
	background: #484545;
}

.chart-pens {
	display: grid;
	padding: 5px 0px;
	grid-template-columns: repeat(3, 30%);
	grid-gap: 5px 5px;
	justify-content: center;
}

.chart-pens>div {
	padding: 3px;
	background: #727070;
	cursor: pointer;
	border-radius: 5px;
}

.chart-pens>div:hover {
	background: #4d4c4c;
}

.chart-pens>div.active {
	background: #201f1f;
}

.chart-select {
	display: grid;
	padding: 5px 0px;
	grid-template-columns: repeat(2, 45%);
	grid-gap: 5px 5px;
	justify-content: center;
}

.chart-select>div {
	padding: 3px;
	background: #727070;
	cursor: pointer;
	border-radius: 5px;
}

</style>
