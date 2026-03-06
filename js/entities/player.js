const player = {
    x: 100,
    y: 300,
    width: 60,
    height: 70,

    vx: 0,
    vy: 0,

    speed: 4,
    jumpPower: 12,
    gravity: 0.6,

    onGround: false,

    direction: 1,

    walkFrame: 0
};

const keys = {};

document.addEventListener("keydown", (e)=>{
    keys[e.key] = true;
});

document.addEventListener("keyup", (e)=>{
    keys[e.key] = false;
});


function updatePlayer(){

    player.vx = 0;

    if(keys["ArrowRight"] || keys["d"]){
        player.vx = player.speed;
        player.direction = 1;
    }

    if(keys["ArrowLeft"] || keys["a"]){
        player.vx = -player.speed;
        player.direction = -1;
    }

    if((keys[" "] || keys["w"] || keys["ArrowUp"]) && player.onGround){
        player.vy = -player.jumpPower;
        player.onGround = false;
    }

    player.vy += player.gravity;

    player.x += player.vx;
    player.y += player.vy;

    // chão simples
    if(player.y > 330){
        player.y = 330;
        player.vy = 0;
        player.onGround = true;
    }

    if(player.vx !== 0){
        player.walkFrame += 0.2;
    }else{
        player.walkFrame = 0;
    }

}


function drawPlayer(ctx){

    ctx.save();

    if(player.direction === -1){
        ctx.scale(-1,1);
        ctx.translate(-player.x*2-player.width,0);
    }

    const x = player.x;
    const y = player.y;

    // cabeça
    ctx.fillStyle = "#ffd39b";
    ctx.fillRect(x+20, y, 20, 20);

    // corpo
    ctx.fillStyle = "#3a6df0";
    ctx.fillRect(x+20, y+20, 20, 30);

    // braços
    ctx.fillStyle = "#ffd39b";
    ctx.fillRect(x+5, y+22, 15, 10);
    ctx.fillRect(x+40, y+22, 15, 10);

    // animação das pernas
    let legOffset = Math.sin(player.walkFrame) * 5;

    ctx.fillStyle = "#222";

    ctx.fillRect(x+20, y+50, 8, 20 + legOffset);
    ctx.fillRect(x+32, y+50, 8, 20 - legOffset);

    ctx.restore();

}