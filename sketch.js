
var dog, happyDog, sadDog, database, foodS, foodStock;

function preload()
{
	sadDog = loadImage("images/dogImg.png")
	happyDog = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  foodStock = database.ref("food");
  foodStock.on("value",(data)=>{

    foodS = data.val();
  })


  dog = createSprite(width/2+80 , height/2-70 , 10 ,10);
  dog.addImage(sadDog);
  dog.scale = 0.19

  
}


function draw() {
  background("green");

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog)

}
  

  drawSprites();
  //add styles here

  textSize(15);
  fill("white")
  text("note : press UP arrow key to feed the food for the dog .." , 60 , 20)
  text("FOOD REMAINING : " + foodS , 60,100);

}
function writeStock(x){

if(x<=0){
x=0

}else{

  x=x-1;
}

  database.ref("/").update({

    food:x
  })
}



