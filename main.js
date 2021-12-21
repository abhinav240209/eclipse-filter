color=document.getElementById("color").value;
function preload(){

}
function setup(){
   canvas=createCanvas(600,400);
   canvas.position(100,250);
   camera=createCapture(VIDEO);
   camera.hide();
    
   
}

function draw(){
   image(camera,100,50,400,300);
   fill("red");
   stroke("black");
   circle(100,350,50);
   circle(500,350,50);
   circle(100,50,50);
   circle(500,50,50);
   strokeWeight(5);
   line(100,350,500,350);
   line(100,350,100,50);
   line(100,50,500,50);
   line(500,50,500,350); 
   
}

function apply(){
    color=document.getElementById("color").value;
    tint(color);
 
 }
 
 function take_snapshot() {
      save("Image.png");
 }