const player = {
    x: 100,
    y: 300,
    width: 80,
    height: 80,
    vx: 0,
    vy: 0,
    frame: 0,
    animation: "idle"
};

const sprites = {
    idle: [
        "assets/sprites/player/idle1.png",
        "assets/sprites/player/idle2.png"
    ],

    walk: [
        "assets/sprites/player/walk1.png",
        "assets/sprites/player/walk2.png",
        "assets/sprites/player/walk3.png",
        "assets/sprites/player/walk4.png",
        "assets/sprites/player/walk5.png",
        "assets/sprites/player/walk6.png"
    ],

    jump: [
        "assets/sprites/player/jump.png"
    ],

    fall: [
        "assets/sprites/player/fall.png"
    ]
};

let images = {};

for (let anim in sprites) {
    images[anim] = sprites[anim].map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });
}

function updateAnimation() {

    if (player.vy < -1) {
        player.animation = "jump";
    }

    else if (player.vy > 1) {
        player.animation = "fall";
    }

    else if (player.vx !== 0) {
        player.animation = "walk";
    }

    else {
        player.animation = "idle";
    }

    player.frame++;

    if (player.frame >= images[player.animation].length) {
        player.frame = 0;
    }
}

function drawPlayer(ctx){

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
    ctx.fillRect(x+5, y+20, 15, 10);
    ctx.fillRect(x+40, y+20, 15, 10);

    // pernas
    ctx.fillStyle = "#222";
    ctx.fillRect(x+20, y+50, 8, 20);
    ctx.fillRect(x+32, y+50, 8, 20);

}