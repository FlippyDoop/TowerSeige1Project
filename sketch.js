const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;

var engine, world;
var backgroundImg


function preload() {
    poy_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;


    //box
    box1 = new BoxMaker(600,height-250);
    box2 = new BoxMaker(650,height-250);
    box3 = new BoxMaker(700,height-250);
    box4 = new BoxMaker(625,height-300);
    box5 = new BoxMaker(675,height-300);

    box6 = new BoxMaker(1150, height-350);
    box7 = new BoxMaker(1200, height-350);
    box8 = new BoxMaker(1250, height-350);
    box9 = new BoxMaker(1175, height-400);
    box10 = new BoxMaker(1225, height-400);


    
    //ground
    ground1 = new Ground(800,height,1602,50);
    ground2 = new Ground(650, height-200,300, 25);
    ground3 = new Ground(1200, height-300,300, 25);

    //ball
    ball = Bodies.circle(315,190,20);
    World.add(world,ball);

    //rope
    rope1 = new RopeMaker(ball, {x: 200, y: 300})

    
}

function draw(){
    background("grey");

    Engine.update(engine);

    
    //box
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    //ground
    ground1.display();
    ground2.display();
    ground3.display();

    //hex
    image(poy_img,ball.position.x,ball.position.y,40,40)
   

   
}


function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX,y: mouseY});

}



function mouseReleased(){
    rope1.fly();

}














































