window.addEventListener("load", function(){
  const canvas = document.getElementById("canvas-1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

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
      this.width = 200;
      this.height = 200;
      this.x = 0;
      this.y = this.gameHeight - this.height;
      this.speed= 0;
    }
    draw(context){
      context.fillStyle = "white";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
    update(input){
      //horizontal movement
      this.x += this.speed;
      if (input.keys.indexOf("ArrowRight") > -1) {
        this.speed = 5;
      } else {
        this.speed = 0;
      }
    }

  }

  // Background environment for Player && Enemy objects

  class Background {

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
  


  // Perpetual drawing && animation loop

  function animationLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    player.draw(ctx);
    player.update(input);
    requestAnimationFrame(animationLoop);

  }
  animationLoop();
})