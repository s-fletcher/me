var canvas = document.getElementById('header');
canvas.width = window.innerWidth;
canvas.height = 450;

var c = canvas.getContext('2d');
c.globalAlpha = 0;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  spawnArray(1);
});

function Circle(x, y, dx, dy, radius, radiusMax, color)
{
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.dr = .01;
  this.radius = radius;
  this.radiusMax = radiusMax;
  this.color = color;

  this.draw = function()
  {
    c.fillStyle = colors[color];
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  }

  this.update = function()
  {
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0)
    {
      this.dx = -this.dx;
    }
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0)
    {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    if(this.radius < this.radiusMax)
    {
      this.radius += this.dr;
    }
    this.draw();
  }
}

// var colors = ['rgb(43, 45, 66)', 'rgb(141, 153, 174)', 'rgb(182, 190, 203)'];
// var colors = ['rgb(233, 196, 106)', 'rgb(244, 162, 97)', 'rgb(231, 111, 81)'];
// var colors = ['#003459', '#00171F', '#007EA7'];
var colors = ['#ffffff', '#eeeeee', '#dddddd'];
var circleArray;
var x;
var y;
var dx;
var dy;
var radius;
var color;
function spawnArray()
{
  circleArray = [];
  for (var i = 0; i < canvas.width/3; i++) {
    x = Math.random() * (canvas.width - radius * 2) + radius;
    y = Math.random() * (canvas.height - radius * 2) + radius;
    dx = (Math.random() * .7) - .35;
    dy = (Math.random() * .7) - .35;
    radius = Math.random() * 2 + 0.01;
    color = Math.floor(Math.random() * 3);
    circleArray.push(new Circle(x, y, dx, dy, radius, radius, color));
  }
}

circleArray = [];
x = Math.random() * (canvas.width - radius * 2) + radius;
y = Math.random() * (canvas.height - radius * 2) + radius;
dx = (Math.random() * .7) - .35;
dy = (Math.random() * .7) - .35;
radius = Math.random() * 2 + 0.01;
color = Math.floor(Math.random() * 3);
circleArray.push(new Circle(x, y, dx, dy, 0, radius, color));

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  if(circleArray.length < canvas.width/3)
  {
    for(var i = 0; i < 5; i++)
    {
      x = Math.random() * (canvas.width - radius * 2) + radius;
      y = Math.random() * (canvas.height - radius * 2) + radius;
      dx = (Math.random() * .7) - .35;
      dy = (Math.random() * .7) - .35;
      radius = Math.random() * 2 + 0.01;
      color = Math.floor(Math.random() * 3);
      circleArray.push(new Circle(x, y, dx, dy, 0, radius, color));
    }
  }
  if(c.globalAlpha < 1)
  {
    c.globalAlpha += 0.01;
  }
  for(var i = 0; i < circleArray.length; i++)
  {
    circleArray[i].update();
  }
}

animate();
