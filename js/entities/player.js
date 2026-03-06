class Player{

constructor(x,y){

this.x = x
this.y = y

this.width = 40
this.height = 70

this.vx = 0
this.vy = 0

this.speed = 4
this.jumpPower = 12
this.gravity = 0.6

this.onGround = false
this.direction = 1
this.walkFrame = 0

}

update(){

this.vx = 0

if(keys["ArrowRight"] || keys["d"]){
this.vx = this.speed
this.direction = 1
}

if(keys["ArrowLeft"] || keys["a"]){
this.vx = -this.speed
this.direction = -1
}

if((keys[" "] || keys["w"] || keys["ArrowUp"]) && this.onGround){
this.vy = -this.jumpPower
this.onGround = false
}

this.vy += this.gravity

this.x += this.vx
this.y += this.vy

if(this.y > 330){
this.y = 330
this.vy = 0
this.onGround = true
}

if(this.vx !== 0){
this.walkFrame += 0.25
}else{
this.walkFrame = 0
}

}

draw(ctx){

ctx.save()

if(this.direction === -1){
ctx.scale(-1,1)
ctx.translate(-this.x*2-this.width,0)
}

const x = this.x
const y = this.y

// cabeça
ctx.fillStyle = "#f5cfa0"
ctx.fillRect(x+12,y,16,16)

// corpo
ctx.fillStyle = "#2f6df2"
ctx.fillRect(x+12,y+16,16,24)

// braços
ctx.fillStyle = "#f5cfa0"
ctx.fillRect(x,y+18,12,6)
ctx.fillRect(x+28,y+18,12,6)

// pernas animadas
let leg = Math.sin(this.walkFrame)*4

ctx.fillStyle = "#222"

ctx.fillRect(x+12,y+40,6,20+leg)
ctx.fillRect(x+22,y+40,6,20-leg)

ctx.restore()

}

}

let player

function updatePlayer(){
player.update()
}

function drawPlayer(ctx){
player.draw(ctx)
}