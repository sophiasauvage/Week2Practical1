function setup(){
    createCanvas( 800, 800)
}

function draw() {
    background(255)
stroke(0)
strokeWeight(2)
    rectMode(CENTER)

//HANDS
    fill(255, 239, 222)
    circle(300, 460, 40)
    circle(460, 460, 40)

// JEANS/LOWER-BODY
    fill(78, 52, 46)
    stroke(0)
    quad(380, 470, 440, 430, 440, 620, 380, 620)
    quad(320, 470, 380, 430, 380, 620, 320, 620)
    fill(62, 39, 35)
     rect(420, 490, 40, 20, 0, 0, 0, 50)
     rect(340, 490, 40, 20, 0, 0, 50, 0)

 //SHOES
    fill(0)
    rect(345, 620, 70, 15, 20, 20, 50, 50)
    rect(415, 620, 70, 15, 20, 20, 50, 50)

//UPPER BODY
    fill(150)
   quad(290, 335, 275, 450, 345, 450, 320, 315,)
   quad(430, 315, 405, 450, 485, 450, 460, 325,)
   fill(100)
   quad(320, 315, 305, 460, 455, 460, 430, 315,)
   fill(60)
   quad(330, 415, 325, 450, 435, 450, 430, 415,)
   rect(380, 470, 160, 20, 20)
    rect(290, 450, 40, 10, 20)
    rect(470, 450, 40, 10, 20) 
    
    fill(105, 0, 30)
    rect(375, 375, 80, 55, 10)
   fill(208, 116, 0)
    rect(375, 375, 65, 45, 10)
    fill(253, 191, 7)
    rect(375, 375, 45, 25, 10)
    stroke(0)
    strokeWeight(3)
    fill(0)
    triangle(375, 385, 385, 370, 390, 385,)
    triangle(365, 385, 375, 375, 380, 385,)
    
//HOOD 
stroke(0)
strokeWeight(2)
    fill(150)
    ellipse(375, 300, 110, 50)
    fill(60)
    ellipse(375, 305, 85, 20)
    fill(255, 239, 222)
    rect(375, 305, 40, 20, 40, 40, 40, 40)

//HEAD BASE
    fill(255, 239, 222)
    ellipse(375, 230, 110, 150)

//EYES
    fill(167, 144, 135)
    rect(400, 250, 30, 30, 0, 0, 40, 40)
    rect(350, 250, 30, 30, 0, 0, 40, 40)
    fill(255)
    rect(400, 240, 30, 35, 0, 0, 40, 40)
    rect(350, 240, 30, 35, 0, 0, 40, 40)
   fill(0)
    rect(400, 240, 20, 20, 0, 0, 40, 40)
    rect(350, 240, 20, 20, 0, 0, 40, 40)

// HAIR
    fill(96, 66, 0)
    ellipse(420, 230, 30, 40)
    ellipse(430, 230, 25, 20)
    ellipse(330, 230, 30, 40)
    ellipse(320, 230, 25, 20)
    ellipse(370, 230, 30, 50)
    ellipse(320, 230, 25, 20)

// HAT
    fill(81, 0, 67)
    arc(375, 200, 115, 90, 3.15, 6.3, PI + QUARTER_PI, OPEN);
    fill(60, 0, 43)
    rect(375, 215, 130, 35, 10)
    fill(105, 0, 30)
    rect(375, 215, 50, 25, 10)

//MOUTH
    fill(217, 144, 135)
    rect(375, 285, 20, 10, 40, 40, 40, 40)

// ANIMATION

let centreX = 400;
let centreY = 400;

}