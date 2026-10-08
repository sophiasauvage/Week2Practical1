
//let centreX = 400;
//let centreY = 400;
let centreX = mouseX;
let centreY = mouseY;

function setup(){
    createCanvas( 800, 800)
}

function draw() {
   
// ANIMATION
    let centreX = mouseX;
    let centreY = mouseY;

    background(255)
    stroke(0)
    strokeWeight(2)
    rectMode(CENTER)

//HANDS
    fill(255, 239, 222)
    circle( centreX - 100, centreY +60, 40)
    circle(centreX + 60, centreY + 60, 40)

// JEANS/LOWER-BODY
    fill(78, 52, 46)
    stroke(0)
    quad(centreX - 20, centreY + 70, centreX + 40, centreY - 30, centreX + 40, centreY + 220, centreX - 20, centreY + 220)
    quad(centreX - 80, centreY + 70, centreX - 20, centreY + 30, centreX - 20, centreY + 220, centreX - 80, centreY + 220)
    fill(62, 39, 35)
     rect(centreX + 20, centreY + 90, 40, 20, 0, 0, 0, 50)
     rect(centreX - 60, centreY + 90, 40, 20, 0, 0, 50, 0)

 //SHOES
    fill(0)
    rect(centreX - 55, centreY + 220, 70, 15, 20, 20, 50, 50)
    rect(centreX + 15, centreY + 220, 70, 15, 20, 20, 50, 50)
    fill(255)
    rect(centreX + 15, centreY + 225, 70, 5, 20, 20, 50, 50)
    rect(centreX - 55,centreY + 225, 70, 5, 20, 20, 50, 50)

//UPPER BODY
   fill(150)
   quad(centreX - 110, centreY - 65, centreX - 125, centreY + 50, centreX - 55, centreY + 50, centreX - 80, centreY - 85)
   quad(centreX + 30, centreY - 85, centreX + 5, centreY + 50, centreX + 85, centreY + 50, centreX + 60, centreY - 75)
    fill(100)
    quad(centreX - 80, centreY -85, centreX - 95, centreY + 60, centreX + 55, centreY + 60, centreX + 30, centreY - 85)
    fill(60) 
    quad(centreX - 70, centreY + 15, centreX - 75, centreY + 50, centreX + 35, centreY + 50, centreX + 30, centreY + 15)
    rect(centreX - 20, centreY + 70, 160, 20, 20)
    rect(centreX - 110, centreY + 50, 40, 10, 20)
    rect(centreX + 70, centreY + 50, 40, 10, 20) 
    fill(105, 0, 30)
    rect(centreX - 25, centreY - 25, 80, 55, 10)
   fill(208, 116, 0)
    rect(centreX - 25, centreY - 25, 65, 45, 10)
    fill(253, 191, 7)
    rect(centreX - 25, centreY - 25, 45, 25, 10)
    stroke(0)
    strokeWeight(3)
    fill(0)
    triangle(centreX - 25, centreY - 15, centreX -15, centreY - 30, centreX - 10, centreY -15)
    triangle(centreX -35, centreY - 15, centreX -25, centreY - 25, centreX -20, centreY - 15)
    
//HOOD 
stroke(0)
strokeWeight(2)
    fill(150)
    ellipse( centreX - 25, centreY - 100, 110, 50)
    fill(60)
    ellipse(centreX - 25, centreY - 95, 85, 20)
    fill(255, 239, 222)
    rect(centreX - 25, centreY - 95, 40, 20, 40, 40, 40, 40)

//HEAD BASE
    fill(255, 239, 222)
    ellipse(centreX -25, centreY - 170, 110, 150)

//EYES
    fill(167, 144, 135)
    rect(centreX, centreY -150, 30, 30, 0, 0, 40, 40)
    rect(centreX - 50, centreY - 150, 30, 30, 0, 0, 40, 40)
    fill(255)
    rect(centreX, centreY - 160, 30, 35, 0, 0, 40, 40)
    rect(centreX - 50, centreY - 160, 30, 35, 0, 0, 40, 40)
   fill(0)
    rect(centreX, centreY - 160, 20, 20, 0, 0, 40, 40)
    rect(centreX - 50, centreY - 160, 20, 20, 0, 0, 40, 40)

// HAIR
    fill(96, 66, 0)
    ellipse(centreX + 20, centreY - 170, 30, 40)
    ellipse(centreX + 30, centreY - 170, 25, 20)
    ellipse(centreX - 70, centreY - 170, 30, 40)
    ellipse(centreX -80, centreY - 170, 25, 20)
    ellipse(centreX - 30, centreY - 170, 30, 50)
    ellipse(centreX - 80, centreY - 170, 25, 20)

// HAT
    fill(81, 0, 67)
    arc(centreX - 25, centreY - 200, 115, 90, 3.15, 6.3, PI + QUARTER_PI, OPEN);
    fill(60, 0, 43)
    rect(centreX - 25, centreY - 185, 130, 35, 10)
    fill(105, 0, 30)
    rect(centreX - 25, centreY - 185, 50, 25, 10)

//MOUTH
    fill(217, 144, 135)
    rect(centreX - 25, centreY -115, 20, 10, 40, 40, 40, 40)




}