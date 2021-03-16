class Drop{
constructor(x,y){
var options = { 
'restitution':0.1,
'friction':0.1
}
          
this.body = Bodies.circle(x,y,10,options);
this.radius = 8;
World.add(world,this.body);
}
   
changePosition(){
if(this.body.position.y > height){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
}
}
  
display(){
strokeWeight(1);
stroke("blue");
fill("blue");
ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}