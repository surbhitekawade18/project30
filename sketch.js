
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{tree = loadImage("images/tree.png")
 boy =loadImage("images/boy.png")	
}

function setup() {
	createCanvas(1200, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  box1=new Box(600,380,50,50)
             
	box2=new  Box(550,380,50,50)
  box3=new  Box(650,380,50,50)
  box4=new  Box(700,380,50,50)
  box5=new  Box(750,380,50,50)
  box6=new  Box(800,380,50,50)
  box7=new  Box(850,380,50,50)

  box8=new Box(575,350,50,50)
  box9=new Box(625,350,50,50)
  box10=new Box(675,350,50,50)
  box11=new Box(725,350,50,50)
  box12=new Box(775,350,50,50)
  box13=new Box(825,350,50,50)
 
  box14=new Box(600,300,50,50)
  box15=new Box(650,300,50,50)
  box16=new Box(700,300,50,50)
  box17=new Box(750,300,50,50)
  box18=new Box(800,300,50,50)
   
  
  box20=new Box(625,250,50,50)
  box21=new Box(675,250,50,50)
  box22=new Box(725,250,50,50)
  box23=new Box(775,250,50,50)
  box24=new Box(825,250,50,50)
	stone=new Stone(85,330,50,50)
	rubberband=new SlingShot(stone.body,{x:85,y:330})
  shelf1=new Ground(700,400,400,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  
  shelf1.display()
  stone.display()
  rubberband.display()

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }

  function mouseReleased(){
	  rubberband.fly()
  }

	function keyPressed(){
    if(keyCode===32){
      rubberband.attach(stone.body)

    }
    
  }
  
	
 
