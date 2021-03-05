var garden,basket,basketball,soccer,sportball;
var gardenImg,basketImg,basketballImg,soccerImg,sportballImg;


function preload(){
  gardenImg = loadImage("garden.png");
  basketImg = loadImage("basket.png");
  basketballImg = loadImage("basketball.png");
  soccerImg = loadImage("soccer.png");
  sportballImg = loadImage("sportball.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
basket = createSprite(160,340,20,20);
basket.scale =0.09;
basket.addImage(basketImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  basket.x = World.mouseX;
  
  edges= createEdgeSprites();
  basket.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createBasketballs();
    } else if (select_sprites == 2) {
      createSoccerss();
    }else {
      createSportball();
    }
  }

}

function createBasketballs() {
baskteball = createSprite(random(50, 350),40, 10, 10);
basketball.addImage(basketballImg);
basketball.scale=0.07;
basketball.velocityY = 3;
basketball.lifetime = 150;
  
}

function createSoccerss() {
soccer = createSprite(random(50, 350),40, 10, 10);
soccer.addImage(soccerImg);
soccer.scale=0.08;
soccer.velocityY = 3;
soccer.lifetime = 150;
}

function createSportball() {
sportball = createSprite(random(50, 350),40, 10, 10);
sportball.addImage(sportballImg);
sportball.scale=0.06;
  sportball.velocityY = 3;
  sportball.lifetime = 150;
}
