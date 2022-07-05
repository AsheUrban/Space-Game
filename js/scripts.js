window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas-1');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 720;

  //Directional controls for Player

  class ControlInput {
    constructor() {
      this.keys = [];
      window.addEventListener('keydown', function(e){
        console.log(e);
      });
      // window.addEventListener("keydown", e => {
      //   if ((   e.key === "ArrowDown" ||
      //           e.key === "ArrowUp" ||
      //           e.key === "ArrowLeft" ||
      //           e.key === "ArrowRight")
      //           && this.keys.indexOf(e.key) === -1) {
      //     this.keys.push(e.key);
      //   }
      //   console.log(e.key, this.keys);
      // });

      // window.addEventListener("keyup", e => {
      //   if (    e.key === "ArrowDown" ||
      //           e.key === "ArrowUp" ||
      //           e.key === "ArrowLeft" ||
      //           e.key === "ArrowRight") {
      //     this.key.splice(this.keys.indexOf(e.key), 1);
      //   }
      //   console.log(e.key, this.keys);
      // });
    }
  }

  //Player object && function

  class Player {

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

  // Perpetual drawing && animation loop

  function animationLoop(){

  }
})