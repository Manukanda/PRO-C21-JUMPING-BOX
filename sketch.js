var canvas;
var music;
var b1,b2,b3,b4;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(0,580,360,30);
b1 .shapecolor=rgb(0,0,255)

b2=createSprite(295,580,200,30);
b2 .shapecolor="pink"

b3=createSprite(515,580,200,30);
b3 .shapecolor="yellow"

b4=createSprite(740,580,220,30);
b4 .shapecolor="blue"

ball=createSprite(random(20,750),100,40,40);
ball.shapecolor="white"
ball.velocityX=2;
ball.velocityY=9;

//create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
ball.bounceOff(edges)
if(b1.isTouching(ball)&&ball.bounceOff(b1)){
    ball.shapecolor="green"
music.play()
}

if(b2.isTouching(ball)&&ball.bounceOff(b2)){
    ball.shapecolor="pink"
    music.play()
}
if(b3.isTouching(ball)){
    ball.shapecolor="yellow"
 ball.velocityX=0
 ball.velocityY=0
 music.stop()
}
if(b4.isTouching(ball)&&ball.bounceOff(b4)){
    ball.shapecolor="blue"
    music.play()

}

drawSprites()
    //add condition to check if box touching surface and make it box
}
