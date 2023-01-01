var player1, ground;
var cornGroup, wheatGroup, carrotGroup;

function preload(){

}

function setup(){
  createCanvas(1400, 700)

  player1 = createSprite(700, 350, 30, 50);
  player1.shapeColor = ("lime")
  ground = createSprite(700, 700, 1400, 75);
  ground.shapeColor = ("peru")

  cornGroup = new Group()
  wheatGroup = new Group()
  carrotGroup = new Group()
}

function draw(){
  background("skyblue");
  //controls
  player1.collide(ground);
    player1.velocityY = player1.velocityY + 0.8;
    if(keyDown("left")){
      player1.x = player1.x-10;   
    }
    if(keyDown("right")){
      player1.x = player1.x+10;
    }
    if(player1.y >= 630){
      if(keyDown("up")){
        player1.velocityY = -15
    }}
  //farming
  if(player1.y >= 630){
    if(keyDown("c")){
    createCorn();
  }
  }
  if(player1.y >= 630){
    if(keyDown("x")){
      createCarrots();
    }
  }
  if(player1.y >= 630){
    if(keyDown("z")){
      createWheat();
    }
  }
  if(keyDown("d")){
    destroyCrops();
  }
  drawSprites();
}

function createCorn(){
  cornMaize = createSprite(player1.x, player1.y, 10, 60);
  cornMaize.shapeColor = ("green");
  corn = createSprite(player1.x+3, player1.y-15, 5, 30);
  corn.shapeColor = ("yellow");
  cornGroup.add(corn);
  cornGroup.add(cornMaize);
}

function createCarrots(){
  carrot = createSprite(player1.x, player1.y+15, 23, 30);
  carrot.shapeColor = ("orange");
  carrotTop = createSprite(player1.x, carrot.y-10, 10, 15)
  carrotTop.shapeColor = ("lawngreen")
  carrotGroup.add(carrot);
  carrotGroup.add(carrotTop)
}

function createWheat(){
  wheat = createSprite(player1.x, player1.y, 5, 50);
  wheat.shapeColor = ("#F5DEB3");
  wheatGroup.add(wheat);
}

function destroyCrops(){
  wheatGroup.destroyEach();
  carrotGroup.destroyEach();
  cornGroup.destroyEach();
}