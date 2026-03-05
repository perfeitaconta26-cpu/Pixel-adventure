class Enemy{

constructor(x,y,type){

this.x=x
this.y=y

this.w=40
this.h=40

this.type=type

this.speed=2
this.dir=1

}

update(){

this.x+=this.speed*this.dir

if(this.x<0||this.x>2000){

this.dir*=-1

}

}

draw(){

if(this.type=="zombie") ctx.fillStyle="green"
if(this.type=="lava") ctx.fillStyle="orange"
if(this.type=="alien") ctx.fillStyle="purple"

ctx.fillRect(this.x,this.y,this.w,this.h)

}

}