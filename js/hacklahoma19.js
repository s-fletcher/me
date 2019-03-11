var canvas = document.getElementById("hacklahoma19"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 500,
    player = {
      width : 15,
      height : 16,
      x : 300,
      y : height - 66,
      speed: 5,
      hSpeed: 2,
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = {},
    friction = .85,
    gravity = 0.4;

var boxes = [];
boxes.push({
  x: 0,
  y: height - 50,
  height: 50,
  width: width,
  color: '#38af5e'
});
boxes.push({
  x: 100,
  y: height - 150,
  height: 100,
  width: 25,
  color: '#5e421a'
});
boxes.push({
  x: 62.5,
  y: height - 250,
  height: 100,
  width: 100,
  color: '#187918'
});
boxes.push({
  x: 0,
  y: 0,
  height: 50,
  width: width,
  color: '#63c8f0'
});
boxes.push({
  x: 50,
  y: 0,
  height: 70,
  width: 200,
  color: '#63c8f0'
});
boxes.push({
  x: 450,
  y: 0,
  height: 75,
  width: 250,
  color: '#63c8f0'
});
boxes.push({
  x: 800,
  y: 0,
  height: 60,
  width: 80,
  color: '#63c8f0'
});

canvas.width = width;
canvas.height = height;

// setting up player
ctx.fillStyle = "red";
ctx.fillRect(player.x, player.y, player.width, player.height);
// setting up enviroment
ctx.fillStyle = "green";
ctx.fillRect(0, height - 50, width, 50);

// key events
onkeydown = onkeyup = function(e){
  e = e || event; // to deal with IE
  keys[e.keyCode] = e.type == 'keydown';
}

// start animating
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

// for getting color at pixel
function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

// update function
function update(){
  if(document.getElementById("hacklahoma19-modal").style.display != "none") {
    var oldX = player.x;
    var oldY = player.y;
    if (keys[87] || keys[32]) {
      // W or spaces
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    if (keys[68]) {
      // D
      if (player.velX < player.speed) {
        player.velX += player.hSpeed;
       }
    }
    if (keys[65]) {
      // A
      if (player.velX > -player.speed) {
        player.velX -= player.hSpeed;
      }
    }

    player.velX *= friction;
    player.velY += gravity;

    player.x += player.velX;
    player.y += player.velY;

    if (player.x >= width-player.width) {
      player.x = width-player.width;
    }
    else if (player.x <= 0) {
      player.x = 0;
    }

    if(player.y >= height-player.height - 50){
      player.y = height - player.height - 50;
      player.jumping = false;
    }

    // draw boxes
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < boxes.length; i++) {
      ctx.fillStyle = boxes[i].color;
      ctx.fillRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }
  requestAnimationFrame(update);
}

window.addEventListener("load", function(){
  update();
});
