const canvas=document.getElementById("game")
const ctx=canvas.getContext("2d")

canvas.width=960
canvas.height=540

let cameraX=0

loadLevel()

function update(){

player.update()

enemies.forEach(e=>e.update())

coins.forEach(c=>{

if(!c.collected){

if(

player.x<c.x+20 &&
player.x+40>c.x &&
player.y<c.y+20 &&
player.y+40>c.y

){

c.collected=true

}

}

})

cameraX=player.x-200

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.save()

ctx.translate(-cameraX,0)

platforms.forEach(p=>{

ctx.fillStyle="#654321"

ctx.fillRect(p.x,p.y,p.w,p.h)

})

coins.forEach(c=>c.draw())

enemies.forEach(e=>e.draw())

player.draw()

ctx.restore()

}

function loop(){

update()
draw()

requestAnimationFrame(loop)

}

loop()