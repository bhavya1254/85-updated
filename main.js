canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100; 
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;
function add() {
	background_imgTag = new Image();
	background_imgTag.onlaod = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onlaod = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);     
}

function uploadgreencar() {
      
	if(greencar_y >=10)
{
	greencar_y = greencar_y - 10;
	console.log("When up arrow is pressed,  x = "+ greencar_x + " | y = " +greencar_y);
	uploadBackground();
	uploadgreencar;
}
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
window.addEventListener("keydown", my_keydown);




function up()
{
	function my_keydown(e)
{
  keyPressed = e.keyCode;
  console.log(keyPressed);
     if(keyPressed =='38'){
		up();
		console.log("up");
	 }	
}

}

function down()
{
	function my_keydown(e)
	{
	  keyPressed = e.keyCode;
	  console.log(keyPressed);
		 if(keyPressed =='40'){
			down();
			console.log("down");
		 }	
	}
}

function left()
{
	function my_keydown(e)
	{
	  keyPressed = e.keyCode;
	  console.log(keyPressed);
		 if(keyPressed =='37'){
			left();
			console.log("left");
		 }	
	}
}

function right()
{
	function my_keydown(e)
	{
	  keyPressed = e.keyCode;
	  console.log(keyPressed);
		 if(keyPressed =='39'){
			right();
			console.log("rigth");
		 }	
	}
}
