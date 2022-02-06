export default class Draw {

	startPos = []
	data = []

	start(...pos) {
		this.startPos.push(...pos)
	}

	add(...pos) {
		this.data.push(...pos)
	}

	get() {
		return [
			this.startPos,
			...this.data
		]
	}

	hasNext() {
		return this.startPos.length === 0
	}

	clear() {
		this.data.length = 0
		this.startPos.length = 0
	}

}
