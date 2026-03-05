let platforms=[]
let enemies=[]
let coins=[]
let player

function loadLevel(){

let data

if(worldManager.world==1) data=world1[worldManager.level-1]
if(worldManager.world==2) data=world2[worldManager.level-1]
if(worldManager.world==3) data=world3[worldManager.level-1]

platforms=data.platforms

player=new Player(data.player.x,data.player.y)

enemies=[]
coins=[]

data.enemies.forEach(e=>{

enemies.push(new Enemy(e.x,e.y,e.type))

})

data.coins.forEach(c=>{

coins.push(new Coin(c.x,c.y))

})

}