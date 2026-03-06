const player = {
    x: 100,
    y: 300,

    width: 40,
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

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

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
    } else {
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
    ctx.fillStyle = "#f5cfa0";
    ctx.fillRect(x+12, y, 16, 16);

    // corpo
    ctx.fillStyle = "#2f6df2";
    ctx.fillRect(x+12, y+16, 16, 24);

    // braços
    ctx.fillStyle = "#f5cfa0";
    ctx.fillRect(x, y+18, 12, 6);
    ctx.fillRect(x+28, y+18, 12, 6);

    // pernas animadas
    let leg = Math.sin(player.walkFrame)*4;

    ctx.fillStyle = "#222";

    ctx.fillRect(x+12, y+40, 6, 20+leg);
    ctx.fillRect(x+22, y+40, 6, 20-leg);

    ctx.restore();
}