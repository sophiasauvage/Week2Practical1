function setup(){
    createCanvas(600, 600)
}

function draw(){
    background(255)
    fill(0, 0, 255)
    rectMode(CENTER)
    rect(300, 300, 2 *(mouseX - 300), 2 *(mouseY - 300))
}