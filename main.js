var canvas = new fabric.Canvas('myCanvas');
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

function load_img() {
    fabric.Image.fromURL("GOLF PUTT.jpg", function(Img) {
 hole_obj = Img;
 hole_obj.scaleToWidth(50);
 hole_obj.scaleToHeight(50);
 hole_obj.set({
     top: hole_y,
     left:hole_x
 });
 canvas.add(hole_obj);
});
new_image();
}


function new_image() {
    fabric.Image.fromURL("ball.jpg", function(Img) {
 hole_obj = Img;
 hole_obj.scaleToWidth(50);
 hole_obj.scaleToHeight(50);
 hole_obj.set({
     top: hole_y,
     left:hole_x
 });
 canvas.add(hole_obj);
});
new_image();
}

if((ball_x==hole_x)&&(ball_y==hole_y)){
    canvas.remove(ball_obj);

    document.getElementById("hd3").innerHTML="You have hit the goal!!!";
    document.getElementById("myCanvas").style.borderColor="red";

    function down()
    {
        if(ball_y <=450)
    {
       ball_y = ball_y + block_image_height;
       console.log("block_image_height =" + block_image_height);
       console.log("When Down arrow key is pressed, X = "+ ball_x + ", Y = "+ball_y);
       canvas.remove(ball_obj);
       new_image();
    }
    } 

    function up()
{
    if(player_y >=0)
{
   ball_y = ball_y - block_image_height;
   console.log("block_image_height =" + block_image_height);
   console.log("When Up arrow key is pressed, X = "+ ball_x + ", Y = "+ball_y);
   canvas.remove(ball_obj);
  new_image()
}
} 


function left()
{
    if(ball_x >=0)
{
  ball_x = ball_x - block_image_width;
   console.log("block_image_width =" + block_image_width);
   console.log("When Left arrow key is pressed, X = "+ ball_x + ", Y = "+ball_y);
   canvas.remove(ball_obj);
   new_image()
}
}

function right()
{
    if(ball_x <=850)
{
   ball_x = ball_x + block_image_width;
   console.log("block_image_width =" + block_image_width);
   console.log("When Right arrow key is pressed, X = "+ ball_x + ", Y = "+ball_y);
   canvas.remove(ball_obj);
  new_image();
}
}
}
