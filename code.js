var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a5cf0d9f-29dc-4f1f-b5d1-a8d903fc14a5","ab35f069-03c7-49db-a346-a8cb48619fa1","8e66d6de-4515-4178-b1f4-19262f1256d8","45a255f5-ccdb-47ba-9667-251e6bd9047a","9a575298-3220-46fa-9f87-1b39e5abe928","bddf1a2a-fda5-4dc0-a7a8-36bd2fbbba2e","ffdaa718-cfc6-42fe-8409-5a8b0b2f3a1d","affb4016-e492-4068-8c36-6602e24f1582","0aaf0b1b-438c-46ff-83b6-92163b3685cd","51882867-cf4b-4b70-ac4d-4070e54677da","c366be6a-20a2-42c4-a6a7-a62e320b58d9","0dab57df-9f02-468c-967b-1350fd80b022","3a4c28cc-b47b-4595-bbe1-f07eba9d739c","aac2f9cf-b3ac-4f7d-9c3d-2421c5f9267c"],"propsByKey":{"a5cf0d9f-29dc-4f1f-b5d1-a8d903fc14a5":{"name":"bgd","sourceUrl":"assets/api/v1/animation-library/gamelab/ZLljgNrZwKF805dQl1x6hKUmBVMIfqeu/category_backgrounds/gradient_22.png","frameSize":{"x":400,"y":339},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZLljgNrZwKF805dQl1x6hKUmBVMIfqeu","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":339},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZLljgNrZwKF805dQl1x6hKUmBVMIfqeu/category_backgrounds/gradient_22.png"},"ab35f069-03c7-49db-a346-a8cb48619fa1":{"name":"bird","sourceUrl":"assets/api/v1/animation-library/gamelab/bNNbS4u6ZIs6R1.ah2.8uXyEqB3Pc4Xb/category_animals/birdside_11.png","frameSize":{"x":400,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"bNNbS4u6ZIs6R1.ah2.8uXyEqB3Pc4Xb","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bNNbS4u6ZIs6R1.ah2.8uXyEqB3Pc4Xb/category_animals/birdside_11.png"},"8e66d6de-4515-4178-b1f4-19262f1256d8":{"name":"bgd2","sourceUrl":"assets/api/v1/animation-library/gamelab/HJMXamvByE28ZPEEbFg5KUDcFo6EhoEf/category_backgrounds/gradient_25.png","frameSize":{"x":400,"y":339},"frameCount":1,"looping":true,"frameDelay":2,"version":"HJMXamvByE28ZPEEbFg5KUDcFo6EhoEf","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":339},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HJMXamvByE28ZPEEbFg5KUDcFo6EhoEf/category_backgrounds/gradient_25.png"},"45a255f5-ccdb-47ba-9667-251e6bd9047a":{"name":"bgd3","sourceUrl":"assets/api/v1/animation-library/gamelab/xk9FNA5fI7KifcH2.fXAvYJEzMQCjKsW/category_backgrounds/gradient_14.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"xk9FNA5fI7KifcH2.fXAvYJEzMQCjKsW","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xk9FNA5fI7KifcH2.fXAvYJEzMQCjKsW/category_backgrounds/gradient_14.png"},"9a575298-3220-46fa-9f87-1b39e5abe928":{"name":"bgd4","sourceUrl":"assets/api/v1/animation-library/gamelab/_pBimGWbiO2Nbb6J7Bfjez6VIWSBKdx./category_backgrounds/abstract_26.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pBimGWbiO2Nbb6J7Bfjez6VIWSBKdx.","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pBimGWbiO2Nbb6J7Bfjez6VIWSBKdx./category_backgrounds/abstract_26.png"},"bddf1a2a-fda5-4dc0-a7a8-36bd2fbbba2e":{"name":"fire","sourceUrl":"assets/api/v1/animation-library/gamelab/k6jtclaZiYE1rnBGvIcDXcZXc_WDoMiM/category_game_blocks/gameplayadventure_13.png","frameSize":{"x":328,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"k6jtclaZiYE1rnBGvIcDXcZXc_WDoMiM","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k6jtclaZiYE1rnBGvIcDXcZXc_WDoMiM/category_game_blocks/gameplayadventure_13.png"},"ffdaa718-cfc6-42fe-8409-5a8b0b2f3a1d":{"name":"gameover","sourceUrl":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"LBlP81tVFOe5pivbH48aq_4zoApgk97p","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png"},"affb4016-e492-4068-8c36-6602e24f1582":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wRzgG0ohkELBGCM9k5eCHjZhz_YWKfc9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/affb4016-e492-4068-8c36-6602e24f1582.png"},"0aaf0b1b-438c-46ff-83b6-92163b3685cd":{"name":"bird2","sourceUrl":null,"frameSize":{"x":400,"y":216},"frameCount":1,"looping":true,"frameDelay":12,"version":"CoJzEgM1N7POgXFM8mm_zllaU3Mz3Hvu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":216},"rootRelativePath":"assets/0aaf0b1b-438c-46ff-83b6-92163b3685cd.png"},"51882867-cf4b-4b70-ac4d-4070e54677da":{"name":"correct tile","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vahSHH55wLW3qyZPD_irG.jtmLX_amLb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/51882867-cf4b-4b70-ac4d-4070e54677da.png"},"c366be6a-20a2-42c4-a6a7-a62e320b58d9":{"name":"wrong tile","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yr11ilnyjgl962H9kOoVTmINJ7SptklZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c366be6a-20a2-42c4-a6a7-a62e320b58d9.png"},"0dab57df-9f02-468c-967b-1350fd80b022":{"name":"bomb","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"},"3a4c28cc-b47b-4595-bbe1-f07eba9d739c":{"name":"play again 1","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"9NPzJ0adaQCWzHldp1FpiH2d0vGDyDKr","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/3a4c28cc-b47b-4595-bbe1-f07eba9d739c.png"},"aac2f9cf-b3ac-4f7d-9c3d-2421c5f9267c":{"name":"play again","sourceUrl":null,"frameSize":{"x":820,"y":281},"frameCount":1,"looping":true,"frameDelay":12,"version":"LWL0Jbbg2HByO5LNhXeCkB8gJhlRfjQF","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":281},"rootRelativePath":"assets/aac2f9cf-b3ac-4f7d-9c3d-2421c5f9267c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200,200,100,100);
back.setAnimation("bgd4");
back.scale=1.5;
back.velocityY=2;

