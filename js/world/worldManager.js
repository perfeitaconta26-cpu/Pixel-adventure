class WorldManager{

constructor(){

this.world=1
this.level=1

}

nextLevel(){

this.level++

if(this.level>10){

this.level=1
this.world++

}

loadLevel()

}

}

const worldManager=new WorldManager()