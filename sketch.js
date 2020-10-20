//Create variables here
var database, Sdog, happydog, food, foodstock;
function preload()
{
	//load images here
  Sdog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.scale = 0.2;
  dog.addImage(Sdog);
  foodstock = database.ref('food');
  foodstock.on("value",readstock); 
}


function draw() { 
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writestock(food);
  dog.addImage(happydog);
}
  drawSprites();
  //add styles here

}
function readstock(data){
  food = data.val();
}
function writestock(x){
  if(x<=0){
    x = 0
  }else{
    x = x-1;
  }
  database.ref('/').update({
    food:x
  })
}


