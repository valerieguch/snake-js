const canvas = document.querySelector("#game");
const ctx = canvas.getContext('2d');
const scoreP = document.querySelector(".score");


 const ground = new Image();
 ground.src = "ground.png";

 const foodImg = new Image();
 foodImg.src = "str.png";

 let box = 75;

 let score = 0;



 let food = {
 	x: Math.floor(Math.random() * 7 ) * box,
 	y: Math.floor(Math.random() * 7 ) * box,
 };


  let snake = [];
  snake[0] = {
  	x: 4 * box,
  	y: 4 * box,
  }


document.addEventListener("keydown", direction);



let dir;
function direction(event){
	 if(event.keyCode == 37 && dir != "right")
	 	dir = "left";
	 if(event.keyCode == 38 && dir != "down")
	 	dir = "up";
	 if(event.keyCode == 39 && dir != "left")
	 	dir = "right";
	 if(event.keyCode == 40 && dir != "down")
	 	dir = "down";
}


function eatTail(head, arr){
	for(let i = 1; i < arr.length; i++){
		  if(head.x == arr[i].x && head.y == arr[i].y )
		  	clearInterval(game);
	}
}






 function  drawGame(){
 	ctx.drawImage(ground, 0, 0);
 	ctx.drawImage(foodImg, food.x, food.y);

	 	for(let i = 0; i < snake.length; i++){
	 		ctx.fillStyle = i == 0 ?  "gray" : "red";
	 		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	  }
	scoreP.innerHTML = "Score " + score;


		let snakeX = snake[0].x;
		let snakeY = snake[0].y;


if(snakeX == food.x && snakeY == food.y){
	score++;
	food = {
		x: Math.floor(Math.random() * 7 + 1 ) * box,
 	  y: Math.floor(Math.random() * 7 + 1) * box,
 };

	}
 else snake.pop();


		if(dir == "left") snakeX -= box;
		if(dir == "right") snakeX += box;
		if(dir == "up") snakeY -= box;
		if(dir == "down") snakeY += box;

	let newHead = {
		x: snakeX,
		y: snakeY,
	};
	snake.unshift(newHead);


	eatTail(newHead, snake);


}
let game = setInterval(drawGame ,250);

