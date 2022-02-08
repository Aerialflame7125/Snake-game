var snake =
{
  color:'green',
  speed: 25,
  direction: 'none',
  x: 0,
  y: 0
}

//create canvas
function setup() {
  frameRate(5)
  createCanvas(windowWidth, windowHeight);
    background(255);
}

// Snake Movement
function draw(){
  if(snake.direction == 'down'){
    snake.y = snake.y + snake.speed

  }
  else if(snake.direction == 'up'){
    snake.y = snake.y - snake.speed

  }
  else if(snake.direction == 'left'){
    snake.x = snake.x - snake.speed

  }
  else if(snake.direction == 'right'){
    snake.x = snake.x + snake.speed
  }
// Refresh screen
background(255);

// draw snake
fill(snake.color)
square(snake.x, snake.y, snake.speed)
 }

// Snake movement Var
function keyPressed(){
  if(keyCode == UP_ARROW){
    snake.direction = 'up'
  }
  else if(keyCode == DOWN_ARROW){
    snake.direction = 'down'
  }
  else if(keyCode == LEFT_ARROW){
    snake.direction = 'left'
  }
  else if(keyCode == RIGHT_ARROW){
    snake.direction = 'right'
  }
}