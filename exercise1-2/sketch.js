function setup() {
    createCanvas(400, 200)
}

function draw() {
    background(255)
    noStroke()
    
    fill(0, 0, 255)
    rect(0, 0, width/ 2, height)
    fill(100, 100, 255)
    rect(200, 0, width/ 2, height / 2)
    fill(0)
    rect(200, 100, width/ 4, height / 2)
    fill(150, 0, 150)
    rect(300, 100, width/ 4, height /4)
    fill(255, 0, 200)
    rect(300, 150, width/ 4, height /4)
}