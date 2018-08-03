var canvas;

// ////////////////////helpers///////////
function randCords(){
  return Math.floor(Math.random()*500);
}
// ////////////////////helpers///////////

function startGame(){
  canvas = document.getElementById('map').getContext('2d');
  var snake = new Snake(canvas);
  snake.render();

  var bomb = new Bomb(canvas);
  bomb.render();
  setTimeout(function(){bomb.clear();}, 1000)
}
startGame();
