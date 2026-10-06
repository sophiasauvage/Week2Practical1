function setup(){
    createCanvas(500, 500)
}

function draw(){
    background(130, 0, 100)
    rectMode(CENTER)
    fill(255)
    rect(mouseX, mouseY, 100)
    rect(mouseX + 100, mouseY + 100, 100)
    rect(mouseX - 100, mouseY - 100, 100)
}