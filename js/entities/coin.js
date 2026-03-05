class Coin{

constructor(x,y){

this.x=x
this.y=y

this.r=10
this.collected=false

}

draw(){

if(this.collected) return

ctx.fillStyle="yellow"

ctx.beginPath()
ctx.arc(this.x,this.y,this.r,0,Math.PI*2)

ctx.fill()

}

}