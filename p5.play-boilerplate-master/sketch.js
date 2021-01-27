const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ballImg
var pin1,pin2,pin3,pin4;
var pin6,pin7, pin8,pin9;
var pin10,pin11,pin12,pin13;
var slingshot;
var bkg,bkgImg

function preload(){
  //ballImg=loadImage("sprites/ball.png");
  //pinImg=loadImage("sprites/pin.png")
  //bkgImg=loadImage("sprites/bkg.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  pin1=new Pin(500,100,20,20)
  pin2=new Pin(500,150,20,20)
  pin3=new Pin(500,200,20,20)
  pin4=new Pin(500,250,20,20)
  pin5=new Pin(500,300,20,20)
  pin6=new Pin(500,350,20,20)
  pin7=new Pin(500,400,20,20)
  pin8=new Pin(390,170,20,20)
  pin9=new Pin(390,230,20,20)
  pin10=new Pin(390,290,20,20)
  pin11=new Pin(390,350,20,20)
  pin12=new Pin(290,220,20,20)
  pin13=new Pin(290,280,20,20)
  //pin.addImage("sprites/pin.png")

  ground = new Ground(700,200,800,400);
  


  slingshot= new Slingshot(this.ball,{x:200,y:100});
}

function draw() {
 // background(bkgImg);  


  rectMode(CENTER)
  rect(100,250,40,40);

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  pin11.display();
  pin12.display();
  pin13.display();



  ball.display();
  slingshot.display();


  fill("brown")
  ground.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
    slingshot.attach(this.ball)
  }
}
