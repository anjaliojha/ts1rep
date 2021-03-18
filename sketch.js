const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(Engine);

    ground = new Ground(450,390,900,20);
    stand1=new Stand(390,300,250,10)
    stand2= new Stand(700,200,200,10)
    //level1 blocks
    block1= new Blocks(300,275,30,40)
    block2= new Blocks(330,275,30,40)
    block3= new Blocks(360,275,30,40)
    block4= new Blocks(390,275,30,40)
    block5= new Blocks(420,275,30,40)
    block6= new Blocks(450,275,30,40)
    block7= new Blocks(480,275,30,40)
}
function draw(){
    background("blue");
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()

}