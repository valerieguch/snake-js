const canvas = document.querySelector("#game");
const ctx = canvas.getContext('2d');

const scoreP = document.querySelector(".score");

const box = 75;

let score = 0;

const strImg = new Image();
strImg.src = "str.png";



const groundImg = new Image();
groundImg.src = "ground.png";

let snake = [];
snake[0] = {
	x: 4 * box,
	y: 4 * box,
}

let strCoord = {
x: Math.floor(Math.random() * 7) * box,
y: Math.floor(Math.random() * 7) * box,
}


document.addEventListener("keydown", direction);

let dir = 0;
function direction(event){

	if(event.keyCode == "37" && dir != "right")
		dir = "left";
	if(event.keyCode == "38" && dir != "down")
		dir = "up";
	if(event.keyCode == "39" && dir != "left")
		dir = "right";
	if(event.keyCode == "40" && dir != "up")
		dir = "down";


}

// function eatTail(head, arr){
// 	for(let i = 0; i < arr.length; i++){
// 		  if(head.x == arr[i].x && head.y == arr[i].y )
// 		  	clearInterval(game);
// 	}
// }


function drawGame(){

	ctx.drawImage(groundImg, 0, 0);
	ctx.drawImage(strImg,strCoord.x,  strCoord.y);

	ctx.fillStyle = "green";
	ctx.fillRect(snake[0].x, snake[0].y, box, box);



  let snakeX = snake[0].x;
	let snakeY = snake[0].y;

  if(snakeX == strCoord.x && snakeY == strCoord.y){
   score++;
   scoreP.innerHTML = "Score " + score;
   strCoord = {
			x: Math.floor(Math.random() * 7) * box,
			y: Math.floor(Math.random() * 7) * box,
   }
  }
  else
  	snake.pop();


	if(dir == "left") snakeX -= box;
	if(dir == "right") snakeX += box;
	if(dir == "up") snakeY -= box;
	if(dir == "down") snakeY += box;

	let newHead = {
		x: snakeX,
		y: snakeY,
	}

	snake.unshift(newHead);

for(let i = 0; i < snake.length; i++){
  	ctx.fillStyle = "green";
  	ctx.fillRect(snake[i].x, snake[i].y, 75, 75);
  }

// eatTail(newHead, snake);


}



let game = setInterval(drawGame, 250);