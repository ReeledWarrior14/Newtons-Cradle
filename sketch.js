var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var engine, world;

var ground;

var trashCan, paperBall;

var ball1, ball2, ball3, ball4, ball5;

function setup(){
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new GROUND(width/2, height, width*3, 50);

    // top1 = new GROUND(width/2, 75, width * 3/4, 50);

    ball1 = new BALL(200, 275, 50);
    ball2 = new BALL(300, 275, 50);
    ball3 = new BALL(400, 275, 50);
    ball4 = new BALL(500, 275, 50);
    ball5 = new BALL(600, 275, 50);

    c1 = new CONSTRAINT(ball1.bodyC, {x: 200, y: 75});
    c2 = new CONSTRAINT(ball2.bodyC, {x: 300, y: 75});
    c3 = new CONSTRAINT(ball3.bodyC, {x: 400, y: 75});
    c4 = new CONSTRAINT(ball4.bodyC, {x: 500, y: 75});
    c5 = new CONSTRAINT(ball5.bodyC, {x: 600, y: 75});
}

function draw(){
    Engine.update(engine);

    background(150);

    //make the points for the 5 balls every 100 x units starting at 150
    //So the points will be (150, 75), (250, 75), (350, 75), (450, 75), and (550, 75);

    push();
    fill(0);
    ground.displayGround();
    pop();

    push();
    fill(225);
    // top1.displayGround();
    rectMode(CENTER);
    rect(width/2, 75, width * 3/4, 50); 
    pop();

    imageMode(CENTER);
    angleMode(DEGREES);

    ball1.displayBall();
    ball2.displayBall();
    ball3.displayBall();
    ball4.displayBall();
    ball5.displayBall();

    c1.displayConstraint();
    c2.displayConstraint();
    c3.displayConstraint();
    c4.displayConstraint();
    c5.displayConstraint();

    fill("blue");
    text(mouseX, 10, 15);
    text(mouseY, 30, 15);
}

function mousePressed(){
    Matter.Body.applyForce(ball1.bodyC, {x: ball1.bodyC.position.x, y: ball1.bodyC.position.y}, {x : -400, y : 0});
}

// function keyPressed(){
//     if (keyCode == RIGHT_ARROW){
//         Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : 5, y : 0});
//     }
//     if(keyCode == LEFT_ARROW){
//         Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : -5, y : 0});
//     }
//     if(keyCode == UP_ARROW){
//         Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : 0, y : -15});
//     }
// }