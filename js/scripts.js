window.addEventListener("load", function(){
  const canvas = document.getElementById("canvas-1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1500;
  canvas.height = 820;

  //Directional controls for Player

  class ControlInput {
    constructor() {
      this.keys = [];
      window.addEventListener("keydown", direction => {
        if ((   direction.key === "ArrowDown" ||
                direction.key === "ArrowUp" ||
                direction.key === "ArrowLeft" ||
                direction.key === "ArrowRight")
                && this.keys.indexOf(direction.key) === -1) {
          this.keys.push(direction.key);
        }
        console.log(direction.key, this.keys);
      });

      window.addEventListener("keyup", direction => {
        if (    direction.key === "ArrowDown" ||
                direction.key === "ArrowUp" ||
                direction.key === "ArrowLeft" ||
                direction.key === "ArrowRight") {
          this.keys.splice(this.keys.indexOf(direction.key), 1);
        }
        // console.log(direction.key, this.keys);
      });
    }
  }

  //Player object && function

  class Player {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.width = 300;
      this.height = 300;
      this.x = 0;
      this.y = this.gameHeight - this.height;
      this.image = document.getElementById("playerImage");
      this.speed= 0;
      this.vy = 0;
      this.weight = 1;
    }

    draw(context){
     // context.fillStyle = "white";
     // context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(input){
      
      if (input.keys.indexOf("ArrowRight") > -1) {
        this.speed = 5;
      } else if (input.keys.indexOf("ArrowLeft") > -1) {
        this.speed = -5;
      } else if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
        this.vy -= 30;
      } 
      else {
        this.speed = 0;
      }
     
      //horizontal movement
      this.x += this.speed;
      if (this.x < 0) this.x = 0;
      else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width
      //vertical movement
      this.y += this.vy;
      if (!this.onGround()){
        this.vy += this.weight;
      } else {
        this.vy = 0;
      }
      if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height
    }
    onGround() {
      return this.y >= this.gameHeight - this.height;
    }
  }

  // Background environment for Player && Enemy objects

  class Background {
    constructor(gameWidth, gameHeight){
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.image = document.getElementById('backgroundImage');
      this.x = 0;
      this.y = 15; 
      this.width = 1500;
      this.height = 1060;
      this.speed = 2;
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
    update(){
      this.x -= this.speed;
      if (this.x < 0 - this.width) this.x = 0;
    }
  }

  //Enemy object && function
  
  class Enemy {

  }
  // Animating, adding && removing enemies
  function handleEnemies(){

  }
  
  // Display score || Game Over text

  function displayStatus(){

  }

  const input = new ControlInput();
  const player = new Player(canvas.width, canvas.height);
  const background = new Background(canvas.width, canvas.height);
  


  // Perpetual drawing && animation loop

  function animationLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    background.draw(ctx);
    background.update();
    player.draw(ctx);
    player.update(input);
    requestAnimationFrame(animationLoop);

  }
  animationLoop();
})