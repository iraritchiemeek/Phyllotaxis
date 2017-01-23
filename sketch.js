var n = 0;
var c = 4;

function setup() {
	createCanvas(800,800)
	angleMode(DEGREES)
	frameRate(600)
	colorMode(RGB, 255,255,255,1)
	// background(0)
}

function draw() {
	var a = n * 137.5
	var r = c * sqrt(n)

	var x = r * cos(a) + width/2
	var y = r * sin(a) + height/2
	fill(a - r * 2,r * 2 % 256,r % 256,0.8)
	stroke('white');
	strokeWeight(0.7)
	// noStroke()
	ellipse(x,y,10,10)

 	n++
 	console.log(x)
 	if (x > width - 20 || y > height - 20) {
 		noLoop()
 	}
}