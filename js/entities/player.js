class Player{

constructor(x,y){

this.x=x
this.y=y

this.w=40
this.h=40

this.velX=0
this.velY=0

this.speed=4
this.jump=12

this.gravity=0.6

this.onGround=false

}

update(){

this.velX=0

if(keys["a"]||keys["ArrowLeft"]) this.velX=-this.speed
if(keys["d"]||keys["ArrowRight"]) this.velX=this.speed

if((keys[" "]||keys["w"]) && this.onGround){

this.velY=-this.jump
this.onGround=false

}

this.velY+=this.gravity

this.x+=this.velX
this.y+=this.velY

this.onGround=false

platforms.forEach(p=>{

if(collide(this,p)){

this.y=p.y-this.h
this.velY=0
this.onGround=true

}

})

}

draw(){

ctx.fillStyle="red"

ctx.fillRect(this.x,this.y,this.w,this.h)

}

}