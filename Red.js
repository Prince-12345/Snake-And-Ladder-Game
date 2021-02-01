class Redpiece{

constructor(x,y,width,height){

var options = {
    friction:2,
    frictionAir: 0.098,
    density: 0.001,
    restitution:0
    
}

this.body = Bodies.rectangle(x , y, width , height , options);
this.body.collisionFilter = { 'group': -1, 'category': 2, 'mask': 0};
this.image = loadImage("red.png");
this.width = width;
this.height = height;

World.add(world, this.body);
}


display(){
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x , pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0 , this.width, this.height);
pop();

}


moveRight(){
    Body.setVelocity(this.body,{x:5.6 , y: 0});
}

moveLeft(){
    Body.setVelocity(this.body,{x:-5.6 , y: 0});
}
moveUp(){
    Body.setVelocity(this.body,{x:0 , y: -5.5});
}


}