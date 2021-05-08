var garden, gardenImg, cat, catImg, catImg2, catImg3, mouse, mouseImg, mouseImg2, mouseImg3; 

function preload() {
    //load the images here
gardenImg = loadImage ("garden.png");
catImg1 = loadAnimation ("cat1.png");
catImg2 = loadAnimation ("cat2.png", "cat3.png");
catImg3 = loadAnimation ("cat4.png");
mouseImg1 = loadAnimation ("mouse1.png");
mouseImg2 = loadAnimation ("mouse2.png", "mouse3.png");
mouseImg3 = loadAnimation ("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite (450, 400, 20, 20);
    cat.addAnimation("sleeping", catImg1);

    mouse = createSprite (100, 400, 20, 20);
    mouse.addAnimtion("standing", mouseImg1);

}

function draw() {

    background(255);
    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if (cat.x - mouse.x < (cat.width/2 - mouse.width/2)){
        cat.velocityX = 0;
        cat.addAnimation("cat", catImg3);
        cat.changeAnimation("cat");
        cat.x = 40;

        mouse.addAnimation("mouse", mouseImg3);
        mouse.changeAnimation("mouse");
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode === LEFT_ARROW){
    
    cat.velocityX = -5;
    cat.addAnimation("running",catImg2);
    cat.changeAnimation("running");

    mouse.addAnimation("mouseRunning",mouseImg2);
    mouse.changeAnimation("mouseRunning");

}

}