var score = 0;

var tile;
var tile1;
var bomb;

var player = createSprite(200,350,5,5);
player.setAnimation("fire");
player.scale=0.05;
player.setCollider("rectangle",0,0,player.width-20,player.height-20);

var tileGroup = new Group();
var tileGroup1 = new Group();
var bombGroup = new Group();


var gameState = 1;

var restart = createSprite(200,300,30,30);
 restart.setAnimation("play again");
 restart.visible = false;
 restart.scale = 0.2; 
var gameOver = createSprite(200,200,30,30);
gameOver.setAnimation("gameover");
gameOver.visible = false;

function draw() {
  if(gameState === 1){
    
  
  spawnBombs();
  spawnTiles();
  if(back.y>300){
    back.y=150;
    }
  // if( mousePressedOver(tile)){
   //   score =score+1;
   // }
  player.x=World.mouseX;
  player.y=World.mouseY;
  
  enemyTiles();
   
     
    for(var i=0; i<tileGroup.length; i++){
      if(player.isTouching(tileGroup.get(i))){
        score = score+1;
        tileGroup.get(i).destroy();
      }
    }
  
    
  
    
      if(tileGroup1.isTouching(player)){
        tileGroup1.destroyEach();
        back.velocityY=0;
    tileGroup.setVelocityYEach(0);
    tileGroup1.setVelocityYEach(0);
    bombGroup.setVelocityYEach(0);
    bombGroup.destroyEach();
    tileGroup.destroyEach();
    tileGroup1.destroyEach();
        gameState = 0;
      }
      
      if(bombGroup.isTouching(player)) {
       bombGroup.destroyEach();
        score = score - 4;
      }
        
  if(score > 10){
    
    tileGroup.setVelocityYEach(5+score/10);
    tileGroup1.setVelocityYEach(5+score/10);
    bombGroup.setVelocityYEach(12+score/10);
  } 
   
   
  }
  
 
  if(gameState === 0){
     tileGroup.setVelocityYEach(0);
    tileGroup1.setVelocityYEach(0);
    gameOver.visible = true;
    restart.visible = true;
     //gameOver = createSprite(200,200,30,30);
   // gameOver.setAnimation("gameover");
     // restart = createSprite(200,300,10,10);
   // restart.setAnimation("play again");
   //playSound("assets/category_alerts/cartoon_negative_bling.mp3");

  }
  if(mousePressedOver(restart)){
    reset();
    gameOver.visible = false;
  restart.visible = false;
  score = 0;
  }
  
  
  //spawn1();
  drawSprites();
  fill("black");
  text("SCORE : "+score,200,30);
  

}
function spawnTiles(){
  if (World.frameCount%40===0){
   tile = createSprite(20,-10,20,50);
    tile.velocityY=2;
    tile.setAnimation("correct tile");
    tile.x=random(10,380);
    tile.setCollider("rectangle",0,0,tile.width-30,tile.height-30);
    tileGroup.add(tile);
  
  }
  
  
}

function enemyTiles(){
   if (World.frameCount%70===0){
   tile1 = createSprite(20,-10,20,50);
    tile1.velocityY=2;
    tile1.setAnimation("wrong tile");
    tile1.x=random(10,380);
    tile1.setCollider("rectangle",0,0,tile1.width-50,tile1.height-50);
    tileGroup1.add(tile1);
  
  }
  
}

function spawnBombs(){
   if (World.frameCount%200===0){
   bomb = createSprite(20,-10,20,50);
    bomb.velocityY=6;
    bomb.scale=0.1;
    bomb.setAnimation("bomb");
    bomb.x=random(10,380);
    bomb.setCollider("rectangle",0,0,bomb.width-30,bomb.height-30);
    bombGroup.add(bomb);
  
  }
}
function reset(){
  gameState = 1;
  gameOver.visible = false;
  restart.visible = false;
  score = 0;
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
