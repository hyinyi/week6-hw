let nData
let year
let rating
window.addEventListener('load', function () {
	// console.log('page is loaded');
})

/*----p5code----*/

function setup() {
	//Create the canvas and save it to a variable;
	fetch('top250_min.json')
		.then((response) => response.json())
		.then((data) => {
			//console.log(data);
			// console.log(data.movie.length)

			let movieArray = data
	

			year = movieArray.movie[randomNumber].year
			console.log(randomNumber)
			rating = movieArray.movie[randomNumber].rating
			console.log(typeof rating)
			nData = data.movie

			for (let i = 0; i < Math.floor(rating); i++) {
				fill(245, 233, 66, 15 * rating)
				console.log(rating)
				console.log(Math.floor(rating))
				noStroke()
				let x = random(width)
				let y = random(height)
				let d = 150
				circle(x, y, d)
				star(x, y, 70, 30, 5)
			}
		})
	const myCanvas = createCanvas(window.innerWidth, window.innerHeight)
	//Set the parent of the canvas to an exisitng html element's id value
	myCanvas.parent('canvas-container')
	background(28, 42, 121)
}

function draw() {
	textSize(150)
	fill(242, 244, 247, 5)
	text(year, 1000, 700)
}

function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints
	let halfAngle = angle / 2.0
	beginShape()
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2
		let sy = y + sin(a) * radius2
		vertex(sx, sy)
		sx = x + cos(a + halfAngle) * radius1
		sy = y + sin(a + halfAngle) * radius1
		vertex(sx, sy)
	}
	endShape(CLOSE)
}
